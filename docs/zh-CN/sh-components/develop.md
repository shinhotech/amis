---
title: 混合开发
---

## 全局组件

### amis 内置组件

通过[amis组件](../components/page)，直接进行开发。

选择amis的css主题，在`HTML`中引入对应的`CSS`。amis提供了`云舍`、`仿AntD`、`ang`三种风格。

根据设计规范，形成统一的[reset-amis.css]()，进行样式覆盖。

### 第三方组件
根据教程，可将`Element Plus`、`Ant Design`分别在`编辑器`和`项目渲染器中`集成。

### 自定义组件

amis内置组件和第三方组件都无法满足的需求，可通过开发自定义组件，注册进来。

### 业务组件

为了避免调试成本，提供业务组件的一些场景示例，拷贝后直接复用。有两个方式：

1. amis[主题编辑器](../../examples/theme)。
2. 团队在项目开发过程中沉淀的[业务组件库](../sh-components/index)。

## 项目组件

### amis页面

> 适用于用amis写整个页面

写一个通用的`xxx.vue`文件。

使用`vue router`，根据`url?json文件名`指向`xxx.vue`，并加载对应的json配置文件，进行页面渲染。

### amis组件

> 适用于用amis写部分页面

写一个通用的`component.vue`组件。组件中使用amis进行渲染。

在页面的`page.vue`文件中引入`component.vue`组件，完成部分功能的amis开发。

对于复杂逻辑，可在`amis组件`中调用`vue中通用方法`。
