amis.define('docs/zh-CN/sh-components/c4iStyle.md', function(require, exports, module, define) {

  module.exports = {
    "title": "C4I 重置样式",
    "html": "<div class=\"markdown-body\"><blockquote>\n<p>注: css 采用 <code>stylus</code> 语法</p>\n</blockquote>\n<pre><code class=\"language-css\">$-color-danger = #fa6f5b\n\n.amis-scope\n  <span class=\"token comment\">/* 下拉 */</span>\n  .cxd-ResultBox-value-wrap\n    flex-wrap nowrap\n    overflow hidden\n    .cxd-ResultBox-value\n      flex 1 0 auto\n  <span class=\"token comment\">/* 弹窗 */</span>\n  .cxd-Modal-content\n    .cxd-Modal-title\n      font-size 16px\n      font-weight 600\n  <span class=\"token comment\">/* 图片 */</span>\n  <span class=\"token selector\">.cxd-Image\n    border none\n\n:root</span> <span class=\"token punctuation\">{</span>\n  --colors-brand-4 $-color-danger\n  --colors-brand-5 $-color-danger\n  --colors-brand-6 $-color-danger\n  --colors-error-5 $-color-danger\n  --Modal-widthSm 18rem\n<span class=\"token punctuation\">}</span>\n</code></pre>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [],
      "level": 0
    }
  };

});
