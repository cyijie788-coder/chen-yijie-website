# 陈奕洁 · 保持热爱，继续探索

个人网站，展示个人介绍、运动和游戏爱好、hip-hop 音乐、学习工作经历、生活照片和视觉收藏。新版排版与配色参考 Josh W. Comeau 的个人博客，内容和页面结构针对本人重新设计。

在线访问：https://cyijie788-coder.github.io/chen-yijie-website/

## 文件与功能

- `index.html`：首页，包含深浅色切换、站内搜索、收藏分类、图片放大和联系方式。
- `play.html`：保留的小车互动世界，支持 WASD / 方向键和手机方向按钮，E 查看地点、M 地图、R 归位。
- `assets/`：优化后的照片与收藏图片。
- `chen-yijie.vcf`：联系人名片。

页面无外部运行时依赖。支持键盘导航，尊重系统减少动态效果设置。主题保存在访问者自己的浏览器中。

## 图片说明

`portrait.jpg`、`sunset.jpg`、`lake.jpg` 为本人提供的照片。

以下图片来自本人提供的“素材”文件夹，作为收藏与视觉灵感展示，不标为本人原创摄影。保留原图已有内容和标识，未更改原文件。

| 网站图片 | 素材原文件 |
| --- | --- |
| winter.jpg | screenshot-20261109-192412.png |
| record.jpg | screenshot-20261109-193648.png |
| pixel-night.jpg | screenshot-20261109-194452.png |
| ocean.jpg | screenshot-20261109-194058.png |
| evening.jpg | screenshot-20261109-195155.png |
| mood.jpg | screenshot-20261109-194700.png |

## 本地查看与更新

在本目录执行 `python3 -m http.server 8000`，打开 http://localhost:8000。

修改文件并通过 SSH 推送到 GitHub 的 main 分支后，GitHub Pages 会重新部署。仅修改本地文件不会自动同步。修改电话时也请更新联系人名片。

仓库与网页公开，包含本人提供的介绍、照片和联系电话。年龄为手动填写。
