const { EXTENSIONS_CODE,EXTENSIONS_PROFILE  } = require('./profile')

// ========== 扩展结果类 (支持链式调用) ==========
class ExtensionResult {
  constructor(extensions = []) {
    this.extensions = extensions
  }

  /**
   * 根据扩展 ID 排除扩展
   * @param {Array} excludeIds - 要排除的扩展 id 数组
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  excludeById(excludeIds) {
    if (!Array.isArray(excludeIds)) {
      console.warn('excludeById: 参数必须是数组')
      return new ExtensionResult([...this.extensions])
    }

    const filtered = this.extensions.filter(
      (ext) => !excludeIds.includes(ext.id)
    )
    return new ExtensionResult(filtered)
  }

  /**
   * 根据扩展名称排除扩展
   * @param {Array} excludeNames - 要排除的扩展名称数组
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  excludeByName(excludeNames) {
    if (!Array.isArray(excludeNames)) {
      console.warn('excludeByName: 参数必须是数组')
      return new ExtensionResult([...this.extensions])
    }

    const filtered = this.extensions.filter(
      (ext) => !excludeNames.includes(ext.name)
    )
    return new ExtensionResult(filtered)
  }

  /**
   * 根据分类排除扩展
   * @param {Array} excludeCategories - 要排除的分类数组
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  excludeByCategory(excludeCategories) {
    if (!Array.isArray(excludeCategories)) {
      console.warn('excludeByCategory: 参数必须是数组')
      return new ExtensionResult([...this.extensions])
    }

    const filtered = this.extensions.filter(
      (ext) => !excludeCategories.includes(ext.category)
    )
    return new ExtensionResult(filtered)
  }

  /**
   * 排除某个配置组的所有扩展
   * @param {Array} configKeys - 要排除的配置键名数组
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  excludeConfig(configKeys) {
    if (!Array.isArray(configKeys)) {
      console.warn('excludeConfig: 参数必须是数组')
      return new ExtensionResult([...this.extensions])
    }

    // 获取要排除的扩展列表
    const excludeExtensions = []
    configKeys.forEach((key) => {
      const config = ExtensionUtils.getConfig(key)
      excludeExtensions.push(...ExtensionUtils.flatten(config))
    })

    // 提取要排除的扩展 ID
    const excludeIds = excludeExtensions.map((ext) => ext.id)

    const filtered = this.extensions.filter(
      (ext) => !excludeIds.includes(ext.id)
    )
    return new ExtensionResult(filtered)
  }

  /**
   * 添加更多扩展
   * @param {Array} configKeys - 配置键名数组
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  add(configKeys) {
    if (!Array.isArray(configKeys)) {
      console.warn('add: 参数必须是数组')
      return new ExtensionResult([...this.extensions])
    }

    const newExtensions = []
    configKeys.forEach((key) => {
      const config = ExtensionUtils.getConfig(key)
      newExtensions.push(...ExtensionUtils.flatten(config))
    })

    // 合并并去重
    const combined = [...this.extensions, ...newExtensions]
    return new ExtensionResult(this._deduplicateExtensions(combined))
  }

  /**
   * 自定义过滤
   * @param {Function} predicate - 过滤函数
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  filter(predicate) {
    if (typeof predicate !== 'function') {
      console.warn('filter: 参数必须是函数')
      return new ExtensionResult([...this.extensions])
    }

    const filtered = this.extensions.filter(predicate)
    return new ExtensionResult(filtered)
  }

  /**
   * 根据分类过滤
   * @param {Array} categories - 要保留的分类数组
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  filterByCategory(categories) {
    if (!Array.isArray(categories)) {
      console.warn('filterByCategory: 参数必须是数组')
      return new ExtensionResult([...this.extensions])
    }

    const filtered = this.extensions.filter((ext) =>
      categories.includes(ext.category)
    )
    return new ExtensionResult(filtered)
  }

  /**
   * 根据ID查找扩展
   * @param {String} id - 扩展ID
   * @returns {Object|undefined} 扩展对象
   */
  findById(id) {
    return this.extensions.find((ext) => ext.id === id)
  }

  /**
   * 根据名称查找扩展
   * @param {String} name - 扩展名称
   * @returns {Object|undefined} 扩展对象
   */
  findByName(name) {
    return this.extensions.find((ext) => ext.name === name)
  }

