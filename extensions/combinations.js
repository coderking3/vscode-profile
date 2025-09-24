const { ExtensionUtils  } = require('./utils')

// ========== 推荐组合配置 (优化后) ==========
const EXTENSION_COMBINATIONS = {
  // 基础开发环境
  basic: {
    description: '最基础的开发环境，适合任何项目',
    getExtensions: () => ExtensionUtils.combine(['core']),
    // 提供静态版本以兼容旧代码
    get extensions() {
      return this.getExtensions().get()
    },
  },

  // 纯前端开发 - HTML/CSS/js 原生基础
  frontendBasic: {
    description: '前端三件套原生开发环境',
    getExtensions: () =>
      ExtensionUtils.combine([
        'core',
        'frontend.html',
        'frontend.css.base',
        'frontend.css.utils',
        'frontend.javascript',
        'frontend.format',
        'frontend.devServer',
      ]),
    get extensions() {
      return this.getExtensions().get()
    },
  },

  // Vue 开发环境
  vue: {
    description: 'Vue 开发环境，但不包含 CSS 预处理器',
    getExtensions: () =>
      ExtensionUtils.combine([
        'core',
        'frontend.html',
        'frontend.css.base',
        'frontend.css.frameworks',
        'frontend.javascript',
        'frontend.frameworks.vue',
        'frontend.format',
      ]).addByName(['Vitest']).sortByCategory(),
    get extensions() {
      return this.getExtensions().get()
    },
  },

  // React 开发环境
  react: {
    description: 'React 开发环境，包含测试工具',
    getExtensions: () =>
      ExtensionUtils.combine([
        'core',
        'frontend.html',
        'frontend.css.base',
        'frontend.css.frameworks',
        'frontend.javascript',
        'frontend.frameworks.react',
        'frontend.format',
      ]).addByName(['Vitest']).sortByCategory(),
    get extensions() {
      return this.getExtensions().get()
    },
  },

  // 全栈 JavaScript 开发环境
  fullstack: {
    description: '全栈 JavaScript 开发环境',
    getExtensions: () =>
      ExtensionUtils.combine([
        'core',
        'frontend.javascript',
        'frontend.format',
        'nodejs',
        'database',
      ]),
    get extensions() {
      return this.getExtensions().get()
    },
  },

  // 混合开发环境
  mixdev: {
    description: 'React 开发环境，包含测试工具',
    getExtensions: () =>
      ExtensionUtils.combine([
        'core',
        'frontend.html',
        'frontend.css.base',
        'frontend.javascript',
        'frontend.frameworks.vue',
        'frontend.frameworks.react',
        'frontend.format',
      ]).addByName(['Vitest']).sortByCategory(),
    get extensions() {
      return this.getExtensions().get()
    },
  },
}



module.exports = {
  EXTENSION_COMBINATIONS
}

