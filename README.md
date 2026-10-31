# 每日视野站

每天 12 条精选：**AI 算力 · 芯片产业链 · 赚钱认知**。只深读 1 条，其余扫过即可，30 分钟读完。

站点是**静态页面**：本地脚本生成后发布，页面本身不会抓新闻。
打卡、笔记、⭐沉淀都存在浏览器 localStorage 里，不上传。

## 目录

```
index.html            当期页面（唯一入口）
archive/              往期归档，每期一个 HTML
kb/                   知识库原文（术语表、公司一页纸模板）
assets/               图标
manifest.webmanifest  装到手机主屏幕用
sw.js                 离线兜底：先联网取最新，取不到才用缓存
.nojekyll             让 GitHub Pages 跳过 Jekyll
QUICKSTART.md         一页版用法
```

## 用法

见 [QUICKSTART.md](QUICKSTART.md)。

## 每天更新

```bash
cd daily-news
node tools/pack-site.mjs --out site     # 重新生成站点内容（不动 .git）
cd site && git add -A && git commit -m "每日视野站 $(date +%F)" && git push
```

GitHub Pages 一分钟内自动重建。
