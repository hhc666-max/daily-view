# 每日视野站

每天 12 条精选：**AI 算力 · 芯片产业链 · 赚钱认知**。只深读 1 条，其余扫过即可，30 分钟读完。

- 线上地址：把仓库推到 GitHub 后启用 Pages，见本文件末尾
- 这是**静态页面**：由本地脚本生成后发布，页面本身不会抓新闻
- 你的打卡、笔记、⭐沉淀都存浏览器 localStorage，不会上传到任何服务器

## 目录

```
index.html            当期页面（唯一的入口）
archive/              往期归档，每期一个 HTML
kb/                   知识库原文（术语表、公司一页纸模板）
assets/               图标
manifest.webmanifest  装到手机主屏幕用
sw.js                 离线兜底：先联网取最新，取不到才用缓存
.nojekyll             让 GitHub Pages 跳过 Jekyll
```

## 手机上怎么用

1. 打开网址 → iPhone 用 Safari 分享「添加到主屏幕」；Android 用 Chrome ⋮「安装应用」。
2. 打开后是全屏的，跟 App 一样；断网也能看上次缓存的那一期。
3. 换网址后旧记录不会自动跟过来：旧页面「导出备份 .json」→ 新页面「导入备份」。

## 每天怎么更新

```bash
cd daily-news
node tools/pack-site.mjs --out site        # 重新生成站点内容
cd site && git add -A && git commit -m "每日视野站 $(date +%F)" && git push
```

GitHub Pages 会在一分钟内自动重建，刷新页面即可看到新一期。

## 启用 Pages

仓库 **Settings → Pages**：Source 选 `Deploy from a branch`，Branch 选 `main`、目录 `/ (root)`，保存。
一分钟后的网址是 `https://<用户名>.github.io/<仓库名>/`。
