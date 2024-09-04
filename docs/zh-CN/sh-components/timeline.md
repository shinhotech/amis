---
title: 时间轴
---

## 循环渲染时间轴数据

```schema
{
  "type": "page",
  "body": {
    "label": "弹框",
    "type": "button",
    "actionType": "dialog",
    "dialog": {
      "size": "full",
      "className": "custom-dialog_container",
      "title": "溯源详情",
      "body": {
        "size": "none",
        "style": {
          "flexWrap": "nowrap",
          "display": "flex",
          "position": "static"
        },
        "wrapperBody": false,
        "id": "u:981dd37320b9",
        "isFixedHeight": false,
        "type": "wrapper",
        "body": [
          {
            "style": {
              "overflowX": "visible",
              "overflowY": "scroll",
              "flex": "0 0 150px",
              "background": "rgba(245, 246, 248, 1)",
              "display": "block",
              "flexBasis": "246px",
              "position": "static"
            },
            "id": "u:990b03e67b05",
            "isFixedHeight": false,
            "type": "wrapper",
            "body": [
              {
                "tpl": "产品名称",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(155, 165, 184, 1)",
                      "lineHeight": "24px",
                      "fontSize": "12px",
                      "fontWeight": "400"
                    }
                  }
                },
                "inline": false,
                "id": "u:product",
                "type": "tpl"
              },
              {
                "tpl": "2KG葱伴侣六月香豆瓣酱/焕新/1×6",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(10, 21, 51, 1)",
                      "lineHeight": "22px",
                      "fontSize": "14px",
                      "fontWeight": "400"
                    }
                  }
                },
                "inline": false,
                "id": "u:product_name",
                "type": "tpl"
              },
              {
                "tpl": "编码",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(155, 165, 184, 1)",
                      "lineHeight": "24px",
                      "fontSize": "12px",
                      "fontWeight": "400",
                      "marginTop": "24px"
                    }
                  }
                },
                "inline": false,
                "id": "u:qr_code",
                "type": "tpl"
              },
              {
                "tpl": "PP04021905",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(10, 21, 51, 1)",
                      "lineHeight": "22px",
                      "fontSize": "14px",
                      "fontWeight": "400"
                    }
                  }
                },
                "maxLine": 1,
                "inline": false,
                "id": "u:qr_code_str",
                "type": "tpl"
              },
              {
                "tpl": "生产时间",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(155, 165, 184, 1)",
                      "lineHeight": "24px",
                      "fontSize": "12px",
                      "fontWeight": "400",
                      "marginTop": "24px"
                    }
                  }
                },
                "inline": false,
                "id": "u:beizhu",
                "type": "tpl"
              },
              {
                "tpl": "2024-08-08 12:12:12",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(10, 21, 51, 1)",
                      "lineHeight": "22px",
                      "fontSize": "14px",
                      "fontWeight": "400"
                    }
                  }
                },
                "inline": false,
                "id": "u:beizhu_str",
                "type": "tpl"
              },
              {
                "tpl": "生产批次",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(155, 165, 184, 1)",
                      "lineHeight": "24px",
                      "fontSize": "12px",
                      "fontWeight": "400",
                      "marginTop": "24px"
                    }
                  }
                },
                "inline": false,
                "id": "u:production_batch",
                "type": "tpl"
              },
              {
                "tpl": "851000048224-24042285HA-M",
                "themeCss": {
                  "baseControlClassName": {
                    "font:default": {
                      "color": "rgba(10, 21, 51, 1)",
                      "lineHeight": "22px",
                      "fontSize": "14px",
                      "fontWeight": "400"
                    }
                  }
                },
                "inline": false,
                "id": "u:production_batch_str",
                "type": "tpl"
              }
            ]
          },
          {
            "size": "xs",
            "className": "column_timeline-container-wrapper",
            "style": {
              "flexGrow": 1,
              "overflowY": "scroll",
              "flex": "1 1 auto",
              "display": "block",
              "position": "static"
            },
            "id": "u:c787f5e7aa7a",
            "isFixedHeight": true,
            "type": "wrapper",
            "body": [
              {
                "mode": "right",
                "name": "timeline",
                "label": "时间轴",
                "id": "u:f3d0c5bbac59",
                "source": {
                  "method": "get",
                  "url": "/api/shMock/shComponent/timeline.json"
                },
                "type": "timeline",
                "reverse": false,
                "direction": "vertical",
                "itemTitleSchema": [
                  {
                    "isSlot": true,
                    "themeCss": {
                      "baseControlClassName": {
                        "padding-and-margin:default": {
                          "margin": "0"
                        }
                      }
                    },
                    "style": {
                      "overflowX": "visible",
                      "display": "block",
                      "minWidth": "100%",
                      "position": "static"
                    },
                    "id": "u:1b9caf3aad48",
                    "isFixedHeight": false,
                    "type": "container",
                    "body": [
                      {
                        "style": {
                          "padding": 0,
                          "color": "rgba(83, 95, 122, 1)",
                          "display": "block",
                          "fontSize": "16px",
                          "position": "static",
                          "height": "24px"
                        },
                        "id": "u:72178d5dd6f9",
                        "isFixedHeight": false,
                        "type": "wrapper",
                        "body": [
                          {
                            "tpl": "${scan_type_name}",
                            "wrapperComponent": "",
                            "inline": false,
                            "size": "xs",
                            "id": "u:1fdf9340f9f7",
                            "type": "tpl"
                          }
                        ],
                        "isFixedWidth": false
                      },
                      {
                        "style": {
                          "padding": 0,
                          "color": "rgba(155, 165, 184, 1)",
                          "display": "block",
                          "fontSize": "12px",
                          "position": "static",
                          "height": "20px"
                        },
                        "id": "u:72178d5dd6f9",
                        "isFixedHeight": false,
                        "type": "wrapper",
                        "body": [
                          {
                            "tpl": "${scan_time}",
                            "wrapperComponent": "",
                            "inline": false,
                            "size": "xs",
                            "id": "u:1fdf9340f9f7",
                            "type": "tpl"
                          }
                        ],
                        "isFixedWidth": false
                      },
                      {
                        "size": "sm",
                        "className": "b",
                        "style": {
                          "border": "1px solid rgba(238, 241, 245, 1)",
                          "overflowX": "visible",
                          "margin": "0",
                          "overflowY": "visible",
                          "borderRadius": "4px",
                          "color": "rgba(83, 95, 122, 1)",
                          "background": "rgba(245, 246, 248, 1)",
                          "display": "block",
                          "fontSize": "12px",
                          "lineHeight": 1.5,
                          "position": "static"
                        },
                        "id": "u:3c6d59c19704",
                        "isFixedHeight": false,
                        "type": "wrapper",
                        "body": [
                          {
                            "tpl": "出库单号：${out_order_no}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['1'], scan_type)}",
                            "id": "u:00bdef54baee1",
                            "type": "tpl"
                          },
                          {
                            "tpl": "班次：${production_team}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['0', '1'], scan_type)}",
                            "id": "u:00bdef54baee2",
                            "type": "tpl"
                          },
                          {
                            "tpl": "工厂：${factory_name}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['0', '1'], scan_type)}",
                            "id": "u:00bdef54baee3",
                            "type": "tpl"
                          },
                          {
                            "tpl": "仓库：${sh_warehouse_name}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES([['0', '1'], scan_type)}",
                            "id": "u:00bdef54baee4",
                            "type": "tpl"
                          },
                          {
                            "tpl": "经销商：${dealer_cust_name}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['1'], scan_type)}",
                            "id": "u:00bdef54baee5",
                            "type": "tpl"
                          },
                          {
                            "tpl": "上报人：${scan_person_name}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['2', '3', '4','6','7','9','10','11'], scan_type)}",
                            "id": "u:00bdef54baee6",
                            "type": "tpl"
                          },
                          {
                            "tpl": "上报人类型：${scan_person_type_name}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['2', '3', '4','6','7','9','10','11'], scan_type)}",
                            "id": "u:00bdef54baee7",
                            "type": "tpl"
                          },
                          {
                            "tpl": "来源名称/编号：${scan_source_name}/${scan_source_code}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['2', '3', '4','6','7','9','10','11'], scan_type)}",
                            "id": "u:00bdef54baee8",
                            "type": "tpl"
                          },
                          {
                            "tpl": "来源地址：${scan_source_address}",
                            "wrapperComponent": "",
                            "inline": false,
                            "visibleOn": "${ARRAYINCLUDES(['2', '3', '4','6','7','9','10','11'], scan_type)}",
                            "id": "u:00bdef54baee9",
                            "type": "tpl"
                          },
                          {
                            "tpl": "有窜货风险",
                            "wrapperComponent": "",
                            "inline": false,
                            "color": "#EB4747",
                            "visibleOn": "${ARRAYINCLUDES(['2','7','9','10','11'], scan_type)}",
                            "id": "u:00bdef54baee10",
                            "type": "tpl"
                          }
                        ],
                        "isFixedWidth": false
                      }
                    ],
                    "isFixedWidth": false
                  }
                ]
              }
            ]
          }
        ],
        "isFixedWidth": false
      },
      "actions": [
        {
          "actionType": "confirm",
          "label": "关闭",
          "type": "button"
        }
      ]
    }
  },
  "css": {
    ".cxd-Modal--full.custom-dialog_container > .cxd-Modal-content": {
        ".cxd-Modal-body": {
            "margin": "0 0 10px"
        },
        "max-height": "80%",
        "padding": "0 0 16px",
        ".cxd-Modal-title": {
            "font-weight": 600,
            "font-size": "16px"
        },
        ".cxd-Modal-close": {
            "top": "16px"
        },
        "width": "62%",
        ".cxd-Modal-header": {
            "line-height": "48px",
            "height": "48px !important"
        }
    },
    ".column_timeline-container-wrapper": {
        ".cxd-TimelineItem-content": {
            "flex": "1 1 auto"
        },
        ".cxd-TimelineItem-line,.cxd-TimelineItem-round": {
            "background-color": "rgba(235, 71, 71, 1) !important"
        }
    }
  }
}
```
