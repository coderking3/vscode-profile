// ========== 扩展详细信息存储 ==========
const EXTENSIONS_CODE = [
  // 界面增强
  {
    id: 'ms-ceintl.vscode-language-pack-zh-hans',
    name: 'Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code',
    category: 'ui',
  },
  {
    id: 'catppuccin.catppuccin-vsc',
    name: 'Catppuccin for VSCode',
    category: 'ui',
  },
  {
    id: 'melishev.feather-vscode',
    name: 'Feather Product Icons',
    category: 'ui',
  },
  {
    id: 'emmanuelbeziat.vscode-great-icons',
    name: 'VSCode Great Icons',
    category: 'ui',
  },
  {
    id: 'rimuruchan.vscode-fix-checksums-next',
    name: 'Fix VSCode Checksums Next',
    category: 'ui',
  },

  // 编辑器增强
  {
    id: 'aaron-bond.better-comments',
    name: 'Better Comments',
    category: 'editor',
  },
  {
    id: 'parthr2031.colorful-comments',
    name: 'Colorful Comments',
    category: 'editor',
  },
  {
    id: 'streetsidesoftware.code-spell-checker',
    name: 'Code Spell Checker',
    category: 'editor',
  },
  {
    id: 'naumovs.color-highlight',
    name: 'Color Highlight',
    category: 'editor',
  },
  {
    id: 'editorconfig.editorconfig',
    name: 'EditorConfig for VS Code',
    category: 'editor',
  },
  {
    id: 'usernamehw.errorlens',
    name: 'Error Lens',
    category: 'editor',
  },
  {
    id: 'kisstkondoros.vscode-gutter-preview',
    name: 'Image preview',
    category: 'editor',
  },
  {
    id: 'simonsiefke.svg-preview',
    name: 'Svg Preview',
    category: 'editor',
  },
  {
    id: 'stxr.iconfont-preview',
    name: 'iconfont-preview',
    category: 'editor',
  },
  {
    id: 'visualstudioexptteam.intellicode-api-usage-examples',
    name: 'IntelliCode API Usage Examples',
    category: 'ai',
  },
  {
    id: 'visualstudioexptteam.vscodeintellicode',
    name: 'IntelliCode',
    category: 'ai',
  },

  // Git 相关
  {
    id: 'mhutchie.git-graph',
    name: 'Git Graph',
    category: 'git',
  },
  {
    id: 'donjayamanne.githistory',
    name: 'Git History',
    category: 'git',
  },
  {
    id: 'eamodio.gitlens',
    name: 'GitLens — Git supercharged',
    category: 'git',
  },

  // 基础文件支持
  {
    id: 'mikestead.dotenv',
    name: 'DotENV',
    category: 'language',
  },
  {
    id: 'redhat.vscode-yaml',
    name: 'YAML',
    category: 'language',
  },
  {
    id: 'yzhang.markdown-all-in-one',
    name: 'Markdown All in One',
    category: 'language',
  },

  // 效率工具
  {
    id: 'alefragnani.bookmarks',
    name: 'Bookmarks',
    category: 'productivity',
  },
  {
    id: 'ionutvmi.path-autocomplete',
    name: 'Path Autocomplete',
    category: 'productivity',
  },
  {
    id: 'christian-kohler.path-intellisense',
    name: 'Path Intellisense',
    category: 'productivity',
  },

  // 统计工具
  {
    id: 'wakatime.vscode-wakatime',
    name: 'WakaTime',
    category: 'analytics',
  },

  // AI 助手
  {
    id: 'tabnine.tabnine-vscode',
    name: 'Tabnine AI',
    category: 'ai',
  },

  // HTML 支持
  {
    id: 'formulahendry.auto-close-tag',
    name: 'Auto Close Tag',
    category: 'html',
  },
  {
    id: 'formulahendry.auto-rename-tag',
    name: 'Auto Rename Tag',
    category: 'html',
  },
  {
    id: 'vincaslt.highlight-matching-tag',
    name: 'Highlight Matching Tag',
    category: 'html',
  },
  {
    id: 'ecmel.vscode-html-css',
    name: 'HTML CSS Support',
    category: 'html',
  },
  {
    id: 'hearhear.html-comment',
    name: 'HTML-Comment',
    category: 'html',
  },

  // CSS 相关
  {
    id: 'pranaygp.vscode-css-peek',
    name: 'CSS Peek',
    category: 'css',
  },
  {
    id: 'vunguyentuan.vscode-css-variables',
    name: 'CSS Variable Autocomplete',
    category: 'css',
  },
  {
    id: 'csstools.postcss',
    name: 'PostCSS Language Support',
    category: 'css',
  },
  {
    id: 'syler.sass-indented',
    name: 'Sass (.sass only)',
    category: 'css',
  },
  {
    id: 'sibiraj-s.vscode-scss-formatter',
    name: 'SCSS Formatter',
    category: 'css',
  },
  {
    id: 'mrmlnc.vscode-scss',
    name: 'SCSS IntelliSense',
    category: 'css',
  },
  {
    id: 'antfu.unocss',
    name: 'UnoCSS',
    category: 'css',
  },
  {
    id: 'bradlc.vscode-tailwindcss',
    name: 'Tailwind CSS IntelliSense',
    category: 'css',
  },
  {
    id: 'cipchk.cssrem',
    name: 'px to rem & rpx & vw (cssrem)',
    category: 'css',
  },

  // JavaScript/TypeScript 支持
  {
    id: 'steoates.autoimport',
    name: 'Auto Import',
    category: 'javascript',
  },
  {
    id: 'xabikos.javascriptsnippets',
    name: 'JavaScript (ES6) code snippets',
    category: 'javascript',
  },
  {
    id: 'ms-vscode.vscode-typescript-next',
    name: 'JavaScript and TypeScript Nightly',
    category: 'javascript',
  },
  {
    id: 'ms-vscode.js-debug-nightly',
    name: 'JavaScript Debugger (Nightly)',
    category: 'javascript',
  },
  {
    id: 'christian-kohler.npm-intellisense',
    name: 'npm Intellisense',
    category: 'javascript',
  },
  {
    id: 'meganrogge.template-string-converter',
    name: 'Template String Converter',
    category: 'javascript',
  },
  {
    id: 'chakrounanas.turbo-console-log',
    name: 'Turbo Console Log',
    category: 'javascript',
  },
  {
    id: 'oouo-diogo-perdigao.docthis',
    name: 'Document This',
    category: 'javascript',
  },

  // 框架支持 - Vue
  {
    id: 'vue.volar',
    name: 'Vue (Official)',
    category: 'vue',
  },
  {
    id: 'hollowtree.vue-snippets',
    name: 'Vue 3 Snippets',
    category: 'vue',
  },
  {
    id: 'sdras.vue-vscode-snippets',
    name: 'Vue VSCode Snippets',
    category: 'vue',
  },

  // 框架支持 - React
  {
    id: 'dsznajder.es7-react-js-snippets',
    name: 'ES7+ React/Redux/React-Native snippets',
    category: 'react',
  },
  {
    id: 'skyran.js-jsx-snippets',
    name: 'JS JSX Snippets',
    category: 'react',
  },
  {
    id: 'burkeholland.simple-react-snippets',
    name: 'Simple React Snippets',
    category: 'react',
  },
  {
    id: 'infeng.vscode-react-typescript',
    name: 'Typescript React code snippets',
    category: 'react',
  },
  {
    id: 'planbcoding.vscode-react-refactor',
    name: 'VSCode React Refactor',
    category: 'react',
  },
  {
    id: 'pulkitgangwar.nextjs-snippets',
    name: 'Nextjs snippets',
    category: 'react',
  },

  // 单元测试框架
  {
    id: 'orta.vscode-jest',
    name: 'Jest',
    category: 'testing',
  },
  {
    id: 'firsttris.vscode-jest-runner',
    name: 'Jest Runner',
    category: 'testing',
  },
  {
    id: 'andys8.jest-snippets',
    name: 'Jest Snippets',
    category: 'testing',
  },
  {
    id: 'vitest.explorer',
    name: 'Vitest',
    category: 'testing',
  },

  // 代码格式化与校验
  {
    id: 'esbenp.prettier-vscode',
    name: 'Prettier - Code formatter',
    category: 'format',
  },
  {
    id: 'dbaeumer.vscode-eslint',
    name: 'ESLint',
    category: 'format',
  },
  {
    id: 'stylelint.vscode-stylelint',
    name: 'Stylelint',
    category: 'format',
  },

  // 开发服务器
  {
    id: 'ritwickdey.liveserver',
    name: 'Live Server',
    category: 'dev-server',
  },
  {
    id: 'techer.open-in-browser',
    name: 'open in browser',
    category: 'dev-server',
  },

  // 小程序 - uniApp
  {
    id: 'evils.uniapp-vscode',
    name: 'uniapp小程序扩展',
    category: 'miniprogram',
  },
  {
    id: 'mrmaoddxxaa.create-uniapp-view',
    name: 'uni-create-view',
    category: 'miniprogram',
  },
  {
    id: 'uni-helper.uni-helper-vscode',
    name: 'uni-helper',
    category: 'miniprogram',
  },

  // 小程序 - 微信
  {
    id: 'overtrue.miniapp-helper',
    name: '小程序开发助手',
    category: 'miniprogram',
  },
  {
    id: 'coderfee.vscode-wxml',
    name: 'vscode wxml',
    category: 'miniprogram',
  },
  {
    id: 'qiu8310.minapp-vscode',
    name: 'WXML - Language Service',
    category: 'miniprogram',
  },
  {
    id: 'coderfee.vscode-weapp-api',
    name: 'vscode weapp api',
    category: 'miniprogram',
  },

  // NodeJs
  {
    id: 'chris-noring.node-snippets',
    name: 'node-snippets',
    category: 'nodejs',
  },
  {
    id: 'expresssnippets.vscode-express-snippets',
    name: 'Express Snippets',
    category: 'nodejs',
  },
  {
    id: 'humao.rest-client',
    name: 'REST Client',
    category: 'nodejs',
  },
  {
    id: 'redhat.vscode-xml',
    name: 'XML',
    category: 'language',
  },
  {
    id: 'obkoro1.korofileheader',
    name: 'koroFileHeader',
    category: 'nodejs',
  },
  {
    id: 'redhat.fabric8-analytics',
    name: 'Red Hat Dependency Analytics',
    category: 'nodejs',
  },

  // 数据库
  {
    id: 'mongodb.mongodb-vscode',
    name: 'MongoDB for VS Code',
    category: 'database',
  },

  // DevOps & 容器
  {
    id: 'ms-azuretools.vscode-docker',
    name: 'Docker',
    category: 'devops',
  },
  {
    id: 'ms-vscode-remote.remote-containers',
    name: 'Dev Containers',
    category: 'devops',
  },
  {
    id: 'ms-kubernetes-tools.vscode-kubernetes-tools',
    name: 'Kubernetes',
    category: 'devops',
  },

  // 终端
  {
    id: 'ms-vscode.powershell',
    name: 'PowerShell',
    category: 'terminal',
  },
]

