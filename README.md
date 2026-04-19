# piying

> 融合盛唐文化与传统乐器拟人化的原创国漫 IP 微信小程序项目仓库

## 项目简介

《乐魂鸣霄引 · 阆影芯传》以古琴、琵琶、阮、二胡、埙、竖笛、筑、篪八种传统乐器化灵为核心角色，结合天宝年间历史背景与悬疑剧情，构建“文化 IP + 数字科技 + CV 创新”的跨媒介叙事生态。

本仓库用于集中管理项目的**Web 端小程序演示版本、角色素材与产品规划文档**。在仓库整理后，顶层目录只保留必要入口说明，其余规划资料统一收纳到 `docs/` 目录，便于后续维护与展示。

## 仓库结构

```text
piying/
├── README.md                     # 仓库入口说明
├── assets/                       # 角色素材与图片映射
│   ├── character_image_mapping.md
│   ├── characters-original/
│   └── characters-nobg/
├── docs/                         # 项目文档
│   ├── 微信小程序总体方案.md      # 合并后的主方案文档
│   └── archive/                  # 历史版本与归档资料
└── yuehun-miniapp/               # 小程序 MVP Web 端模拟版
    ├── client/                   # 前端源码
    ├── server/                   # 服务端占位
    ├── ideas.md                  # 原始构思记录
    └── package.json
```

## 核心角色

| 角色 | 乐器 | 定位 | 武器 |
|---|---|---|---|
| 谢云止 | 古琴 | 谋士 / 太学博士 | 太极两仪棋 |
| 薛枕月 | 琵琶 | 将门女将 | 九环斩月刀 |
| 阮泠 | 阮 | 治愈者 | 慈烬符 |
| 麦勒 | 二胡 | 草原少年 | 弦幻弓 |
| 苏冥幽 | 埙 | 侠盗 | 泣血翎 |
| 柳瑶琮 | 竖笛 | 情报掌控者 | 错金银骰子 |

## 技术栈

当前 Web 演示版本采用以下技术栈实现：

- React 19 + TypeScript
- Vite 7 + TailwindCSS 4
- Framer Motion
- shadcn/ui

## 本地运行

```bash
cd yuehun-miniapp
pnpm install
pnpm dev
```

## 文档说明

如果你希望快速了解项目规划，请优先阅读以下文件：

| 文档 | 说明 |
|---|---|
| `docs/微信小程序总体方案.md` | 合并后的主方案文档，包含定位、信息架构、模块设计与实施路线 |
| `assets/character_image_mapping.md` | 角色图片与命名映射说明 |
| `docs/archive/` | 旧版规划文档、交付记录与 PDF 归档 |

## 版权声明

声影动漫工作室 © 2026
