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
      "config": {"xAxis": [
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
