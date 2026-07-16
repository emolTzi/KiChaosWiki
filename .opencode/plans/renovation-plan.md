# KiChaosWiki 全面翻新计划

## 概述
对奇沌龙珠 Wiki 进行页面外观翻新和底层代码重构，保持龙珠主题风格的同时提升现代感和可维护性。

---

## Phase 1: 代码底层重构

### 1.1 拆分 style.css 为模块化 CSS 文件
**目标：** 将 900+ 行的 style.css 按功能拆分为独立文件，便于维护

**文件清单：**
- `.vitepress/theme/styles/variables.css` — CSS 变量、颜色系统、暗色模式变量
- `.vitepress/theme/styles/typography.css` — 字体、标题、段落、引用块
- `.vitepress/theme/styles/layout.css` — 布局、导航栏、侧边栏
- `.vitepress/theme/styles/home.css` — 首页 Hero、Feature 卡片
- `.vitepress/theme/styles/tables.css` — 表格样式、数据高亮、品质颜色
- `.vitepress/theme/styles/components.css` — 自定义块、徽章、按钮、代码块
- `.vitepress/theme/styles/utilities.css` — 动画、滚动条、选择、响应式

### 1.2 重构主题入口 index.ts
**目标：** 用 TypeScript 重写，优化表格高亮逻辑

- 将表格高亮 JS 逻辑抽取为独立 composable `composables/useTableHighlight.ts`
- 用 TypeScript 类型标注 
- 优化性能（使用更高效的 DOM 遍历）

### 1.3 重构 wiki-numbers.ts 插件
**目标：** 用 TypeScript 重写

- 重命名为 `wiki-numbers.ts`（当前已是 .ts）
- 添加更好的类型定义
- 优化正则性能

### 1.4 Vue 组件优化
**目标：** 改进已有组件

- KiBadge.vue — 添加更多主题色变体
- KiRaceCard.vue — 添加悬停可视化反馈、波纹效果
- KiSetEffect.vue — 优化颜色渲染逻辑

---

## Phase 2: 页面外观翻新美化

### 2.1 导航栏增强
- 添加 sticky 导航栏阴影渐变效果
- 搜索框美化（圆角、阴影）
- 导航菜单项悬停动效增强

### 2.2 首页 Hero 区翻新
- 添加粒子/能量波动画背景（纯 CSS）
- Hero 标题发光文字效果
- 添加"气"主题装饰元素

### 2.3 Feature 卡片翻新
- 添加玻璃态 (glassmorphism) 效果
- 卡片图标动画
- 添加渐变边框

### 2.4 侧边栏翻新
- 添加分组标题装饰
- 当前页高亮增强
- 添加折叠动画

### 2.5 表格翻新
- 行悬停放大效果
- 品质颜色发光增强
- 移动端响应式优化

### 2.6 内容页面翻新
- 标题锚点美化
- 添加回到顶部按钮
- 添加页面过渡动画
- 添加自定义滚动条增强

---

## Phase 3: 新增功能

### 3.1 添加主题切换过渡动画
### 3.2 添加页面加载进度条
### 3.3 添加标签/Tag 系统
### 3.4 优化移动端体验

---

## Phase 4: GitHub 推送

完成后提交并推送到 `git@github.com:emolTzi/KiChaosWiki.git`
git add .
git commit -m "🎨 KiChaosWiki 全面翻新：模块化CSS重构、外观美化、TypeScript优化"
git push origin