// ========== 扩展配置文件 (只存储扩展名称) ==========
const EXTENSIONS_PROFILE = {
  // ========== 核心基础配置 (任何开发都适用) ==========
  core: [
    // 界面增强
    'Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code',
    'Catppuccin for VSCode',
    'Feather Product Icons',
    'VSCode Great Icons',
    'Fix VSCode Checksums Next',

    // 编辑器增强
    'Better Comments',
    'Colorful Comments',
    'Code Spell Checker',
    'Color Highlight',
    'EditorConfig for VS Code',
    'Error Lens',
    'Image preview',
    'Svg Preview',
    'iconfont-preview',
    'IntelliCode API Usage Examples',
    'IntelliCode',

    // Git 相关
    'Git Graph',
    'Git History',
    'GitLens — Git supercharged',

    // 基础文件支持
    'DotENV',
    'YAML',
    'Markdown All in One',

    // 效率工具
    'Bookmarks',
    'Path Autocomplete',
    'Path Intellisense',

    // 统计工具
    'WakaTime',

    // AI 助手
    'Tabnine AI',
  ],

  // ========== 前端开发配置 ==========
  frontend: {
    // HTML 支持
    html: [
      'Auto Close Tag',
      'Auto Rename Tag',
      'Highlight Matching Tag',
      'HTML CSS Support',
      'HTML-Comment',
    ],

    // CSS 相关
    css: {
      // 基础 CSS 支持
      base: ['CSS Peek', 'CSS Variable Autocomplete'],

      // 预处理器
      preprocessors: [
        'PostCSS Language Support',
        'Sass (.sass only)',
        'SCSS Formatter',
        'SCSS IntelliSense',
      ],

      // CSS 框架
      frameworks: ['UnoCSS', 'Tailwind CSS IntelliSense'],

      // 工具
      utils: ['px to rem & rpx & vw (cssrem)'],
    },

    // JavaScript/TypeScript 支持
    javascript: [
      'Auto Import',
      'JavaScript (ES6) code snippets',
      'JavaScript and TypeScript Nightly',
      'JavaScript Debugger (Nightly)',
      'npm Intellisense',
      'Template String Converter',
      'Turbo Console Log',
      'Document This',
    ],

    // 框架支持
    frameworks: {
      vue: ['Vue (Official)', 'Vue 3 Snippets', 'Vue VSCode Snippets'],
      react: [
        'ES7+ React/Redux/React-Native snippets',
        'JS JSX Snippets',
        'Simple React Snippets',
        'Typescript React code snippets',
        'VSCode React Refactor',
        'Nextjs snippets',
      ],
    },

    // 单元测试框架
    testing: ['Jest', 'Jest Runner', 'Jest Snippets', 'Vitest'],

    // 代码格式化与校验
    format: ['Prettier - Code formatter', 'ESLint', 'Stylelint'],

    // 开发服务器
    devServer: ['Live Server', 'open in browser'],

    // 小程序
    miniProgram: {
      uniApp: ['uniapp小程序扩展', 'uni-create-view', 'uni-helper'],
      wechatApp: [
        '小程序开发助手',
        'vscode wxml',
        'WXML - Language Service',
        'vscode weapp api',
      ],
    },
  },

  // ========== NodeJs ==========
  nodejs: [
    'node-snippets',
    'Express Snippets',
    'REST Client',
    'XML',
    'koroFileHeader',
    'Red Hat Dependency Analytics',
  ],

  // ========== 数据库 ==========
  database: ['MongoDB for VS Code'],

  // ========== DevOps & 容器 ==========
  devops: ['Docker', 'Dev Containers', 'Kubernetes'],

  // ========== 终端 ==========
  terminal: ['PowerShell'],
}

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

// ========== 优化后的扩展结果类 (支持链式调用) ==========
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
        'frontend.javascript',
        'frontend.format',
        'frontend.devServer',
      ]),
    get extensions() {
      return this.getExtensions().get()
    },
  },

  // Vue 开发环境（排除预处理器）
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
        'frontend.devServer',
      ])
        .excludeConfig(['frontend.css.preprocessors'])
        .excludeByCategory(['analytics']), // 排除统计工具
    get extensions() {
      return this.getExtensions().get()
    },
  },

  // React 开发环境（包含测试工具）
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
        'frontend.devServer',
        'frontend.testing',
      ])
        .excludeByName(['WakaTime'])
        .sortByCategory(),
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
        'frontend.html',
        'frontend.css.base',
        'frontend.javascript',
        'frontend.format',
        'nodejs',
        'database',
      ]).excludeByCategory(['analytics']),
    get extensions() {
      return this.getExtensions().get()
    },
  },
}

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
