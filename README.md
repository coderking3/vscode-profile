# VSCode Profile

> 📝 我的个人 VSCode 开发环境配置集合

这是一个完整的 VSCode 开发环境配置仓库，包含了经过精心调优的编辑器设置、代码片段和扩展管理系统，旨在提升开发效率和代码质量。

## 📋 包含内容

### 🔧 个人设置 (Settings)
- 编辑器外观和主题配置
- 代码格式化和校验规则
- 字体和布局优化
- 快捷键自定义
- 工作区和文件管理设置

### 📦 扩展管理系统 (Extensions)
- **智能扩展配置** - 基于开发场景的扩展组合
- **链式调用API** - 灵活的扩展选择和过滤
- **分类管理** - 按功能和技术栈组织扩展
- **预设组合** - 针对不同项目类型的推荐配置

支持的开发环境：
- 前端开发 (HTML/CSS/JavaScript)
- Vue.js 生态
- React.js 生态
- Node.js 后端开发
- 全栈开发
- 小程序开发

### 💡 代码片段 (Snippets)
- 常用代码模板和快捷输入
- 框架特定的代码片段
- 自定义函数和组件模板
- 文档注释和头部模板

## 🚀 特色功能

### 智能扩展管理
```javascript
// 示例：创建 Vue 开发环境（排除不需要的工具）
ExtensionUtils.combine(['core', 'frontend.vue'])
  .excludeByCategory(['analytics'])
  .excludeConfig(['frontend.css.preprocessors'])
  .get()
```

### 配置验证
- 自动检测缺失的扩展
- 避免重复安装
- 配置完整性验证

### 分类统计
- 按技术栈统计扩展使用情况
- 开发环境配置分析
- 个性化推荐

## 📖 使用方法

1. **克隆仓库**
   ```bash
   git clone [your-repo-url]
   ```

2. **导入设置**
   - 将 `settings.json` 复制到 VSCode 设置目录
   - 根据需要调整个人偏好设置

3. **安装扩展**
   ```javascript
   // 使用扩展管理系统选择适合的扩展组合
   const extensions = EXTENSION_COMBINATIONS.vue.getExtensions()
   ```

4. **应用代码片段**
   - 将 snippets 文件夹内容复制到 VSCode snippets 目录
   - 重启 VSCode 使代码片段生效

## 🛠️ 自定义配置

### 修改扩展组合
可以根据个人需求创建自定义的扩展组合：

```javascript
const myCustomConfig = ExtensionUtils.combine(['core', 'frontend.html'])
  .add(['nodejs'])
  .excludeByName(['某个不需要的扩展'])
  .sortByCategory()
```

### 添加新的代码片段
在 `snippets/` 目录下创建对应语言的 JSON 文件，按照 VSCode snippets 格式添加。

### 调整编辑器设置
编辑 `settings.json` 文件，所有设置都有详细注释说明用途。

## 📁 目录结构

```
vscode-profile/
├── settings.json           # 编辑器设置
├── extensions/            # 扩展管理系统
│   ├── extension-manager.js
│   └── combinations.js
├── snippets/              # 代码片段
│   ├── javascript.json
│   ├── vue.json
│   └── ...
├── keybindings.json       # 快捷键设置
└── README.md             # 说明文档
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个配置：
- 新的代码片段
- 扩展推荐
- 设置优化建议
- Bug 修复

## 📄 许可证

[MIT](./LICENSE)

---

**注意**: 这些配置基于个人开发习惯，建议根据自己的需求进行调整。首次使用时请备份现有的 VSCode 配置。
