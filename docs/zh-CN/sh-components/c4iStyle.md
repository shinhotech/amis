---
title: C4I 重置样式
---

> 注: css 采用 `stylus` 语法

```css
$-color-danger = #fa6f5b

.amis-scope
  /* 下拉 */
  .cxd-ResultBox-value-wrap
    flex-wrap nowrap
    overflow hidden
    .cxd-ResultBox-value
      flex 1 0 auto
  /* 弹窗 */
  .cxd-Modal-content
    .cxd-Modal-title
      font-size 16px
      font-weight 600
  /* 图片 */
  .cxd-Image
    border none

:root {
  --colors-brand-4 $-color-danger
  --colors-brand-5 $-color-danger
  --colors-brand-6 $-color-danger
  --colors-error-5 $-color-danger
  --Modal-widthSm 18rem
}
```
