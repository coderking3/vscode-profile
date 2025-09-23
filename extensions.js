const EXTENSIONS_PROFILE = {
  // ========== 核心基础配置 (任何开发都适用) ==========
  core: [
    // 界面增强
    {
      id: 'ms-ceintl.vscode-language-pack-zh-hans',
      name: 'Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code',
    },
    {
      id: 'catppuccin.catppuccin-vsc',
      name: 'Catppuccin for VSCode',
    },
    {
      id: 'melishev.feather-vscode',
      name: 'Feather Product Icons',
    },
    {
      id: 'emmanuelbeziat.vscode-great-icons',
      name: 'VSCode Great Icons',
    },
    {
      id: 'rimuruchan.vscode-fix-checksums-next',
      name: 'Fix VSCode Checksums Next',
    },

    // 编辑器增强
    {
      id: 'aaron-bond.better-comments',
      name: 'Better Comments',
    },
    {
      id: 'parthr2031.colorful-comments',
      name: 'Colorful Comments',
    },
    {
      id: 'streetsidesoftware.code-spell-checker',
      name: 'Code Spell Checker',
    },
    {
      id: 'naumovs.color-highlight',
      name: 'Color Highlight',
    },
    {
      id: 'editorconfig.editorconfig',
      name: 'EditorConfig for VS Code',
    },
    {
      id: 'usernamehw.errorlens',
      name: 'Error Lens',
    },
    {
      id: 'kisstkondoros.vscode-gutter-preview',
      name: 'Image preview',
    },
    {
      id: 'simonsiefke.svg-preview',
      name: 'Svg Preview',
    },
    {
      id: 'stxr.iconfont-preview',
      name: 'iconfont-preview',
    },

    {
      id: 'visualstudioexptteam.intellicode-api-usage-examples',
      name: 'IntelliCode API Usage Examples',
    },
    {
      id: 'visualstudioexptteam.vscodeintellicode',
      name: 'IntelliCode',
    },

    // Git 相关
    {
      id: 'mhutchie.git-graph',
      name: 'Git Graph',
    },
    {
      id: 'donjayamanne.githistory',
      name: 'Git History',
    },
    {
      id: 'eamodio.gitlens',
      name: 'GitLens — Git supercharged',
    },

    // 基础文件支持
    {
      id: 'mikestead.dotenv',
      name: 'DotENV',
    },
    {
      id: 'redhat.vscode-yaml',
      name: 'YAML',
    },
    {
      id: 'yzhang.markdown-all-in-one',
      name: 'Markdown All in One',
    },

    // 效率工具
    {
      id: 'alefragnani.bookmarks',
      name: 'Bookmarks',
    },
    {
      id: 'ionutvmi.path-autocomplete',
      name: 'Path Autocomplete',
    },
    {
      id: 'christian-kohler.path-intellisense',
      name: 'Path Intellisense',
    },

    // 统计工具
    {
      id: 'wakatime.vscode-wakatime',
      name: 'WakaTime',
    },

    //  AI 助手
    {
      id: 'tabnine.tabnine-vscode',
      name: 'Tabnine AI',
    },
    // 'GitHub Copilot', // 可选添加
  ],

  // ========== 前端开发配置 ==========
  frontend: {
    // HTML 支持
    html: [
      {
        id: 'formulahendry.auto-close-tag',
        name: 'Auto Close Tag',
      },
      {
        id: 'formulahendry.auto-rename-tag',
        name: 'Auto Rename Tag',
      },
      {
        id: 'vincaslt.highlight-matching-tag',
        name: 'Highlight Matching Tag',
      },
      {
        id: 'ecmel.vscode-html-css',
        name: 'HTML CSS Support',
      },
      {
        id: 'hearhear.html-comment',
        name: 'HTML-Comment',
      },
    ],

    // CSS 相关
    css: {
      // 基础 CSS 支持
      base: [
        {
          id: 'pranaygp.vscode-css-peek',
          name: 'CSS Peek',
        },
        {
          id: 'vunguyentuan.vscode-css-variables',
          name: 'CSS Variable Autocomplete',
        },
      ],

      // 预处理器
      preprocessors: [
        {
          id: 'csstools.postcss',
          name: 'PostCSS Language Support',
        },
        {
          id: 'syler.sass-indented',
          name: 'Sass (.sass only)',
        },
        {
          id: 'sibiraj-s.vscode-scss-formatter',
          name: 'SCSS Formatter',
        },
        {
          id: 'mrmlnc.vscode-scss',
          name: 'SCSS IntelliSense',
        },
      ],

      // CSS 框架
      frameworks: [
        // UnoCSS css原子化框架
        {
          id: 'antfu.unocss',
          name: 'UnoCSS',
        },
        // Tailwind CSS css框架
        {
          id: 'bradlc.vscode-tailwindcss',
          name: 'Tailwind CSS IntelliSense',
        },
      ],

      // 工具
      utils: [
        {
          id: 'cipchk.cssrem',
          name: 'px to rem & rpx & vw (cssrem)',
        },
      ],
    },

    // JavaScript/TypeScript 支持
    javascript: [
      {
        id: 'steoates.autoimport',
        name: 'Auto Import',
      },

      {
        id: 'xabikos.javascriptsnippets',
        name: 'JavaScript (ES6) code snippets',
      },
      {
        id: 'ms-vscode.vscode-typescript-next',
        name: 'JavaScript and TypeScript Nightly',
      },

      {
        id: 'ms-vscode.js-debug-nightly',
        name: 'JavaScript Debugger (Nightly)',
      },
      // npm 智能感知
      {
        id: 'christian-kohler.npm-intellisense',
        name: 'npm Intellisense',
      },
      // 自动转换模板字符串
      {
        id: 'meganrogge.template-string-converter',
        name: 'Template String Converter',
      },
      // 快捷打印
      {
        id: 'chakrounanas.turbo-console-log',
        name: 'Turbo Console Log',
      },
      // jsdoc
      {
        id: 'oouo-diogo-perdigao.docthis',
        name: 'Document This',
      },
    ],

    // 框架支持
    frameworks: {
      vue: [
        {
          id: 'vue.volar',
          name: 'Vue (Official)',
        },
        {
          id: 'hollowtree.vue-snippets',
          name: 'Vue 3 Snippets',
        },
        {
          id: 'sdras.vue-vscode-snippets',
          name: 'Vue VSCode Snippets',
        },
      ],

      react: [
        {
          id: 'dsznajder.es7-react-js-snippets',
          name: 'ES7+ React/Redux/React-Native snippets',
        },
        {
          id: 'skyran.js-jsx-snippets',
          name: 'JS JSX Snippets',
        },
        {
          id: 'burkeholland.simple-react-snippets',
          name: 'Simple React Snippets',
        },
        {
          id: 'infeng.vscode-react-typescript',
          name: 'Typescript React code snippets',
        },
        {
          id: 'planbcoding.vscode-react-refactor',
          name: 'VSCode React Refactor',
        },
        // Nextjs代码片段 按需使用
        {
          id: 'pulkitgangwar.nextjs-snippets',
          name: 'Nextjs snippets',
        },
      ],
    },

    // 单元测试框架
    testing: [
      // jest框架
      {
        id: 'orta.vscode-jest',
        name: 'Jest',
      },
      {
        id: 'firsttris.vscode-jest-runner',
        name: 'Jest Runner',
      },
      {
        id: 'andys8.jest-snippets',
        name: 'Jest Snippets',
      },

      // Vitest 框架
      {
        id: 'vitest.explorer',
        name: 'Vitest',
      },
    ],

    // 代码格式化与校验
    format: [
      // 代码格式化
      {
        id: 'esbenp.prettier-vscode',
        name: 'Prettier - Code formatter',
      },
      // 代码校验
      {
        id: 'dbaeumer.vscode-eslint',
        name: 'ESLint',
      },
      // css文件校验
      {
        id: 'stylelint.vscode-stylelint',
        name: 'Stylelint',
      },
    ],

    // 开发服务器
    devServer: [
      {
        id: 'ritwickdey.liveserver',
        name: 'Live Server',
      },
      {
        id: 'techer.open-in-browser',
        name: 'open in browser',
      },
    ],

    // 小程序
    miniProgram: {
      uniApp: [
        {
          id: 'evils.uniapp-vscode',
          name: 'uniapp小程序扩展',
        },
        {
          id: 'mrmaoddxxaa.create-uniapp-view',
          name: 'uni-create-view',
        },
        {
          id: 'uni-helper.uni-helper-vscode',
          name: 'uni-helper',
        },
      ],
      wechatApp: [
        {
          id: 'overtrue.miniapp-helper',
          name: '小程序开发助手',
        },
        {
          id: 'coderfee.vscode-wxml',
          name: 'vscode wxml',
        },
        {
          id: 'qiu8310.minapp-vscode',
          name: 'WXML - Language Service',
        },
        {
          id: 'coderfee.vscode-weapp-api',
          name: 'vscode weapp api',
        },
      ],
    },
  },

  // ========== NodeJs ==========
  nodejs: [
    {
      id: 'chris-noring.node-snippets',
      name: 'node-snippets',
    },
    {
      id: 'expresssnippets.vscode-express-snippets',
      name: 'Express Snippets',
    },
    // Visual Studio Code 的 REST 客户端
    {
      id: 'humao.rest-client',
      name: 'REST Client',
    },
    // XML文件格式
    {
      id: 'redhat.vscode-xml',
      name: 'XML',
    },
    // 用于生成文件头部注释和函数注释的插件，
    {
      id: 'obkoro1.korofileheader',
      name: 'koroFileHeader',
    },
    // 提供有关应用程序依赖项中的安全漏洞的见解
    {
      id: 'redhat.fabric8-analytics',
      name: 'Red Hat Dependency Analytics',
    },
  ],

  // ========== 数据库 ==========
  database: [
    {
      id: 'mongodb.mongodb-vscode',
      name: 'MongoDB for VS Code',
    },
  ],

  // ========== DevOps & 容器 ==========
  devops: [
    {
      id: 'ms-azuretools.vscode-docker',
      name: 'Docker',
    },
    {
      id: 'ms-vscode-remote.remote-containers',
      name: 'Dev Containers',
    },
    {
      id: 'ms-kubernetes-tools.vscode-kubernetes-tools',
      name: 'Kubernetes',
    },
  ],

  // ========== 终端 ==========
  terminal: [
    {
      id: 'ms-vscode.powershell',
      name: 'PowerShell',
    },
  ],
}

