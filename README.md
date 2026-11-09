# 陈奕洁的个人网站

使用 HTML、CSS 和 JavaScript 制作的静态个人网站，支持手机和电脑浏览，无需安装依赖。

## 文件说明

- `index.html`：完整网页，包含页面样式、个人介绍、联系方式和复制号码功能。
- `chen-yijie.vcf`：可下载的联系人名片。

## 查看网站

双击 `index.html` 即可打开。也可以在本目录运行 `python3 -m http.server 8000`，然后访问 http://localhost:8000。

## 修改与备份

使用文本编辑器修改 `index.html`。修改姓名或电话时，请同步更新 `chen-yijie.vcf`。

代码备份仓库：https://github.com/cyijie788-coder/chen-yijie-website

GitHub 的提交记录用于保留历史版本。若使用命令行管理，先用 `git clone https://github.com/cyijie788-coder/chen-yijie-website.git` 下载仓库并进入下载的目录，再修改文件。每次修改后执行：

```sh
git add .
git commit -m "更新个人网站"
git push
```

只有成功推送的提交才会同步到 GitHub；本地修改不会自动上传。

## 隐私

文件包含个人电话号码，建议使用私有仓库保存。网站是否对外上线与代码是否备份到 GitHub 是两件独立的事。
