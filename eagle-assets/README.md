# Eagle 素材归档

2026-11-12 从 Eagle「灵感」素材库导出。共 **257 个原文件，636,311,345 字节（约 607 MiB）**，包括旧藏图片、汽车创作素材、动效视频、工程和依赖。每个原文件均保留原始字节，并记录 SHA-256。

| 分类 | 数量 | 内容 |
| --- | ---: | --- |
| [01_汽车素材](01_汽车素材/) | 36 | 单张、多张、PNG、表情包、图标、标题、关键词、图表、全屏与边框视频 |
| [02_动效素材与工程](02_动效素材与工程/) | 171 | 10 个 GIF、10 个透明 MOV、10 条参考 MP4、说明、源工程及工程依赖 |
| [03_旧藏素材](03_旧藏素材/) | 50 | 按插画、排版、风景、建筑、音乐人物、静物、像素风、表情包和体育夜景分类 |

## 查找素材

- [素材目录.csv](素材目录.csv)：文件名称、路径、类型、标签、来源、备注、大小和校验值。
- [metadata/items.json](metadata/items.json)：完整逐项目录及 Eagle 元数据，含原有文件夹路径。
- [metadata/folders.json](metadata/folders.json)：Eagle 文件夹树，含原有空目录。
- [metadata/summary.json](metadata/summary.json)：导出数量、体积和格式统计。
- [授权与使用说明](LICENSES.md)：第三方素材适用各自许可。

Eagle 内已补齐类型、用途和内容标签，原有标签与分类信息保留。仓库中的旧藏采用内容分类；原来的文件夹归属可在逐项目录中查到。

## 完整下载和校验

图片、视频和二进制依赖使用 [Git LFS](https://git-lfs.com/) 保存原文件。安装 Git LFS 后执行：

```sh
git clone git@github.com:cyijie788-coder/chen-yijie-website.git
cd chen-yijie-website
git lfs install --local
git lfs pull
python3 eagle-assets/verify_export.py
```

已克隆本仓库时，在仓库目录执行 `git pull`、`git lfs pull` 和校验命令即可。校验成功会显示 `257 / 257`。

GitHub 的源码 ZIP 是否包含 LFS 原文件取决于仓库设置；看到几行 `oid sha256` 文本时，说明下载到了指针，应使用上面的 Git LFS 命令获取原文件。

这是按目录整理的素材导出，包含 Eagle 的标签、备注、来源和原目录信息；并非可以直接双击打开的 `.library` 数据库。可把分类目录拖入 Eagle 导入原文件，详细元数据保存在 `metadata/` 中。导出的工程文件按 Eagle 中已有记录保留，未承诺缺失环境下可直接运行。

此目录用于仓库归档，已从 GitHub Pages 构建中排除。个人网站的在线页面继续使用原有站点文件。