// ========== 扩展工具函数 ==========
const ExtensionUtils = {
  /**
   * 展开配置，将嵌套的配置项展开为一维数组
   * @param {Array|Object} config - 配置项
   * @returns {Array} 展开后的扩展列表
   */
  flatten(config) {
    const result = []

    if (Array.isArray(config)) {
      result.push(...config)
    } else if (typeof config === 'object' && config !== null) {
      for (const value of Object.values(config)) {
        result.push(...this.flatten(value))
      }
    }

    return [...new Set(result)] // 去重
  },

  /**
   * 合并多个配置
   * @param {Array} configKeys - 配置键名数组
   * @returns {Array} 合并后的扩展列表
   */
  combine(configKeys) {
    const result = []

    configKeys.forEach((key) => {
      const config = this.getConfig(key)
      result.push(...this.flatten(config))
    })

    return [...new Set(result)] // 去重
  },

  /**
   * 根据键名获取配置
   * @param {String} key - 配置键名，支持嵌套访问如 'css.base'
   * @returns {Array|Object} 配置项
   */
  getConfig(key) {
    const keys = key.split('.')
    let config = EXTENSIONS_PROFILE

    for (const k of keys) {
      config = config[k]
      if (!config) return []
    }

    return config
  },
}

// ========== 推荐组合配置 ==========
const EXTENSION_COMBINATIONS = {
  // 基础开发环境
  basic: {
    description: '最基础的开发环境，适合任何项目',
    extensions: ExtensionUtils.combine(['core']),
  },

  // 纯前端开发 - HTML/CSS 基础
  frontendBasic: {
    description: '纯 HTML/CSS 开发环境',
    extensions: ExtensionUtils.combine([
      'core',
      'frontend.html',
      'frontend.css.base',
      'frontend.format',
      'frontend.devServer',
    ]),
  },
}

const extensions = ExtensionUtils.flatten(EXTENSIONS_PROFILE)
console.log(
  `🚀 ~ extensions:`,
  extensions.sort((a, b) => a.localeCompare(b))
)
