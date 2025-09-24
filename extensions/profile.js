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



module.exports = {
  EXTENSIONS_CODE,
  EXTENSIONS_PROFILE
}
