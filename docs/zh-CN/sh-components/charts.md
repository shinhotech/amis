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
      "api": "/api/shMock/shComponent/channelCard.json",
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
      "api": "/api/shMock/shComponent/marketCapacityBar.json",
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
