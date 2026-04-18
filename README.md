# 乐魂鸣霄引 · 阆影芯传

> 融合盛唐文化与传统乐器拟人化的原创国漫IP微信小程序

## 项目简介

《乐魂鸣霄引》以古琴、琵琶、阮、二胡、埙、竖笛、筑、篪八种传统乐器化灵为核心角色，结合天宝年间历史背景与悬疑剧情，打造"文化IP+数字科技+CV创新"的跨媒介叙事生态。

## 目录结构

```
├── yuehun-miniapp/          # 小程序MVP Web端模拟版（React + Vite + TailwindCSS）
│   ├── client/              # 前端源码
│   │   ├── src/pages/       # 页面组件（首页/IP馆/角色详情/剧场/剧本阁/个人中心）
│   │   ├── src/components/  # 公共组件（底部导航栏等）
│   │   └── src/lib/         # 角色数据与工具函数
│   ├── server/              # 服务端（静态部署占位）
│   └── package.json
├── assets/                  # 角色素材
│   ├── characters-original/ # 原始皮影风格立绘（6张）
│   ├── characters-nobg/     # 抠图后透明底版本（6张）
│   └── character_image_mapping.md  # 图片与角色对应关系
├── 乐魂鸣霄引_小程序MVP规划与设计方案.md
├── 小程序规划与IP落地分析报告.md / .pdf
└── 阆影芯传小程序功能规格说明书.md / .pdf
```

## 角色一览

| 角色 | 乐器 | 定位 | 武器 |
|------|------|------|------|
| 谢云止 | 古琴 | 谋士/太学博士 | 太极两仪棋 |
| 薛枕月 | 琵琶 | 将门女将 | 九环斩月刀 |
| 阮泠 | 阮 | 治愈者 | 慈烬符 |
| 麦勒 | 二胡 | 草原少年 | 弦幻弓 |
| 苏冥幽 | 埙 | 侠盗 | 泣血翎 |
| 柳瑶琮 | 竖笛 | 情报掌控者 | 错金银骰子 |

## 技术栈

- React 19 + TypeScript
- Vite 7 + TailwindCSS 4
- Framer Motion（动画）
- shadcn/ui（UI组件库）

## 本地运行

```bash
cd yuehun-miniapp
pnpm install
pnpm dev
```

## 版权声明

声影动漫工作室 © 2026
