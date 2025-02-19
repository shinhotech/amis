---
title: 树根 重置样式
---

> 注: css 采用 `stylus` 语法

```css
$color-main = #fa705b

.amis-scope
  /* 页面 */
  .cxd-Page
    .cxd-Page-body
      padding-top: 0
    .cxd-Panel
      border none
      box-shadow 0px 1px 4px rgba(0, 0, 0, 0.1)
      border-radius 8px
      .cxd-Panel-body
        padding 12px 12px 0 16px
      .cxd-Panel-heading
        padding 10px 20px 11px

  /* 弹窗 */
  .cxd-Modal-content
    .cxd-Modal-body
      padding 0 24px
      margin 16px 8px 10px

    .cxd-Modal-header
      .cxd-Modal-close svg.icon
        width 16px !important
        height 16px !important
      .cxd-Modal-title
        font-weight 600
        font-size 16px

  /* 图片 */
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
      .cxd-Image-caption
        color #999

  /* Form */
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

  /* 下拉 */
  .cxd-SelectControl
    width 164px
    height 28px

    .cxd-Select
      padding 2px 12px
      font-size 12px
      height 28px
      min-height 28px

    .cxd-Select--multi .cxd-Select-valueWrap .cxd-Select-placeholder
      margin-left 0

    .cxd-Select-arrow
      svg.icon
        color: #ccc

  /* 级联 */
  .cxd-NestedSelectControl
    width 184px
    height 28px
    .cxd-NestedSelect-noResult
      width: 184px
    .cxd-ResultBox
      font-size 12px
      padding 2px 12px
      min-height 28px

      &.cxd-NestedSelect
        padding-left 12px

    .cxd-NestedSelect-menuOuter
      .cxd-NestedSelect-menu
        min-height 32px
        max-height 175px
        width 160px

        .cxd-NestedSelect-option
          padding-left 16px
          & > .cxd-NestedSelect-optionLabel
            height 32px
            font-size 14px

    .cxd-ResultBox-pc-arrow
      svg.icon
        color: #ccc
    .cxd-NestedSelect-optionArrowRight
      display: flex
      align-items: center
      svg.icon
        top: 0 !important

  /* 按钮 */
  .cxd-Button.cxd-Button--size-default
    height 28px
    font-size 12px
    padding 4px 18px

  .cxd-Button.cxd-Button--default:not(:disabled):not(.is-disabled)
    border-color #eee
    &:hover
      background #fafafa
      border-color #eee
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

  /* 自定义指标 */
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
