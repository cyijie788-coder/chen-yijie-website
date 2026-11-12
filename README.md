# 奕起聊车 · 陈奕洁的汽车故事频道

汽车内容账号主页，定位为拍车实景与本人配音。介绍汽车检测与维修学习背景，围绕性能车型、品牌文化和机械知识整理内容。所有汽车选题均标注为计划，作品区待实际拍摄后更新；不将示意图或计划当作已完成作品。

在线访问：https://cyijie788-coder.github.io/chen-yijie-website/

Eagle 全库分类归档：[eagle-assets](eagle-assets/README.md)（2026-11-12，257 个原文件，含旧藏、汽车素材、动效和工程；大文件通过 Git LFS 下载）。

## 文件与功能

- `index.html`、`auto.css`、`auto.js`：汽车主页、响应式样式、选题筛选与拍摄提纲弹窗。
- `channel.css`、`motion.js`：个性化频道视觉、金色霓虹鼠标光圈、绿色悬停反馈、9 点短拖尾、点击双层扩散与火花、卡片倾斜、入场动画、顶部阅读进度和 5 台车的自动轮播。轮播支持前后切换、选择圆点、暂停、键盘方向键和左右滑动；鼠标悬停、键盘焦点停留、页面不可见或轮播不在视野时暂停自动切换；减少动态效果设置下默认关闭自动轮播与装饰动画。
- `stories.js`：9 篇车型与技术内容数据，含资料要点、原创开场和来源链接。
- `image-credits.html`：车辆图片与研究资料来源页。
- `shooting-notes.txt`：可下载的 9 份车型内容与视频计划，包含镜头清单和配音开场草稿。
- `life.html`、`refinements.css`：保留的生活频道，包含个人照片、音乐试听与收藏。
- `play.html`：保留的小车互动世界。
- `assets/`：个人照片、收藏图片及图标。
- `chen-yijie.vcf`：联系人名片。

汽车主页使用 8 款车辆资料图片：Ferrari SF90 Stradale、Lamborghini Revuelto、Audi RS 7 Sportback performance、Apollo IE、Mercedes-Maybach S-Class、Porsche 911 GT3、Nissan GT-R R35 和 Lexus LFA。完整图片来源与说明见 `image-credits.html`。图片不代表本人实拍或品牌合作。未添加虚构车型参数、粉丝量、合作案例、实拍或试驾经历。具体车型的选题资料应在拍摄前核实。

车型栏目支持关键词与分类组合筛选；详情默认展示车型笔记，创作提纲可手动切换。新增汽车问答折叠栏目。

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

鼠标装饰层不拦截点击，桌面精细指针下启用；停止移动约 650 毫秒后停止位置动画并淡出拖尾，触屏与减少动态效果模式下隐藏。点击扩散同时最多保留 4 组，动画后自动清理。
