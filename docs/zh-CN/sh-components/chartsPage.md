---
title: Echarts查询页面
---

## 图表可视化

基于`Echarts 官方文档`。

```schema
{
  "type": "page",
  "className": "amis-market-capacity-visual",
  "body": {
    "type": "service",
    "id": "_marketCapacityVisualService",
    "data": {
      "quotaChecked": [
        "overview",
        "channelRatio",
        "priceParagraphDiff",
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
          "target": "overview,channelRatio,priceParagraphDiff,marketCapacityBar",
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
              "value": [
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
              "source": {
                "url": "category/invest/get-all?showLevel=3&dataType=9&year=${year}",
                "method": "get",
                "dataType": "json"
              }
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
              "source": {
                "url": "area/req/get-all?showLevel=4&year=${year}",
                "method": "get",
                "dataType": "json"
              }
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
        "className": "amis-topMpdule-btn",
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
                          "label": "人群价格段差异",
                          "value": "priceParagraphDiff"
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
          "api": {
            "url": "/market-volume/overView",
            "method": "post",
            "data": {
              "year": "${INT(year)}",
              "channels": "${channels|split|default: []}",
              "prdcategCode": "${prdcateg}",
              "prdcategLevel": "${prdcateg.length === 4 ? \"prdcateg_2\" : (prdcateg.length === 6 ? \"prdcateg_3\" : \"\")}",
              "geocCode": "${region}",
              "geocLevel": "${STARTSWITH(region, \"CN\") ? \"COUNTRY\" : (STARTSWITH(region, \"QU\") ? \"COUNTY\" : (STARTSWITH(region, \"City\") ? \"CITY\" : \"STATE_ABBREV\"))}",
              "cardType": "prdcateg"
            }
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
          "flex-wrap": "wrap"
        },
        "items": [{
          "type": "panel",
          "title": "渠道占比",
          "className": {
            "amis-market-capacity-flex-item": true,
            "display-none": "${IF(!ARRAYINCLUDES(quotaChecked, \"channelRatio\"), true, false)}"
          },
          "body": [{
            "type": "chart",
            "trackExpression": "${items|json}",
            "className": "amis-market-capacity-chart",
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
                  "data": [
                    {
                      "value": "311349.60",
                      "name": "大众&39.9%&311,349.6",
                      "ratio": "39.9%"
                    },
                    {
                      "value": "469719.60",
                      "name": "餐饮&60.1%&469,719.6",
                      "ratio": "60.1%"
                    }
                  ]
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
        }, {
          "type": "panel",
          "title": "渠道占比",
          "className": {
            "amis-market-capacity-flex-item": true,
            "display-none": "${IF(!ARRAYINCLUDES(quotaChecked, \"priceParagraphDiff\"), true, false)}"
          },
          "body": [{
            "type": "chart",
            "trackExpression": "${items|json}",
            "className": "amis-market-capacity-chart",
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
                  "name": "人群价格段差异",
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
                  "data": [
                    {
                      "value": "311349.60",
                      "name": "大众&39.9%&311,349.6",
                      "ratio": "39.9%"
                    },
                    {
                      "value": "469719.60",
                      "name": "餐饮&60.1%&469,719.6",
                      "ratio": "60.1%"
                    }
                  ]
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
        }, {
          "type": "panel",
          "title": "市场容量",
          "style": {
            "width": "100%"
          },
          "className": {
            "display-none": "${IF(!ARRAYINCLUDES(quotaChecked, \"marketCapacityBar\"), true, false)}"
          },
          "body": {
            "type": "service",
            "name": "marketCapacityBar",
            "id": "_marketCapacityBar",
            "initFetch": false,
            "api": "",
            "body": [{
              "type": "chart",
              "trackExpression": "${items|json}",
              "className": "amis-market-capacity-chart",
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
                    "data": ["江西","重庆","安徽","内蒙古","新疆","贵州","宁夏","北京","山东","广东","湖北","上海","黑龙江","云南","辽宁","河南","浙江","湖南","吉林","陕西","天津","河北","福建","江苏","四川","山西","甘肃"],
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
                  "series": [
                    {
                      "name": "市场容量",
                      "type": "bar",
                      "color": "#5BA3F6",
                      "data": [
                        {
                          "value": 23420.297636542,
                          "name": "江西"
                        },
                        {
                          "value": 29004.614449101,
                          "name": "重庆"
                        },
                        {
                          "value": 39339.579345508,
                          "name": "安徽"
                        },
                        {
                          "value": 13304.476962673,
                          "name": "内蒙古"
                        },
                        {
                          "value": 1458.785228698,
                          "name": "新疆"
                        },
                        {
                          "value": 11606.061782215,
                          "name": "贵州"
                        },
                        {
                          "value": 1871.463590872,
                          "name": "宁夏"
                        },
                        {
                          "value": 18953.679377903,
                          "name": "北京"
                        },
                        {
                          "value": 72144.585377507,
                          "name": "山东"
                        },
                        {
                          "value": 70292.313809653,
                          "name": "广东"
                        },
                        {
                          "value": 32997.838887886,
                          "name": "湖北"
                        },
                        {
                          "value": 25921.956565023,
                          "name": "上海"
                        },
                        {
                          "value": 17538.097451125,
                          "name": "黑龙江"
                        },
                        {
                          "value": 4790.798964689,
                          "name": "云南"
                        },
                        {
                          "value": 20794.775845586,
                          "name": "辽宁"
                        },
                        {
                          "value": 53093.638375099,
                          "name": "河南"
                        },
                        {
                          "value": 59179.428283743,
                          "name": "浙江"
                        },
                        {
                          "value": 39043.027557985,
                          "name": "湖南"
                        },
                        {
                          "value": 12165.142633609,
                          "name": "吉林"
                        },
                        {
                          "value": 16499.036718631,
                          "name": "陕西"
                        },
                        {
                          "value": 18622.57887356,
                          "name": "天津"
                        },
                        {
                          "value": 34113.722216637,
                          "name": "河北"
                        },
                        {
                          "value": 33365.886916174,
                          "name": "福建"
                        },
                        {
                          "value": 62343.791586021,
                          "name": "江苏"
                        },
                        {
                          "value": 53176.494013373,
                          "name": "四川"
                        },
                        {
                          "value": 15631.216430801,
                          "name": "山西"
                        },
                        {
                          "value": 395.920812888,
                          "name": "甘肃"
                        }
                      ]
                    }
                  ]
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
      }]
  }
}
```
