---
title: Echarts 图表查询
---

## 图表可视化

基于`Echarts 官方文档`。

```schema
{
  "type": "page",
  "className": "amis-charts-page",
  "cssVars": {
    "--Checkbox-onHover-color": "#fa705b",
    "--button-primary-default-top-border-color": "#fa705b",
    "--button-primary-default-right-border-color": "#fa705b",
    "--button-primary-default-bottom-border-color": "#fa705b",
    "--button-primary-default-left-border-color": "#fa705b",
    "--button-primary-default-bg-color": "#fa705b",
    "--colors-brand-5": "#fa705b",
    "--colors-brand-6": "#fa705b"
  },
  "body": {
    "type": "service",
    "id": "_marketCapacityVisualService",
    "data": {
      "quotaChecked": [
        "overview",
        "channelRatio",
        "priceParagraphRatio",
        "marketCapacityBar"
      ]
    },
    "body": [
      {
        "type": "panel",
        "className": "amis-panel-pb0",
        "body": {
          "type": "form",
          "title": "过滤条件",
          "target": "overview,channelRatio,priceParagraphRatio,marketCapacityBar",
          "submitOnInit": true,
          "wrapWithPanel": false,
          "mode": "inline",
          "body": [
            {
              "type": "select",
              "name": "year",
              "label": "时间",
              "value": "2023",
              "options": [
                {
                  "label": "2023年",
                  "value": "2023"
                },
                {
                  "label": "2022年",
                  "value": "2022"
                }
              ]
            },
            {
              "type": "select",
              "label": "渠道",
              "name": "channels",
              "multiple": true,
              "checkAll": true,
              "value": ["大众"],
              "options": [
                {
                  "label": "大众",
                  "value": "大众"
                },
                {
                  "label": "餐饮",
                  "value": "餐饮"
                }
              ],
              "placeholder": "全部"
            },
            {
              "type": "nested-select",
              "name": "prdcateg",
              "label": "品类",
              "value": "0100",
              "multiple": false,
              "joinValues": false,
              "extractValue": true,
              "hideNodePathLabel": true,
              "source": "/api/shMock/shComponent/prdcateg.json"
            },
            {
              "type": "nested-select",
              "name": "region",
              "label": "区域",
              "value": "CN",
              "multiple": false,
              "joinValues": false,
              "extractValue": true,
              "hideNodePathLabel": true,
              "source": "/api/shMock/shComponent/getRegionData.json"
            },
            {
              "type": "button-toolbar",
              "buttons": [
                {
                  "type": "reset",
                  "label": "重置",
                  "className": "amis-reset-btn"
                },
                {
                  "type": "submit",
                  "label": "确定",
                  "level": "danger",
                  "className": "amis-submit-btn"
                }
              ]
            }
          ],
          "actions": []
        }
      },
      {
        "type": "button",
        "label": "自定义卡片",
        "style": {
          "marginBottom": "10px"
        },
        "onEvent": {
          "click": {
            "weight": 0,
            "actions": [
              {
                "dialog": {
                  "type": "dialog",
                  "title": "自定义指标",
                  "body": [
                    {
                      "type": "checkboxes",
                      "label": "",
                      "name": "quotaChecked",
                      "multiple": true,
                      "options": [
                        {
                          "label": "概览",
                          "value": "overview"
                        },
                        {
                          "label": "渠道占比",
                          "value": "channelRatio"
                        },
                        {
                          "label": "价格段占比",
                          "value": "priceParagraphRatio"
                        },
                        {
                          "label": "市场容量",
                          "value": "marketCapacityBar"
                        }
                      ],
                      "value": "${quotaChecked}",
                      "checkAll": false,
                      "joinValues": false,
                      "extractValue": true,
                      "editable": false
                    }
                  ],
                  "showCloseButton": true,
                  "showErrorMsg": true,
                  "showLoading": true,
                  "closeOnEsc": false,
                  "size": "sm",
                  "onEvent": {
                    "confirm": {
                      "weight": 0,
                      "actions": [
                        {
                          "componentId": "_marketCapacityVisualService",
                          "actionType": "reload",
                          "dataMergeMode": "merge",
                          "data": {
                            "quotaChecked": "${event.data.quotaChecked}"
                          }
                        }
                      ]
                    }
                  }
                },
                "actionType": "dialog"
              }
            ]
          }
        }
      },
      {
        "type": "panel",
        "title": "概览",
        "initFetch": false,
        "className": {
          "market-capacity-overview": true,
          "display-none": "${IF(!ARRAYINCLUDES(quotaChecked, \"overview\"), true, false)}"
        },
        "body": {
          "type": "service",
          "name": "overview",
          "data": {
            "population": 140977,
            "urbanizationRate": 59,
            "familyCount": 46158,
            "peopleDensity": 0
          },
          "body": {
            "type": "grid",
            "gap": "lg",
            "columns": [
              {
                "type": "tpl",
                "tpl": "<span class=\"overview-item-title\">市场容量</span><div class=\"overview-item-data\">${marketVolume|round:1|number|default: -}<span class=\"unit\"> 万瓶</span></div>"
              },
              {
                "type": "tpl",
                "tpl": "<span class=\"overview-item-title\">常驻人口数量</span><div class=\"overview-item-data\">${population|round:1|number|default: -}<span class=\"unit\"> 万人</span></div>"
              },
              {
                "type": "tpl",
                "tpl": "<span class=\"overview-item-title\">城镇化率</span><div class=\"overview-item-data\">${urbanizationRate|default: -}<span class=\"unit\">%</span></div>"
              },
              {
                "type": "tpl",
                "tpl": "<span class=\"overview-item-title\">家庭户数</span><div class=\"overview-item-data\">${familyCount|round:1|number|default:-}<span class=\"unit\"> 万户</span></div>"
              },
              {
                "type": "tpl",
                "tpl": "<span class=\"overview-item-title\">人口密度数</span><div class=\"overview-item-data\">${peopleDensity|round:1|number|default:-}</div>"
              }
            ]
          }
        }
      },
      {
        "type": "flex",
        "justify": "space-between",
        "style": {
          "flex-wrap": "wrap",
          "flex": 1
        },
        "items": [{
          "type": "panel",
          "title": "渠道占比",
          "style": {
            "width": "100%"
          },
          "className": {
            "amis-market-capacity-flex-item": true,
            "display-none": "${IF(!ARRAYINCLUDES(quotaChecked, 'channelRatio'), true, false)}"
          },
          "body": {
            "type": "service",
            "name": "channelRatio",
            "id": "channelRatio",
            "initFetch": false,
            "api": "/api/shMock/shComponent/channelCard.json",
            "body": [{
              "type": "chart",
              "trackExpression": "${items|json}",
              "config": {
                "tooltip": {
                  "trigger": "item",
                  "borderColor": "transparent",
                  "backgroundColor": "rgba(51, 51, 51, 0.9)",
                  "textStyle": {
                    "color": "#FFF"
                  },
                  "formatter": "function(params){const targetHtml = `<div><svg width='20' height='10' style='display: inline-block'><circle cx='6' cy='5' r='4'  fill='${params.color}' /></svg><span style='margin-left: -6px; font-size: 12px; color: #fff; font-weight: bold;'>${params.name.split('&')[0]}</span><span style='display: inline-block; margin-left: 60px; margin-right: 5px;'>${params.data.ratio}<span style='margin-left: 4px;'>${params.data.value}</span></span></div>`;return (`<div style='margin-bottom: 10px;'>${params?.seriesName}</div>${targetHtml}`)}",
                },
                "color": [
                  "#5BA3F6",
                  "#FDD349",
                  "#F8AD66",
                  "#98C9FB",
                  "#59BDBD",
                  "#A2E168",
                  "#81CA43",
                  "#C89FE0",
                  "#A25FC8",
                  "#FA705B",
                  "#FAAB9D",
                  "#88D0D1"
                ],
                "legend": {
                  "left": "53%",
                  "top": "45%",
                  "orient": "vertical",
                  "icon": "circle",
                  "itemWidth": 8,
                  "itemHeight": 8,
                  "type": "scroll",
                  "selectedMode": false,
                  "pageIconSize": 8,
                  "formatter": "function (name) { const target = name.split('&'); return ['{title|' + target[0] + '}', '{ratio|' + target[1] + '}', '{value|' + target[2] + '}'].join('');}",
                  "textStyle": {
                    "rich": {
                      "title": {
                        "fontSize": 12,
                        "width": 18,
                        "color": "#333",
                        "padding": [0, 70, 0, 0]
                      },
                      "ratio": {
                        "fontSize": 12,
                        "color": "#333",
                        "align": "right",
                        "width": 40
                      },
                      "value": {
                        "fontSize": 12,
                        "color": "#333",
                        "align": "right",
                        "width": 61
                      }
                    }
                  }
                },
                "series": [
                  {
                    "name": "渠道占比",
                    "type": "pie",
                    "radius": [
                      "40%",
                      "70%"
                    ],
                    "center": [
                      "33%",
                      "50%"
                    ],
                    "avoidLabelOverlap": false,
                    "label": {
                      "show": false
                    },
                    "emphasis": {
                      "disabled": true
                    },
                    "labelLine": {
                      "show": false
                    },
                    "data": "${items}"
                  }
                ]
              },
              "hiddenOn": "${!COUNT(items)}"
            }, {
              "type": "image",
              "name": "emptyImage",
              "src": "https://sh-root-mvp1-test.shinho.net.cn/img/empty.a319be45.svg",
              "thumbMode": "cover",
              "imageCaption": "暂无数据",
              "className": "amis-card-empty",
              "hiddenOn": "${COUNT(items)}",
              "style": {
                "width": "110px",
                "height": "110px"
              }
            }]
          }
        }, {
          "type": "panel",
          "title": "价格段占比",
           "style": {
            "width": "100%"
          },
          "className": {
            "amis-market-capacity-flex-item": true,
            "display-none": "${IF(!ARRAYINCLUDES(quotaChecked, 'priceParagraphRatio'), true, false)}"
          },
          "body": {
            "type": "service",
            "name": "priceParagraphRatio",
            "id": "_priceParagraphRatio",
            "initFetch": false,
            "api": "/api/shMock/shComponent/prdcategCard.json",
            "body": [{
              "type": "chart",
              "trackExpression": "${items|json}",
              "config": {
                "tooltip": {
                  "trigger": "item",
                  "borderColor": "transparent",
                  "backgroundColor": "rgba(51, 51, 51, 0.9)",
                  "textStyle": {
                    "color": "#FFF"
                  },
                  "formatter": "function(params){const targetHtml = `<div><svg width='20' height='10' style='display: inline-block'><circle cx='6' cy='5' r='4'  fill='${params.color}' /></svg><span style='margin-left: -6px; font-size: 12px; color: #fff; font-weight: bold;'>${params.name.split('&')[0]}</span><span style='display: inline-block; margin-left: 60px; margin-right: 5px;'>${params.data.ratio}<span style='margin-left: 4px;'>${params.data.value}</span></span></div>`;return (`<div style='margin-bottom: 10px;'>${params?.seriesName}</div>${targetHtml}`)}",
                },
                "color": [
                  "#5BA3F6",
                  "#FDD349",
                  "#F8AD66",
                  "#98C9FB",
                  "#59BDBD",
                  "#A2E168",
                  "#81CA43",
                  "#C89FE0",
                  "#A25FC8",
                  "#FA705B",
                  "#FAAB9D",
                  "#88D0D1"
                ],
                "legend": {
                  "left": "53%",
                  "top": "35%",
                  "orient": "vertical",
                  "icon": "circle",
                  "itemWidth": 8,
                  "itemHeight": 8,
                  "type": "scroll",
                  "selectedMode": false,
                  "pageIconSize": 8,
                  "formatter": "function (name) { const target = name.split('&'); return ['{title|' + target[0] + '}', '{ratio|' + target[1] + '}', '{value|' + target[2] + '}'].join('');}",
                  "textStyle": {
                    "rich": {
                      "title": {
                        "fontSize": 12,
                        "width": 18,
                        "color": "#333",
                        "padding": [0, 70, 0, 0]
                      },
                      "ratio": {
                        "fontSize": 12,
                        "color": "#333",
                        "align": "right",
                        "width": 40
                      },
                      "value": {
                        "fontSize": 12,
                        "color": "#333",
                        "align": "right",
                        "width": 61
                      }
                    }
                  }
                },
                "series": [
                  {
                    "name": "价格段占比",
                    "type": "pie",
                    "radius": [
                      "40%",
                      "70%"
                    ],
                    "center": [
                      "33%",
                      "50%"
                    ],
                    "avoidLabelOverlap": false,
                    "label": {
                      "show": false
                    },
                    "emphasis": {
                      "disabled": true
                    },
                    "labelLine": {
                      "show": false
                    },
                    "data": "${items}"
                  }
                ]
              },
              "hiddenOn": "${!COUNT(items)}"
            }, {
              "type": "image",
              "name": "emptyImage",
              "src": "https://sh-root-mvp1-test.shinho.net.cn/img/empty.a319be45.svg",
              "thumbMode": "cover",
              "imageCaption": "暂无数据",
              "className": "amis-card-empty",
              "hiddenOn": "${COUNT(items)}"
            }]
          }
        }, {
          "type": "panel",
          "title": "市场容量",
          "style": {
            "width": "100%"
          },
          "className": {
            "display-none": "${IF(!ARRAYINCLUDES(quotaChecked, 'marketCapacityBar'), true, false)}"
          },
          "body": {
            "type": "service",
            "name": "marketCapacityBar",
            "id": "_marketCapacityBar",
            "initFetch": false,
            "api": "/api/shMock/shComponent/marketCapacityBar.json",
            "body": [{
              "type": "chart",
              "trackExpression": "${items|json}",
              "config": {
                "tooltip": {
                  "trigger": "axis",
                  "borderColor": "transparent",
                  "backgroundColor": "rgba(51, 51, 51, 0.9)",
                  "textStyle": {
                    "color": "#fff"
                  },
                  "axisPointer": {
                    "type": "shadow",
                    "show": true,
                    "shadowStyle": {
                      "shadowColor": "rgba(0, 0, 0, 0.1)"
                    }
                  },
                  "formatter": "function (paramArr) {const params = paramArr?.[0] || {};const targetHtml = `<div><svg width='20' height='10' style='display: inline-block'><circle cx='6' cy='5' r='4'  fill='${params.color}' /></svg><span style='margin-left: -6px; font-size: 12px; color: #fff; font-weight: bold;'>${params.seriesName}</span><span style='display: inline-block; margin-left: 60px; margin-right: 5px;'><span style='margin-left: 4px;'>${params.value}</span></span></div>`;return (`<div style='margin-bottom: 10px;'>${params?.name}</div>${targetHtml}`)}",
                },
                "dataZoom": {
                  "type": "slider",
                  "bottom": 20,
                  "height": 20
                },
                "legend": {
                  "bottom": 40,
                  "icon": "circle",
                  "itemWidth": 8,
                  "itemHeight": 8,
                },
                "grid": {
                  "left": 0,
                  "right": 0,
                  "top": 30,
                  "bottom": 70,
                  "containLabel": true
                },
                "xAxis": {
                  "type": "category",
                  "data": "${xAxisData}",
                  "axisLine": {
                    "show": true,
                    "onZero": false,
                    "lineStyle": {
                      "color": "#E6E6E6"
                    }
                  },
                  "axisTick": {
                    "show": false
                  },
                  "axisLabel": {
                    "color": "#333"
                  }
                },
                "yAxis": [
                  {
                    "type": "value",
                    "name": "万元",
                    "axisLabel": {
                      "color": "#333"
                    },
                    "axisLine": {
                      "show": true,
                      "lineStyle": {
                        "color": "#E6E6E6"
                      }
                    },
                    "axisTick": {
                      "show": false
                    },
                    "splitLine": {
                      "lineStyle": {
                        "type": "dashed",
                        "color": [
                          "#E6E6E6"
                        ]
                      }
                    },
                    "nameTextStyle": {
                      "fontFamily": "PingFang SC",
                      "fontSize": 12,
                      "color": "#999",
                      "align": "right",
                      "padding": [
                        0,
                        0,
                        0,
                        0
                      ]
                    }
                  }
                ],
                "series": "${items}"
              },
              "hiddenOn": "${IF(COUNT(items), false, true)}"
            }, {
              "type": "image",
              "name": "emptyImage",
              "src": "https://sh-root-mvp1-test.shinho.net.cn/img/empty.a319be45.svg",
              "thumbMode": "cover",
              "imageCaption": "暂无数据",
              "className": "amis-card-empty",
              "hiddenOn": "${COUNT(items)}"
            }]
          }
        }]
      }
    ]
  }
}
```

