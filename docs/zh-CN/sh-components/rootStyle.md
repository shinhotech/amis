---
title: 树根 重置样式
---

> 注: css 采用 `stylus` 语法

```css
$color-main = #fa705b

.amis-scope
  // 页面
  .cxd-Page
    .cxd-Panel
      border none
      box-shadow 0px 1px 4px rgba(0, 0, 0, 0.1)
      border-radius 8px
      .cxd-Panel-body
        padding 12px 12px 0 16px
      .cxd-Panel-heading
        padding 10px 20px 11px

  // 弹窗
  .cxd-Modal
    top 15% !important
  .cxd-Modal-content
    .cxd-Modal-body
      padding 0 24px
      margin 16px 0 24px 0

  // 图片
  .cxd-ImageField
    .cxd-Image--thumb
      .cxd-Image-thumb
        transform translate(-50%, 0)
        margin-left 50%
        width 110px
        height 110px
      .cxd-Image-info
        width 100%
    .cxd-Image
      border none
      text-align center
      color #999
      width 100%

  // Form
  .cxd-Form
    .cxd-Form-item--inline > .cxd-Form-label
      color #333
      font-size 12px
      margin-right 12px
      line-height 28px
      height 28px

    .cxd-Form-item
      margin-bottom 12px
      margin-right 12px

  // 下拉
  .cxd-SelectControl
    width 164px
    height 28px
    .cxd-Select
      padding 2px 12px
      font-size 12px
      min-height 28px

    .cxd-Select--multi .cxd-Select-valueWrap .cxd-Select-placeholder
      margin-left 0

  // 级联
  .cxd-NestedSelectControl
    width 184px
    height 28px
    .cxd-ResultBox
      font-size 12px
      padding 2px 12px
      min-height 28px

      &.cxd-NestedSelect
        padding-left 12px

  // 按钮
  .cxd-Button.cxd-Button--size-default
    height 28px
    font-size 12px
    padding 4px 18px

  .cxd-Button.cxd-Button--default:not(:disabled):not(.is-disabled)
    border-color #eee
    &:hover
      background #f6f6f6
      border-color #f6f6f6
      color #333

  .cxd-Button.cxd-Button--danger:not(:disabled):not(.is-disabled):hover,
  .cxd-Button.cxd-Button--primary:not(:disabled):not(.is-disabled):hover
    background $color-darkmain
    border-color $color-darkmain
    color #fff
  .cxd-Form .cxd-ButtonToolbar > .cxd-Button
    margin-left 10px

  /* panel 间距 */
  .cxd-Page .cxd-Panel
    margin-bottom 12px

  /* 自定义指标 多选 */
  .cxd-CheckboxesControl.is-inline .cxd-Checkbox
    display block !important

:root {
  --colors-brand-4 $color-main !important
  --colors-brand-5 $color-main !important
  --colors-brand-6 $color-main !important
  --colors-error-5 $color-main !important

  --Page-main-bg: #f6f6f6 !important
  --Panel-heading-bg: transparent !important
  --sizes-size-5: 10px !important

  /** 同步主应用根节点 font-size */
  font-size 8px 
}
```
