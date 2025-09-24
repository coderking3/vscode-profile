const { EXTENSIONS_CODE,EXTENSIONS_PROFILE  } = require('./profile')

// ========== 配置验证器 ==========
const ExtensionValidator = {
  /**
   * 验证配置完整性
   * @returns {Object} 验证结果
   */
  validateConfig() {
    const result = {
      valid: true,
      missingExtensions: [],
      duplicateIds: [],
      warnings: [],
    }

    // 检查重复的 ID
    const idCount = new Map()
    EXTENSIONS_CODE.forEach((ext) => {
      idCount.set(ext.id, (idCount.get(ext.id) || 0) + 1)
    })

    idCount.forEach((count, id) => {
      if (count > 1) {
        result.duplicateIds.push(id)
        result.valid = false
      }
    })

    // 检查配置中是否有不存在的扩展
    const allNames = new Set(EXTENSIONS_CODE.map((ext) => ext.name))
    const checkNames = (config) => {
      if (Array.isArray(config)) {
        config.forEach((name) => {
          if (!allNames.has(name)) {
            result.missingExtensions.push(name)
            result.valid = false
          }
        })
      } else if (typeof config === 'object' && config !== null) {
        Object.values(config).forEach(checkNames)
      }
    }

    checkNames(EXTENSIONS_PROFILE)

    return result
  },

  /**
   * 打印验证结果
   */
  printValidationResult() {
    const result = this.validateConfig()

    if (result.valid) {
      console.log('✅ 配置验证通过')
    } else {
      console.log('❌ 配置验证失败:')
      if (result.missingExtensions.length > 0) {
        console.log('缺少的扩展:', result.missingExtensions)
      }
      if (result.duplicateIds.length > 0) {
        console.log('重复的ID:', result.duplicateIds)
      }
    }

    return result.valid
  },
}


module.exports = {
  ExtensionValidator
}