## 页面样式

```css
/* echarts page 可视化卡片样式设置 */
.display-none {
  display: none;
}
/* 按钮 */
.amis-charts-page .cxd-Button.cxd-Button--size-default {
  height: 28px;
  font-size: 12px;
  padding: 4px 18px;
}
.amis-charts-page .cxd-Button.cxd-Button--default:not(:disabled):not(.is-disabled) {
  border-color: #eee;
}
.amis-charts-page .cxd-Button.cxd-Button--default:not(:disabled):not(.is-disabled):hover {
  background: #fafafa;
  border-color: #eee;
  color: #333;
}
.amis-charts-page .cxd-Button.cxd-Button--danger:not(:disabled):not(.is-disabled):hover, .cxd-Button.cxd-Button--primary:not(:disabled):not(.is-disabled):hover {
  background: #F0513E;
  border-color: #F0513E;
  color: #fff;
}
.amis-charts-page .cxd-Form .cxd-ButtonToolbar > .cxd-Button {
  margin-left: 10px;
}

/* select 下拉 */
.amis-charts-page .cxd-SelectControl {
  width: 164px;
  height: 28px;
}
.amis-charts-page .cxd-SelectControl .cxd-Select {
  padding: 2px 12px;
  font-size: 12px;
  min-height: 28px;
}
.amis-charts-page .cxd-SelectControl .cxd-Select--multi .cxd-Select-valueWrap .cxd-Select-placeholder {
  margin-left: 0;
}
.amis-charts-page .cxd-Select-valueIcon {
  display: inline-block !important;
}
.amis-charts-page .cxd-Checkbox > i + span {
  vertical-align: middle;
}
.amis-charts-page .cxd-Select-arrow svg.icon {
  color: #ccc;
}

/* 级联 */
.amis-charts-page .cxd-NestedSelectControl {
  width: 184px;
  height: 28px;
}
.amis-charts-page .cxd-NestedSelectControl .cxd-NestedSelect-noResult {
  width: 184px;
}
.amis-charts-page .cxd-NestedSelectControl .cxd-ResultBox {
  font-size: 12px;
  padding: 2px 12px;
  min-height: 28px;
}

/* 概览卡片 */
.amis-charts-page .overview-item-title {
  color: #999;
  font-size: 12px;
}
.amis-charts-page .overview-item-data {
  color: #f0513e;
  font-weight: 600;
  font-size: 16px;
  margin-top: 15px;
}
.amis-charts-page .overview-item-data .unit {
  font-size: 12px;
}

.amis-charts-page .amis-market-capacity-flex-item {
  min-height: 248px;
}
.amis-charts-page .market-capacity-overview {
  padding-bottom: 10px;
}
.amis-charts-page .amis-market-capacity-flex-item .cxd-Panel-body {
  min-height: 260px;
}

/* 自定义指标 多选 */
.cxd-CheckboxesControl.is-inline .cxd-Checkbox {
  display: block !important;
}
/** 空态图片 */
.cxd-ImageField .cxd-Image {
  border: none;
  text-align: center;
  color: #999;
  width: 100%;
}
.cxd-ImageField .cxd-Image--thumb .cxd-Image-thumb {
  transform: translate(-50%, 0);
  margin-left: 50%;
  width: 110px;
  height: 110px;
}
.cxd-ImageField .cxd-Image--thumb .cxd-Image-info {
  width: 100%;
}

.cxd-ImageField.amis-card-empty {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transform: translate(-55px, 40px);
  margin-left: 50%;
}
```
