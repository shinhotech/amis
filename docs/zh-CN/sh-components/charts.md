---
title: 图表组件
---

## 四象限

基于`Echarts 气泡图`。

```schema
{
  "type": "page",
  "title": "IPO2~13节点-四象限图",
  "body": [
    {
      "type": "chart",
      "config": {
        "xAxis": [
          {
            "splitLine": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "axisTick": {
              "show": false
            }
          }
        ],
        "yAxis": [
          {
            "max": 1,
            "splitLine": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "axisTick": {
              "show": false
            }
          }
        ],
        "series": [
          {
            "data": [
              [
                0.89
              ]
            ],
            "type": "scatter",
            "z": 3,
            "symbolSize": 12,
            "itemStyle": {
              "normal": {
                "color": "#fff"
              }
            }
          },
          {
            "type": "scatter",
            "data": [
              [
                0.5,
                0
              ]
            ],
            "itemStyle": {
              "normal": {
                "color": "#999"
              }
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "valueIndex": 0,
                  "label": {
                    "show": false
                  }
                }
              ]
            }
          },
          {
            "name": "six",
            "type": "scatter",
            "data": [
              [
                0,
                0.5
              ]
            ],
            "itemStyle": {
              "normal": {
                "color": "#999"
              }
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "name": "six"
                }
              ],
              "label": {
                "show": false
              }
            }
          }
        ],
        "tooltip": null,
        "legend": [],
        "title": [
          {
            "text": "IPO2~13节点-四象限图",
            "left": "center",
            "textStyle": {
              "fontSize": 16
            }
          },
          {
            "text": "9%",
            "z": 1,
            "textAlign": "center",
            "left": "22.1%",
            "top": "20%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              118,
              36,
              115
            ],
            "backgroundColor": "pink"
          },
          {
            "text": "1%",
            "z": 1,
            "textAlign": "center",
            "left": "57.1%",
            "top": "20%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              110,
              36,
              106
            ],
            "backgroundColor": "blanchedalmond"
          },
          {
            "text": "81%",
            "z": 1,
            "textAlign": "center",
            "left": "22.6%",
            "top": "50%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              113,
              35,
              113
            ],
            "backgroundColor": "lightsteelblue"
          },
          {
            "text": "9%",
            "z": 1,
            "textAlign": "center",
            "left": "57.3%",
            "top": "50%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              108,
              35,
              105
            ],
            "backgroundColor": "burlywood"
          },
          {
            "text": "90% 老客",
            "z": 1,
            "textAlign": "center",
            "left": "37%",
            "top": "82%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "10% 新客",
            "z": 1,
            "textAlign": "center",
            "left": "75%",
            "top": "82%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "10% 新品",
            "z": 1,
            "textAlign": "center",
            "left": "12%",
            "top": "32%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "90% 老品",
            "z": 1,
            "textAlign": "center",
            "left": "12%",
            "top": "62%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          }
        ],
        "grid": {
          "top": "20%",
          "left": "20%",
          "right": "10%",
          "bottom": "20%",
          "containLabel": true
        }
      },
      "replaceChartOption": true,
      "id": "u:a053cd94fbad"
    }
  ],
  "id": "u:facfaa975130",
  "asideResizor": false,
  "style": {
    "boxShadow": " 0px 0px 0px 0px transparent"
  }
}
```

## 饼状图

配置信息来源 `Echarts 官方文档`。

```schema
{
  "type": "page",
  "title": "饼状图示例",
  "body": [
    {
      "type": "chart",
      "title": "饼状图示例",
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
      }
    }
  ]
}
```

## 柱状图

配置信息来源 `Echarts 官方文档`。

```schema
{
  "type": "page",
  "title": "柱状图示例",
  "body": [
    {
       "type": "chart",
      "title": "饼状图示例",
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
      }
    }
  ]
}
```


## 图表下载

