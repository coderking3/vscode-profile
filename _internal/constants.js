/** 扩展配置 */
const EXTENSIONS_PROFILE = {
  base: [
    'Better Comments',
    'Catppuccin for VSCode',
    'Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code',
    'Code Spell Checker',
    'Color Highlight',
    'Colorful Comments',
    'DotENV',
    'EditorConfig for VS Code',
    'Error Lens',
    'Feather Product Icons',
    'Fix VSCode Checksums Next',
    'Git Graph',
    'Git History',
    'GitHub Copilot',
    'GitHub Copilot Chat',
    'GitLens — Git supercharged',
    'iconfont-preview',
    'Image preview',
    'Markdown All in One',
    'Path Autocomplete',
    'Path Intellisense',
    'SVG',
    'Svg Preview',
    'VSCode Great Icons',
    'YAML',
  ],

  frontend: {
    html: [
      'Auto Close Tag',
      'Auto Rename Tag',
      'Highlight Matching Tag',
      'HTML CSS Support',
      'HTML-Comment',
    ],

    css: {
      base: ['CSS Peek', 'CSS Variable Autocomplete'],
      preprocessors: [
        'PostCSS Language Support',
        'PostCSS Intellisense and Highlighting',
        'Sass (.sass only)',
        'SCSS Formatter',
        'SCSS IntelliSense',
      ],
      frameworks: ['UnoCSS', 'Tailwind CSS IntelliSense'],
      utils: ['px to rem & rpx & vw (cssrem)'],
    },

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

    frameworks: {
      vue: ['Vue (Official)', 'Vue 3 Snippets', 'Vue VSCode Snippets'],
      react: [
        'ES7+ React/Redux/React-Native snippets',
        'JS JSX Snippets',
        'Simple React Snippets',
        'Typescript React code snippets',
        'VSCode React Refactor',
      ],
      nuxt: ['MDC - Markdown Components', 'Goto definition alias', 'Nuxtr'],
      next: ['Nextjs snippets'],
    },

    testing: ['Jest', 'Jest Runner', 'Jest Snippets', 'Vitest'],
    format: ['Prettier - Code formatter', 'ESLint', 'Stylelint'],
    devServer: ['Live Server', 'open in browser'],

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

  nodejs: [
    'node-snippets',
    'Express Snippets',
    'REST Client',
    'XML',
    'koroFileHeader',
    'Red Hat Dependency Analytics',
  ],

  database: ['MongoDB for VS Code'],
  devops: ['Docker', 'Dev Containers', 'Kubernetes'],
  terminal: ['PowerShell'],
}

/** 预设配置 */
const EXTENSIONS_PRESETS = {
  // 基础配置
  base: {
    description: '基础开发环境 - 适用于任何项目',
    configs: ['base'],
    optionalConfigs: ['terminal'],
  },

  // 前端基础
  'frontend-base': {
    description: '前端基础 - HTML/CSS/JavaScript',
    configs: [
      'frontend.html',
      'frontend.css.base',
      'frontend.css.utils',
      'frontend.javascript',
      'frontend.format',
      'frontend.devServer',
    ],
    optional: ['Stylelint'],
    optionalConfigs: ['frontend.css.preprocessors', 'frontend.css.frameworks'],
  },

  // Vue 开发
  vue: {
    description: 'Vue 开发环境',
    configs: [
      'frontend.html',
      'frontend.css.base',
      'frontend.css.utils',
      'frontend.javascript',
      'frontend.format',
      'frontend.frameworks.vue',
    ],
    optional: ['Stylelint'],
    optionalConfigs: [
      'frontend.css.preprocessors',
      'frontend.css.frameworks',
      'frontend.testing',
      'frontend.frameworks.nuxt',
    ],
  },

  // React 开发
  react: {
    description: 'React 开发环境',
    configs: [
      'frontend.html',
      'frontend.css.base',
      'frontend.css.utils',
      'frontend.javascript',
      'frontend.format',
      'frontend.frameworks.react',
    ],
    optional: ['Stylelint'],
    optionalConfigs: [
      'frontend.css.preprocessors',
      'frontend.css.frameworks',
      'frontend.testing',
      'frontend.frameworks.next',
    ],
  },

  // Node.js 后端
  nodejs: {
    description: 'Node.js 后端开发环境',
    configs: [
      'frontend.javascript',
      'frontend.format',
      'nodejs',
      'devops',
      'database',
    ],
    exclude: ['Stylelint'],
    optionalConfigs: ['database', 'frontend.testing'],
  },

  // 小程序 - uniApp
  uniapp: {
    description: 'uniApp 小程序开发',
    configs: [
      'frontend.html',
      'frontend.css.base',
      'frontend.css.utils',
      'frontend.javascript',
      'frontend.format',
      'frontend.frameworks.vue',
      'frontend.miniProgram.uniApp',
    ],
    optional: ['Stylelint'],
    optionalConfigs: [
      'frontend.css.preprocessors',
      'frontend.css.frameworks',
      'frontend.testing',
    ],
  },

  // 小程序 - 微信
  wechat: {
    description: '微信小程序开发',
    configs: [
      'frontend.html',
      'frontend.css.base',
      'frontend.css.utils',
      'frontend.javascript',
      'frontend.format',
      'frontend.miniProgram.wechatApp',
    ],
    exclude: ['Vitest'],
    optional: ['Stylelint'],
    optionalConfigs: ['frontend.css.preprocessors', 'frontend.testing'],
  },
}

module.exports = {
  EXTENSIONS_PROFILE,
  EXTENSIONS_PRESETS,
}