  /**
   * 检查是否包含某个扩展
   * @param {String} identifier - 扩展名称或ID
   * @returns {Boolean}
   */
  includes(identifier) {
    return this.extensions.some(
      (ext) => ext.name === identifier || ext.id === identifier
    )
  }

  /**
   * 获取所有扩展ID
   * @returns {Array} ID数组
   */
  toIds() {
    return this.extensions.map((ext) => ext.id)
  }

  /**
   * 获取所有扩展名称
   * @returns {Array} 名称数组
   */
  toNames() {
    return this.extensions.map((ext) => ext.name)
  }

  /**
   * 获取分类统计
   * @returns {Object} 分类统计对象
   */
  getStatistics() {
    const stats = {}
    this.extensions.forEach((ext) => {
      const category = ext.category || 'unknown'
      stats[category] = (stats[category] || 0) + 1
    })
    return stats
  }

  /**
   * 按名称排序
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  sortByName() {
    const sorted = [...this.extensions].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    return new ExtensionResult(sorted)
  }

  /**
   * 按ID排序
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  sortById() {
    const sorted = [...this.extensions].sort((a, b) => a.id.localeCompare(b.id))
    return new ExtensionResult(sorted)
  }

  /**
   * 按分类排序
   * @returns {ExtensionResult} 新的 ExtensionResult 实例
   */
  sortByCategory() {
    const sorted = [...this.extensions].sort((a, b) => {
      const categoryA = a.category || 'zzz'
      const categoryB = b.category || 'zzz'
      return categoryA.localeCompare(categoryB)
    })
    return new ExtensionResult(sorted)
  }

  /**
   * 获取扩展数量
   * @returns {Number} 扩展数量
   */
  count() {
    return this.extensions.length
  }

  /**
   * 获取结果数组
   * @returns {Array} 扩展对象数组
   */
  get() {
    return this.extensions
  }

  /**
   * 调试模式 - 打印详细信息
   * @returns {ExtensionResult} 当前实例（支持链式调用）
   */
  debug() {
    console.log(`📊 当前包含 ${this.count()} 个扩展`)
    console.log('📈 分类统计:', this.getStatistics())
    return this
  }

  /**
   * 打印扩展列表
   * @param {Boolean} showDetails - 是否显示详细信息 (id + name + category)
   * @returns {ExtensionResult} 当前实例（支持链式调用）
   */
  print(showDetails = true) {
    console.log(`📦 共 ${this.extensions.length} 个扩展:`)

    if (showDetails) {
      // 按分类分组显示
      const grouped = {}
      this.extensions.forEach((ext) => {
        const category = ext.category || 'unknown'
        if (!grouped[category]) {
          grouped[category] = []
        }
        grouped[category].push(ext)
      })

      Object.entries(grouped).forEach(([category, exts]) => {
        console.log(`\n  [${category}] (${exts.length}个):`)
        exts.forEach((ext) => {
          console.log(`    - ${ext.name} (${ext.id})`)
        })
      })
    } else {
      this.extensions.forEach((ext) => {
        console.log(`  ${ext.name}`)
      })
    }

    return this
  }

  /**
   * 去重扩展数组（基于ID）
   * @private
   * @param {Array} extensions - 扩展数组
   * @returns {Array} 去重后的扩展数组
   */
  _deduplicateExtensions(extensions) {
    const uniqueExtensions = []
    const seenIds = new Set()

    extensions.forEach((ext) => {
      if (!seenIds.has(ext.id)) {
        seenIds.add(ext.id)
        uniqueExtensions.push(ext)
      }
    })

    return uniqueExtensions
  }
}

