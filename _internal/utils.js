const EXTENSIONS_CODE = require('./data.json')
const { EXTENSIONS_PROFILE } = require('./constants')

// ========== 扩展结果类 (核心功能) ==========
class ExtensionResult {
  constructor(extensions = []) {
    this.extensions = extensions
  }

  /**
   * 添加扩展 (通过名称)
   * @param {Array<string>} names - 扩展名称数组
   * @returns {ExtensionResult}
   */
  add(names) {
    const newExts = EXTENSIONS_CODE.filter((ext) => names.includes(ext.name))
    return new ExtensionResult(this._dedupe([...this.extensions, ...newExts]))
  }

  /**
   * 添加扩展 (通过配置组)
   * @param {Array<string>} configKeys - 配置键名数组 ['core', 'frontend.html']
   * @returns {ExtensionResult}
   */
  addConfig(configKeys) {
    const newExts = []
    configKeys.forEach((key) => {
      const config = ExtensionUtils.getConfig(key)
      newExts.push(...ExtensionUtils.flatten(config))
    })

    return new ExtensionResult(this._dedupe([...this.extensions, ...newExts]))
  }

  /**
   * 排除扩展 (通过名称)
   * @param {Array<string>} names - 要排除的扩展名称
   * @returns {ExtensionResult}
   */
  exclude(names) {
    const filtered = this.extensions.filter((ext) => !names.includes(ext.name))
    return new ExtensionResult(filtered)
  }

  /**
   * 排除扩展 (通过配置组)
   * @param {Array<string>} configKeys - 配置键名数组
   * @returns {ExtensionResult}
   */
  excludeConfig(configKeys) {
    const excludeExts = []
    configKeys.forEach((key) => {
      const config = ExtensionUtils.getConfig(key)
      excludeExts.push(...ExtensionUtils.flatten(config))
    })

    const excludeNames = excludeExts.map((ext) => ext.name)
    return this.exclude(excludeNames)
  }

  /**
   * 自定义过滤
   * @param {Function} fn - 过滤函数
   * @returns {ExtensionResult}
   */
  filter(fn) {
    return new ExtensionResult(this.extensions.filter(fn))
  }

  /**
   * 获取扩展 ID 数组
   * @returns {Array<string>}
   */
  toIds() {
    return this.extensions.map((ext) => ext.id)
  }

  /**
   * 获取扩展名称数组
   * @returns {Array<string>}
   */
  toNames() {
    return this.extensions.map((ext) => ext.name)
  }

  /**
   * 转换为 VSCode 扩展配置格式
   * @param {Object} options - 配置选项
   * @param {Array<string>} options.optional - 可选扩展名称数组
   * @returns {Object} 包含必需和可选扩展的配置对象
   */
  toVSCodeConfig(options = {}) {
    const { optional = [] } = options

    // 分离必需和可选扩展
    const required = this.extensions.filter(
      (ext) => !optional.includes(ext.name),
    )
    const optionalExts = this.extensions.filter((ext) =>
      optional.includes(ext.name),
    )

    return {
      recommendations: this.toIds(),
      _required: required.map((ext) => ({ name: ext.name, id: ext.id })),
      _optional: optionalExts.map((ext) => ({ name: ext.name, id: ext.id })),
    }
  }

  /**
   * 获取原始扩展数组
   * @returns {Array}
   */
  get() {
    return this.extensions
  }

  /**
   * 获取扩展数量
   * @returns {number}
   */
  count() {
    return this.extensions.length
  }

  /**
   * 去重 (基于 ID)
   * @private
   */
  _dedupe(exts) {
    const seen = new Set()
    return exts.filter((ext) => {
      if (seen.has(ext.id)) return false
      seen.add(ext.id)
      return true
    })
  }
}

// ========== 工具函数 ==========
const ExtensionUtils = {
  /**
   * 合并多个配置组
   * @param {Array<string>} configKeys - 配置键名数组
   * @returns {ExtensionResult}
   */
  combine(configKeys) {
    return new ExtensionResult().addConfig(configKeys)
  },

  /**
   * 根据键名获取配置 (支持嵌套路径)
   * @param {string} key - 配置键名 'frontend.css.base'
   * @returns {Array|Object}
   */
  getConfig(key) {
    const keys = key.split('.')
    let config = EXTENSIONS_PROFILE

    for (const k of keys) {
      config = config[k]
      if (!config) {
        console.warn(`⚠️ 配置路径不存在: ${key}`)
        return []
      }
    }

    return config
  },

  /**
   * 展开配置为扩展对象数组
   * @param {Array|Object} config
   * @returns {Array}
   */
  flatten(config) {
    const result = []

    if (Array.isArray(config)) {
      config.forEach((name) => {
        const ext = EXTENSIONS_CODE.find((e) => e.name === name)
        if (ext) {
          result.push(ext)
        } else {
          console.warn(`⚠️ 未找到扩展: ${name}`)
        }
      })
    } else if (typeof config === 'object' && config !== null) {
      Object.values(config).forEach((value) => {
        result.push(...this.flatten(value))
      })
    }

    // 去重
    const seen = new Set()
    return result.filter((ext) => {
      if (seen.has(ext.id)) return false
      seen.add(ext.id)
      return true
    })
  },

  /**
   * 通过名称查找扩展
   * @param {string} name
   * @returns {Object|null}
   */
  findByName(name) {
    return EXTENSIONS_CODE.find((ext) => ext.name === name) || null
  },

  /**
   * 通过 ID 查找扩展
   * @param {string} id
   * @returns {Object|null}
   */
  findById(id) {
    return EXTENSIONS_CODE.find((ext) => ext.id === id) || null
  },

  /**
   * 获取所有可用配置路径
   * @returns {Array<string>}
   */
  getAvailableConfigs() {
    const paths = []

    const traverse = (obj, path = '') => {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = path ? `${path}.${key}` : key

        if (Array.isArray(value)) {
          paths.push(currentPath)
        } else if (typeof value === 'object' && value !== null) {
          traverse(value, currentPath)
        }
      }
    }

    traverse(EXTENSIONS_PROFILE)
    return paths.sort()
  },
}

module.exports = {
  ExtensionResult,
  ExtensionUtils,
}
