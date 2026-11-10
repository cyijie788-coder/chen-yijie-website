# 陈奕洁 · 保持热爱，继续探索

个人网站，展示个人介绍、运动和游戏爱好、hip-hop 音乐、学习工作经历、生活照片和视觉收藏。新版排版与配色参考 Josh W. Comeau 的个人博客，内容和页面结构针对本人重新设计。

在线访问：https://cyijie788-coder.github.io/chen-yijie-website/

## 文件与功能

- `index.html`：首页，包含个人照片拼贴、音乐歌单、深浅色切换、站内搜索、收藏分类、图片放大和联系方式。
- `refinements.css`：个人风格与手机、平板排版。
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
| xuanniao.jpg | screenshot-20261109-193736.png |
| day1.jpg | screenshot-20261109-193605.png |

## 音乐

按本人要求将两张收藏图分别搭配《玄鸟》与《Day1》，封面作为个人视觉搭配展示。

- CashTrippy《玄鸟》：汽水音乐 https://www.douyin.com/qishui/song/7483910887968393232
- 艾志恒 Asen《DAY1 (2020)》：Apple Music https://music.apple.com/us/album/day1-2020/1803093058?i=1803093172
- 两首均提供 Apple iTunes 公开接口返回的 30 秒试听地址，仅通过访客点击播放；切换歌曲时暂停上一首。试听文件未下载或存入仓库，完整歌曲通过音乐平台访问。
- 试听来源查询：https://itunes.apple.com/lookup?id=1803093058&entity=song 及 https://itunes.apple.com/search?term=CashTrippy&entity=song&limit=100&country=us

## 本地查看与更新

在本目录执行 `python3 -m http.server 8000`，打开 http://localhost:8000。

修改文件并通过 SSH 推送到 GitHub 的 main 分支后，GitHub Pages 会重新部署。仅修改本地文件不会自动同步。修改电话时也请更新联系人名片。

仓库与网页公开，包含本人提供的介绍、照片和联系电话。年龄为手动填写。