// ========== 优化后的扩展工具函数 ==========
const ExtensionUtils = {
  /**
   * 根据名称获取扩展详细信息
   * @param {String} name - 扩展名称
   * @returns {Object|null} 扩展详细信息
   */
  getExtensionByName(name) {
    return EXTENSIONS_CODE.find((ext) => ext.name === name) || null
  },

  /**
   * 根据ID获取扩展详细信息
   * @param {String} id - 扩展ID
   * @returns {Object|null} 扩展详细信息
   */
  getExtensionById(id) {
    return EXTENSIONS_CODE.find((ext) => ext.id === id) || null
  },

  /**
   * 根据分类获取扩展
   * @param {String} category - 分类名称
   * @returns {Array} 扩展数组
   */
  getExtensionsByCategory(category) {
    return EXTENSIONS_CODE.filter((ext) => ext.category === category)
  },

  /**
   * 展开配置，将嵌套的配置项展开为一维数组，并转换为包含id和name的对象
   * @param {Array|Object} config - 配置项
   * @returns {Array} 展开后的扩展对象列表
   */
  flatten(config) {
    const result = []

    if (Array.isArray(config)) {
      config.forEach((name) => {
        const extension = this.getExtensionByName(name)
        if (extension) {
          result.push(extension)
        } else {
          console.warn(`⚠️ 未找到扩展: ${name}`)
        }
      })
    } else if (typeof config === 'object' && config !== null) {
      for (const value of Object.values(config)) {
        result.push(...this.flatten(value))
      }
    }

    // 去重（基于id）
    const uniqueExtensions = []
    const seenIds = new Set()

    result.forEach((ext) => {
      if (!seenIds.has(ext.id)) {
        seenIds.add(ext.id)
        uniqueExtensions.push(ext)
      }
    })

    return uniqueExtensions
  },

  /**
   * 合并多个配置 (返回 ExtensionResult 支持链式调用)
   * @param {Array} configKeys - 配置键名数组
   * @returns {ExtensionResult} ExtensionResult 实例
   */
  combine(configKeys) {
    if (!Array.isArray(configKeys)) {
      console.warn('combine: 参数必须是数组')
      return new ExtensionResult([])
    }

    const result = []

    configKeys.forEach((key) => {
      if (typeof key !== 'string') {
        console.warn(`combine: 配置键必须是字符串，跳过: ${key}`)
        return
      }

      const config = this.getConfig(key)
      result.push(...this.flatten(config))
    })

    // 去重（基于id）
    const uniqueExtensions = []
    const seenIds = new Set()

    result.forEach((ext) => {
      if (!seenIds.has(ext.id)) {
        seenIds.add(ext.id)
        uniqueExtensions.push(ext)
      }
    })

    return new ExtensionResult(uniqueExtensions)
  },

  /**
   * 根据键名获取配置
   * @param {String} key - 配置键名，支持嵌套访问如 'frontend.css.base'
   * @returns {Array|Object} 配置项
   */
  getConfig(key) {
    if (typeof key !== 'string') {
      console.warn('getConfig: 键名必须是字符串')
      return []
    }

    const keys = key.split('.')
    let config = EXTENSIONS_PROFILE

    for (const k of keys) {
      config = config[k]
      if (!config) {
        console.warn(`配置路径不存在: ${key}`)
        return []
      }
    }

    return config
  },

  /**
   * 获取所有可用的配置路径
   * @returns {Array} 配置路径数组
   */
  getAvailableConfigs() {
    const paths = []

    const traverse = (obj, currentPath = '') => {
      for (const [key, value] of Object.entries(obj)) {
        const path = currentPath ? `${currentPath}.${key}` : key

        if (Array.isArray(value)) {
          paths.push(path)
        } else if (typeof value === 'object' && value !== null) {
          traverse(value, path)
        }
      }
    }

    traverse(EXTENSIONS_PROFILE)
    return paths.sort()
  },

  /**
   * 获取所有扩展的名称列表
   * @returns {Array} 所有扩展名称数组
   */
  getAllExtensionNames() {
    return EXTENSIONS_CODE.map((ext) => ext.name)
  },

  /**
   * 获取所有扩展的ID列表
   * @returns {Array} 所有扩展ID数组
   */
  getAllExtensionIds() {
    return EXTENSIONS_CODE.map((ext) => ext.id)
  },

  /**
   * 获取所有分类
   * @returns {Array} 分类数组
   */
  getAllCategories() {
    const categories = new Set(EXTENSIONS_CODE.map((ext) => ext.category))
    return Array.from(categories).sort()
  },

  /**
   * 搜索扩展
   * @param {String} searchTerm - 搜索词
   * @returns {ExtensionResult} 搜索结果
   */
  search(searchTerm) {
    if (typeof searchTerm !== 'string') {
      console.warn('search: 搜索词必须是字符串')
      return new ExtensionResult([])
    }

    const term = searchTerm.toLowerCase()
    const results = EXTENSIONS_CODE.filter(
      (ext) =>
        ext.name.toLowerCase().includes(term) ||
        ext.id.toLowerCase().includes(term) ||
        (ext.category && ext.category.toLowerCase().includes(term))
    )

    return new ExtensionResult(results)
  },
}


module.exports = {
  ExtensionUtils
}
