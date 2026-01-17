# Implementation Plan - 深色模式个人作品集网站

设计并实现一个高端、动感且具有深色模式的个人作品集网站，展示从 GitHub 获取的项目（`esp32-S318` 和 `trae_friend_person`）。

## 设计风格 (Aesthetics)
- **主题**：深色模式 (Dark Mode)，采用 `Background: #050510` (Quantum Computing 风格)。
- **视觉效果**：
    - **玻璃拟态 (Glassmorphism)**：卡片使用半透明背景 + 模糊效果 + 细微边框。
    - **霓虹渐变**：使用 `#00FFFF` (青色), `#7B61FF` (紫色), `#FF00FF` (粉色) 作为强调色。
    - **微交互**：悬停时平滑缩放、发光效果，符合 UX 指南（使用 `ease-out`）。
- **字体**：
    - 标题：`Space Grotesk` (现代科技感)。
    - 正文：`DM Sans` (高可读性)。

## 页面结构 (Page Structure)
1.  **Hero Section**: 个人简介，动感背景，CTA 按钮。
2.  **Projects Section**: GitHub 项目展示。
    - **Project 1: ESP32 多串口数据监控系统** (硬件/嵌入式开发展示)。
    - **Project 2: 个人日程记录表单提交系统** (前端/AI 集成展示)。
3.  **Skills Section**: 技术栈展示（C++, Arduino, React, TypeScript 等）。
4.  **Contact Section**: 联系方式。

## 迁移至 Next.js 计划 (Next.js Migration Plan)
1. **初始化项目**：使用 `create-next-app` 初始化一个支持 TypeScript 和 Tailwind CSS 的 Next.js 项目。
2. **结构重组**：
    - 将 `style.css` 迁移到 `app/globals.css`。
    - 将 `index.html` 的结构分解为 `app/page.tsx` 及其组件。
    - 将图片移动至 `public/` 目录。
3. **集成 Lucide-React**：使用官方的 `lucide-react` 包替代 CDN 脚本。
4. **添加 Next.js 特性**：
    - 使用 `next/image` 优化图片。
    - 使用 `next/font` 优化字体加载。
    - 配置 `metadata` 以增强 SEO。
5. **Vercel 部署准备**：确保 `package.json` 包含正确的构建脚本。

## 任务列表 (Task List)
- [ ] 创建 Next.js 项目并配置环境。
- [ ] 配置全局样式与 Tailwind。
- [ ] 实现响应式 React 组件。
- [ ] 优化图片与资源路径。
- [ ] 验证本地运行状态 (`npm run dev`)。

## 方案审核
请确认以上设计方向是否满足您的需求。
