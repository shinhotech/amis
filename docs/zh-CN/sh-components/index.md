---
title: 项目集成
---

## 页面组件
在一个现有项目中，按以下方式进行`amis`页面组件的集成。

1. amis 页面渲染器

```js
<template lang="pug">
.amis-home
  div(
    ref="amisBox"
  )
</template>

<script lang="ts" setup>
import { ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { $get, $post } from '@/http/request'

import jsonDefault from './json/index'

type TJson = keyof typeof jsonDefault

const amisBox = ref()
const route = useRoute()

defineProps({
  onAction: {
    type: Function,
    required: false,
    default: () => {
      //
    }
  }
})

/* amis 渲染器 */
const amisRender = (schemaJson: any) => {
  const amis = (window as any)?.amisRequire('amis/embed')

  amis.embed(amisBox.value, schemaJson, {}, {
    // 增加接口访问 fetcher 方法，访问项目接口， 区分不同环境
    fetcher: ({ url, method, body }: any) => {
      switch (method) {
        case 'get':
          return $get(url, { ...body, extraParams: { type: 'amis' } })
        case 'post':
          return $post(url, { ...body, extraParams: { type: 'amis' } })
      }
    }
    // theme: 'antd'
  })
}

/* 执行渲染逻辑 */
const initPage = async (jsonSchema: any) => {
  const amisRequire = (window as any)?.amisRequire ?? null

  if (!amisRequire) {
    return
  }
  await nextTick() // 待完成跟选择器节点的渲染
  // 使用 amis 内置组件渲染
  amisRender(jsonSchema)
}

/*解析url参数，加载对应的amis配置文件*/
const loadJsonSchemaHook = () => {
  // 路由命名规则 /amis/xxx [xxx 使用小驼峰]
  // 根据规则获取 json 文件名
  const pathName = (route.path).split('/').at(-1) as TJson
  // 获取 json 数据
  const json = jsonDefault[pathName] ?? null
  json && initPage(json)
}

watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    loadJsonSchemaHook()
  }
}, {
  immediate: true,
  deep: true
})
</script>

<style lang="stylus">
.amis-home
  width calc(100vw - 251px)
</style>
```

2. 配置路由

```js
{
  path: '/amis/:type',
  component: () => import('@/pages/amisPage/init.vue'),
  name: 'amis-demo'
}
```

## 模块组件

1. 创建amis相关组件，如`components/amis.vue`

```js
template>
  <div id="box">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import {  onMounted } from "vue";

const props= defineProps({
  amisjson: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  // @ts-ignore
  var amis = amisRequire('amis/embed');
  let amisScoped = amis.embed('#box', props.amisjson);
})
</script>
```

2. 在页面中使用：

```js
<template>
  <div class="main">
    <Amis :amisjson="amisjson"></Amis>
  </div>
</template>

<script lang="ts" setup>
import Amis from "../components/Amis.vue";

const amisjson = {
  type: 'form',
  mode: 'horizontal',
  body: [
    {
      label: '用户名',
      type: 'input-text',
      name: 'name'
    },
    {
      label: '密码',
      type: 'input-text',
      name: 'password'
    }
  ]
}
</script>
```
