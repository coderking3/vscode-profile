const fs = require('fs')
const path = require('path')
const { ExtensionUtils } = require('./utils')
const { EXTENSIONS_PRESETS } = require('./constants')

// ========== 生成器类 ==========
class ExtensionGenerator {
  constructor(outputDir = './extensions') {
    this.outputDir = outputDir
    this.ensureOutputDir()
  }

  /**
   * 确保输出目录存在
   */
  ensureOutputDir() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true })
    }
  }

  /**
   * 生成配置文件
   * @param {string} name - 配置名称
   * @param {Object} options - 配置选项
   * @param {Array<string>} options.configs - 配置组数组
   * @param {Array<string>} options.add - 要添加的扩展名称
   * @param {Array<string>} options.addConfig - 要添加的配置组
   * @param {Array<string>} options.exclude - 要排除的扩展名称
   * @param {Array<string>} options.excludeConfig - 要排除的配置组
   * @param {Array<string>} options.optional - 可选扩展名称
   * @param {Array<string>} options.optionalConfigs - 可选配置组
   * @param {string} options.description - 描述信息
   */
  generate(name, options) {
    let result = ExtensionUtils.combine(options.configs || [])

    // 添加额外扩展
    if (options.add) {
      result = result.add(options.add)
    }

    // 添加额外配置组
    if (options.addConfig) {
      result = result.addConfig(options.addConfig)
    }

    // 统一处理可选扩展
    const optionalExtensions = this._collectOptionalExtensions(
      options,
      result.toNames(),
    )

    // 添加可选扩展到结果中
    if (optionalExtensions.toAdd.length > 0) {
      result = result.add(optionalExtensions.toAdd)
    }

    // 排除扩展
    if (options.exclude) {
      result = result.exclude(options.exclude)
    }

    // 排除配置组
    if (options.excludeConfig) {
      result = result.excludeConfig(options.excludeConfig)
    }

    // 生成配置对象
    const configData = result.toVSCodeConfig({
      optional: optionalExtensions.all,
    })

    // 构建自定义 JSON 字符串
    const jsonContent = this._buildCustomJSON(
      configData,
      options.description,
      result.count(),
      name,
    )

    const filepath = path.join(this.outputDir, `${name}.json`)
    fs.writeFileSync(filepath, jsonContent, 'utf-8')

    const isOptional = optionalExtensions.all.length > 0

    console.log(
      `✅ 已生成: ~/${filepath} (${result.count()} 个扩展${isOptional ? `, ${optionalExtensions.all.length} 个可选` : ''})`,
    )
    return filepath
  }

  /**
   * 收集可选扩展（统一处理单个扩展和配置组）
   * @private
   * @param {Object} options - 配置选项
   * @param {Array<string>} existingNames - 已存在的扩展名称
   * @returns {Object} { all: 所有可选扩展名称, toAdd: 需要添加的扩展名称 }
   */
  _collectOptionalExtensions(options, existingNames) {
    const existingSet = new Set(existingNames)
    const optionalSet = new Set()
    const toAddSet = new Set()

    // 处理可选配置组和单个可选扩展
    const sources = [
      { key: 'optionalConfigs', isConfig: true },
      { key: 'optional', isConfig: false },
    ]

    sources.forEach(({ key, isConfig }) => {
      const items = options[key]
      if (!items || items.length === 0) return

      items.forEach((item) => {
        // 获取扩展列表
        const extensions = isConfig
          ? ExtensionUtils.flatten(ExtensionUtils.getConfig(item))
          : [{ name: item }]

        extensions.forEach((ext) => {
          const extName = ext.name || ext

          // 标记为可选
          optionalSet.add(extName)

          // 如果不存在，需要添加
          if (!existingSet.has(extName)) {
            toAddSet.add(extName)
          }
        })
      })
    })

    return {
      all: Array.from(optionalSet),
      toAdd: Array.from(toAddSet),
    }
  }

  /**
   * 构建自定义格式的 JSON 字符串 (JSONC 格式)
   * @private
   */
  _buildCustomJSON(configData, description, count, name) {
    const lines = ['{']

    // recommendations 部分
    lines.push('  "recommendations": [')

    // 必需扩展
    configData._required
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((ext, index) => {
        const comma =
          index === configData._required.length - 1 &&
          configData._optional.length === 0
            ? ''
            : ','
        lines.push(`    "${ext.id}"${comma} // ${ext.name}`)
      })

    // 可选扩展
    const isOptional = configData._optional.length > 0
    if (isOptional) {
      lines.push('')
      lines.push('    /* ========== 可选扩展 ========== */')
      configData._optional
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((ext, index) => {
          const comma = index === configData._optional.length - 1 ? '' : ','
          lines.push(`    "${ext.id}"${comma} // ${ext.name}`)
        })
    }

    lines.push('  ]')

    // 如果需要这些信息，可以在顶部添加注释块
    if (description || count) {
      if (name !== 'base') {
        lines.unshift(` * 通用扩展配置定义在 ./base.json`)
      }
      lines.unshift(
        ` * ${description} (${count} 个扩展${isOptional ? `, ${configData._optional.length} 个可选` : ''})`,
      )
      lines.unshift('/**')
      lines.splice(name !== 'base' ? 3 : 2, 0, ' */')
    }

    lines.push('}')

    return lines.join('\n')
  }

  /**
   * 生成所有预设配置
   */
  generateAll() {
    console.log('🚀 开始生成扩展配置文件...\n')

    Object.entries(EXTENSIONS_PRESETS).forEach(([name, preset]) => {
      this.generate(name, preset)
    })

    console.log('\n✨ 所有配置文件生成完成!')
  }

  /**
   * 列出所有可用的预设
   */
  listPresets() {
    console.log('📋 可用的预设配置:\n')
    Object.entries(EXTENSIONS_PRESETS).forEach(([name, preset]) => {
      console.log(`- ${name}: ${preset.description}`)
    })
  }
}

function generator(name, preset) {
  const gen = new ExtensionGenerator()

  // 生成所有预设配置
  gen.generateAll()

  // 或者生成单个配置
  // generator.generate('vue', EXTENSIONS_PRESETS.vue)

  // 或者生成自定义配置
  // generator.generate('my-config', {
  //   configs: ['core', 'frontend.javascript'],
  //   add: ['Vitest', 'Docker'],
  //   exclude: ['WakaTime'],
  //   description: '我的自定义配置'
  // })
}
generator()
