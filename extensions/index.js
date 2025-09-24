const { EXTENSIONS_CODE } = require('./profile')
const { ExtensionValidator } = require('./validator')
const { ExtensionUtils } = require('./utils')
const { EXTENSION_COMBINATIONS } = require('./combinations')

// ========== 使用示例和测试 ==========
console.log('🔧 VSCode 扩展管理系统已加载\n')

// 验证配置
console.log('📋 配置验证结果:')
ExtensionValidator.printValidationResult()

console.log('\n📊 系统统计:')
console.log(`- 总扩展数: ${EXTENSIONS_CODE.length}`)
console.log(`- 可用分类: ${ExtensionUtils.getAllCategories().join(', ')}`)
console.log(`- 可用配置: ${ExtensionUtils.getAvailableConfigs().length} 个`)

console.log('\n🚀 使用示例:')

// 示例1: 基础链式调用
console.log('\n1️⃣ 基础链式调用 - 核心配置排除统计工具:')
ExtensionUtils.combine(['core']).excludeByCategory(['analytics']).debug()

// 示例2: 复杂链式操作
console.log('\n2️⃣ 复杂链式操作 - Vue开发环境:')
const vueConfig = EXTENSION_COMBINATIONS.vue.getExtensions()
vueConfig.debug()

// 示例3: 搜索功能
console.log('\n3️⃣ 搜索功能 - 查找 React 相关扩展:')
ExtensionUtils.search('react').sortByName().print(false)

// 示例4: 分类过滤
console.log('\n4️⃣ 分类过滤 - 只显示 CSS 相关扩展:')
ExtensionUtils.combine(['frontend.css']).filterByCategory(['css']).print(false)

console.log('\n✅ 系统加载完成，可以开始使用链式调用API！')

// ========== API 使用指南 ==========
console.log(`
📚 API 使用指南:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 链式调用方法:
  .excludeById(ids)         - 根据 ID 排除
  .excludeByName(names)     - 根据名称排除
  .excludeByCategory(cats)  - 根据分类排除
  .excludeConfig(configs)   - 排除整个配置组
  .add(configs)            - 添加更多配置
  .filter(predicate)       - 自定义过滤
  .filterByCategory(cats)  - 分类过滤
  .sortByName()            - 按名称排序
  .sortByCategory()        - 按分类排序
  .debug()                 - 调试信息
  .print(showDetails)      - 打印结果

📊 获取信息:
  .get()                   - 获取最终数组
  .count()                 - 获取数量
  .toIds()                 - 获取ID数组
  .toNames()               - 获取名称数组
  .getStatistics()         - 获取统计信息
  .findById(id)            - 查找扩展
  .includes(identifier)    - 检查是否包含

🔍 工具方法:
  ExtensionUtils.search(term)           - 搜索扩展
  ExtensionUtils.getAvailableConfigs()  - 获取所有配置路径
  ExtensionUtils.getAllCategories()     - 获取所有分类

📋 推荐配置:
  EXTENSION_COMBINATIONS.basic.getExtensions()      - 基础开发
  EXTENSION_COMBINATIONS.vue.getExtensions()        - Vue开发
  EXTENSION_COMBINATIONS.react.getExtensions()      - React开发
  EXTENSION_COMBINATIONS.fullstack.getExtensions()  - 全栈开发
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)

console.log('\n 🚀 mixdev 混合开发环境:')
const mixdevConfig = EXTENSION_COMBINATIONS.mixdev.getExtensions()
const mixdevIds = mixdevConfig.debug().sortByName().toIds()
console.log()