```schema
{
  "type": "page",
  "title": "Echarts导出示例",
  "body": [
    {
      "type": "button",
      "label": "下载图表",
      "level": "primary",
      "onEvent": {
        "click": {
          "actions": [
            {
              "actionType": "custom",
              "script": "console.log('生成图片');\nhtml2canvas(document.querySelector('.cxd-Container')).then(canvas => {\nlet oImg = new Image();\noImg.src = canvas.toDataURL();\ndocument.body.appendChild(oImg);\nconst link = document.createElement('a');\nlink.href = oImg.src;\nlink.download = 'charts.png';\nlink.click();\n});"
            }
          ]
        }
      },
      "id": "u:dc51610b9651"
    },
    {
      "type": "container",
      "body": [
        {
          "type": "chart",
          "config": {
        "xAxis": [
          {
            "splitLine": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "axisTick": {
              "show": false
            }
          }
        ],
        "yAxis": [
          {
            "max": 1,
            "splitLine": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "axisTick": {
              "show": false
            }
          }
        ],
        "series": [
          {
            "data": [
              [
                0.89
              ]
            ],
            "type": "scatter",
            "z": 3,
            "symbolSize": 12,
            "itemStyle": {
              "normal": {
                "color": "#fff"
              }
            }
          },
          {
            "type": "scatter",
            "data": [
              [
                0.5,
                0
              ]
            ],
            "itemStyle": {
              "normal": {
                "color": "#999"
              }
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "valueIndex": 0,
                  "label": {
                    "show": false
                  }
                }
              ]
            }
          },
          {
            "name": "six",
            "type": "scatter",
            "data": [
              [
                0,
                0.5
              ]
            ],
            "itemStyle": {
              "normal": {
                "color": "#999"
              }
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "name": "six"
                }
              ],
              "label": {
                "show": false
              }
            }
          }
        ],
        "tooltip": null,
        "legend": [],
        "title": [
          {
            "text": "IPO2~13节点-四象限图",
            "left": "center",
            "textStyle": {
              "fontSize": 16
            }
          },
          {
            "text": "9%",
            "z": 1,
            "textAlign": "center",
            "left": "22.1%",
            "top": "20%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              118,
              36,
              115
            ],
            "backgroundColor": "pink"
          },
          {
            "text": "1%",
            "z": 1,
            "textAlign": "center",
            "left": "57.1%",
            "top": "20%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              110,
              36,
              106
            ],
            "backgroundColor": "blanchedalmond"
          },
          {
            "text": "81%",
            "z": 1,
            "textAlign": "center",
            "left": "22.6%",
            "top": "50%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              113,
              35,
              113
            ],
            "backgroundColor": "lightsteelblue"
          },
          {
            "text": "9%",
            "z": 1,
            "textAlign": "center",
            "left": "57.3%",
            "top": "50%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              108,
              35,
              105
            ],
            "backgroundColor": "burlywood"
          },
          {
            "text": "90% 老客",
            "z": 1,
            "textAlign": "center",
            "left": "37%",
            "top": "82%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "10% 新客",
            "z": 1,
            "textAlign": "center",
            "left": "75%",
            "top": "82%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "10% 新品",
            "z": 1,
            "textAlign": "center",
            "left": "12%",
            "top": "32%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "90% 老品",
            "z": 1,
            "textAlign": "center",
            "left": "12%",
            "top": "62%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          }
        ],
        "grid": {
          "top": "20%",
          "left": "20%",
          "right": "10%",
          "bottom": "20%",
          "containLabel": true
        }
      },
          "replaceChartOption": true,
          "id": "u:a053cd94fbad"
        },
        {
          "type": "chart",
          "config": {
        "xAxis": [
          {
            "splitLine": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "axisTick": {
              "show": false
            }
          }
        ],
        "yAxis": [
          {
            "max": 1,
            "splitLine": {
              "show": false
            },
            "axisLabel": {
              "show": false
            },
            "axisTick": {
              "show": false
            }
          }
        ],
        "series": [
          {
            "data": [
              [
                0.89
              ]
            ],
            "type": "scatter",
            "z": 3,
            "symbolSize": 12,
            "itemStyle": {
              "normal": {
                "color": "#fff"
              }
            }
          },
          {
            "type": "scatter",
            "data": [
              [
                0.5,
                0
              ]
            ],
            "itemStyle": {
              "normal": {
                "color": "#999"
              }
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "valueIndex": 0,
                  "label": {
                    "show": false
                  }
                }
              ]
            }
          },
          {
            "name": "six",
            "type": "scatter",
            "data": [
              [
                0,
                0.5
              ]
            ],
            "itemStyle": {
              "normal": {
                "color": "#999"
              }
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "name": "six"
                }
              ],
              "label": {
                "show": false
              }
            }
          }
        ],
        "tooltip": null,
        "legend": [],
        "title": [
          {
            "text": "IPO2~13节点-四象限图",
            "left": "center",
            "textStyle": {
              "fontSize": 16
            }
          },
          {
            "text": "9%",
            "z": 1,
            "textAlign": "center",
            "left": "22.1%",
            "top": "20%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              118,
              36,
              115
            ],
            "backgroundColor": "pink"
          },
          {
            "text": "1%",
            "z": 1,
            "textAlign": "center",
            "left": "57.1%",
            "top": "20%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              110,
              36,
              106
            ],
            "backgroundColor": "blanchedalmond"
          },
          {
            "text": "81%",
            "z": 1,
            "textAlign": "center",
            "left": "22.6%",
            "top": "50%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              113,
              35,
              113
            ],
            "backgroundColor": "lightsteelblue"
          },
          {
            "text": "9%",
            "z": 1,
            "textAlign": "center",
            "left": "57.3%",
            "top": "50%",
            "textStyle": {
              "fontSize": 20,
              "fontWeight": "normal",
              "color": "#333"
            },
            "padding": [
              35,
              108,
              35,
              105
            ],
            "backgroundColor": "burlywood"
          },
          {
            "text": "90% 老客",
            "z": 1,
            "textAlign": "center",
            "left": "37%",
            "top": "82%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "10% 新客",
            "z": 1,
            "textAlign": "center",
            "left": "75%",
            "top": "82%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "10% 新品",
            "z": 1,
            "textAlign": "center",
            "left": "12%",
            "top": "32%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          },
          {
            "text": "90% 老品",
            "z": 1,
            "textAlign": "center",
            "left": "12%",
            "top": "62%",
            "textStyle": {
              "fontSize": 12,
              "fontWeight": "normal",
              "color": "#999"
            }
          }
        ],
        "grid": {
          "top": "20%",
          "left": "20%",
          "right": "10%",
          "bottom": "20%",
          "containLabel": true
        }
      },
          "replaceChartOption": true,
          "id": "u:a58f48a235f3"
        }
      ],
      "style": {
        "position": "static",
        "display": "block"
      },
      "wrapperBody": false,
      "id": "u:5164a9a9962d"
    }
  ],
  "id": "u:facfaa975130",
  "asideResizor": false,
  "style": {
    "boxShadow": " 0px 0px 0px 0px transparent"
  }
}
```
