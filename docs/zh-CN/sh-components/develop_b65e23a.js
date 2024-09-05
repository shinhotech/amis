amis.define('docs/zh-CN/sh-components/develop.md', function(require, exports, module, define) {

  module.exports = {
    "title": "混合开发",
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6\" href=\"#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>全局组件</h2><h3><a class=\"anchor\" name=\"amis-%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6\" href=\"#amis-%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>amis 内置组件</h3><p>通过<a href=\"../components/page\">amis组件</a>，直接进行开发。</p>\n<p>选择amis的css主题，在<code>HTML</code>中引入对应的<code>CSS</code>。amis提供了<code>云舍</code>、<code>仿AntD</code>、<code>ang</code>三种风格。</p>\n<p>根据设计规范，形成统一的<a href=\"\">reset-amis.css</a>，进行样式覆盖。</p>\n<h3><a class=\"anchor\" name=\"%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6\" href=\"#%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>第三方组件</h3><p>根据教程，可将<code>Element Plus</code>、<code>Ant Design</code>分别在<code>编辑器</code>和<code>项目渲染器中</code>集成。</p>\n<h3><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义组件</h3><p>amis内置组件和第三方组件都无法满足的需求，可通过开发自定义组件，注册进来。</p>\n<h3><a class=\"anchor\" name=\"%E4%B8%9A%E5%8A%A1%E7%BB%84%E4%BB%B6\" href=\"#%E4%B8%9A%E5%8A%A1%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>业务组件</h3><p>为了避免调试成本，提供业务组件的一些场景示例，拷贝后直接复用。有两个方式：</p>\n<ol>\n<li>amis<a href=\"../../examples/theme\">主题编辑器</a>。</li>\n<li>团队在项目开发过程中沉淀的<a href=\"../sh-components/index\">业务组件库</a>。</li>\n</ol>\n<h2><a class=\"anchor\" name=\"%E9%A1%B9%E7%9B%AE%E7%BB%84%E4%BB%B6\" href=\"#%E9%A1%B9%E7%9B%AE%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>项目组件</h2><h3><a class=\"anchor\" name=\"amis%E9%A1%B5%E9%9D%A2\" href=\"#amis%E9%A1%B5%E9%9D%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>amis页面</h3><blockquote>\n<p>适用于用amis写整个页面</p>\n</blockquote>\n<p>写一个通用的<code>xxx.vue</code>文件。</p>\n<p>使用<code>vue router</code>，根据<code>url?json文件名</code>指向<code>xxx.vue</code>，并加载对应的json配置文件，进行页面渲染。</p>\n<h3><a class=\"anchor\" name=\"amis%E7%BB%84%E4%BB%B6\" href=\"#amis%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>amis组件</h3><blockquote>\n<p>适用于用amis写部分页面</p>\n</blockquote>\n<p>写一个通用的<code>component.vue</code>组件。组件中使用amis进行渲染。</p>\n<p>在页面的<code>page.vue</code>文件中引入<code>component.vue</code>组件，完成部分功能的amis开发。</p>\n<p>对于复杂逻辑，可在<code>amis组件</code>中调用<code>vue中通用方法</code>。</p>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "全局组件",
          "fragment": "%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6",
          "level": 2,
          "children": [
            {
              "label": "amis 内置组件",
              "fragment": "amis-%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6",
              "fullPath": "#amis-%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6",
              "level": 3
            },
            {
              "label": "第三方组件",
              "fragment": "%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6",
              "fullPath": "#%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6",
              "level": 3
            },
            {
              "label": "自定义组件",
              "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6",
              "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6",
              "level": 3
            },
            {
              "label": "业务组件",
              "fragment": "%E4%B8%9A%E5%8A%A1%E7%BB%84%E4%BB%B6",
              "fullPath": "#%E4%B8%9A%E5%8A%A1%E7%BB%84%E4%BB%B6",
              "level": 3
            }
          ]
        },
        {
          "label": "项目组件",
          "fragment": "%E9%A1%B9%E7%9B%AE%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E9%A1%B9%E7%9B%AE%E7%BB%84%E4%BB%B6",
          "level": 2,
          "children": [
            {
              "label": "amis页面",
              "fragment": "amis%E9%A1%B5%E9%9D%A2",
              "fullPath": "#amis%E9%A1%B5%E9%9D%A2",
              "level": 3
            },
            {
              "label": "amis组件",
              "fragment": "amis%E7%BB%84%E4%BB%B6",
              "fullPath": "#amis%E7%BB%84%E4%BB%B6",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
