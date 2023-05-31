---
title: 表单组件
---

## 表单查询

```schema
{
   "type": "page",
   "title": "Amis表单查询",
   "cssVars": {
      "--colors-brand-5": "#fa6f5b",
      "--colors-brand-6": "#fa6f5b",
      "--ButtonGroup--primary-isActive-bg": "#fa6f5b"
   },
   "body": {
      "type": "crud",
      "draggable": false,
      "syncLocation": false,
      "perPage": 10,
      "api": {
         "url": "/api/shMock/shComponent/nodeList.json",
         "method": "get",
         "defaultParams": {
            "perPage": 10,
            "page": 1,
            "nodeList": []
         },
         "data": {
            "pageIndex": "${page}",
            "pageSize": "${perPage}",
            "data": {
               "nodeCode": "${nodeList|default:[]|split}"
            }
         },
         "messages": {},
         "dataType": "json",
         "responseData": {
            "items": "${records}",
            "count": "${total}"
         }
      },
      "footerToolbar": [
         "statistics",
         "switch-per-page",
         "pagination"
      ],
      "columnsTogglable": false,
      "columns": [
         {
            "label": "标签值名称",
            "name": "labelValName",
            "type": "text",
            "id": "u:a9aa01d9daec"
         },
         {
            "type": "text",
            "label": "标签值编码",
            "name": "labelValCode",
            "id": "u:87e11adab299"
         },
         {
            "type": "text",
            "label": "标签名称",
            "name": "labelName",
            "id": "u:b29c17b048fb"
         },
         {
            "type": "text",
            "label": "标签编码",
            "name": "labelCode",
            "id": "u:152b85736414"
         },
         {
            "type": "text",
            "label": "应用节点",
            "name": "applyNodeDescStr"
         },
         {
            "type": "operation",
            "label": "操作",
            "width": 100,
            "buttons": [
               {
                  "label": "编辑",
                  "type": "button",
                  "tooltip": "编辑",
                  "actionType": "drawer",
                  "drawer": {
                     "position": "right",
                     "size": "small",
                     "title": "编辑",
                     "body": {
                        "type": "form",
                        "name": "sample-edit-form",
                        "body": [
                           {
                              "type": "input-text",
                              "name": "engine",
                              "label": "Engine",
                              "required": true
                           },
                           {
                              "type": "divider"
                           },
                           {
                              "type": "select",
                              "name": "grade",
                              "label": "CSS grade",
                              "options": [
                                 "A",
                                 "B",
                                 "C",
                                 "D",
                                 "X"
                              ]
                           }
                        ]
                     }
                  }
               },
               {
                  "label": "删除",
                  "type": "button",
                  "actionType": "ajax",
                  "level": "danger",
                  "confirmText": "确认要删除？",
                  "api": {
                     "url": "https://apimarket-test.shinho.net.cn/sh-root-mvp1/label/remove/label-val",
                     "method": "post",
                     "data": {
                        "labelValCodes": "${[labelValName]}"
                     },
                     "messages": {},
                     "dataType": "json",
                     "adaptor": "return {\n status: 0,\n msg: 'ok',\n data: {\n msg: '删除成功！' \n}\n}"
                  }
               }
            ]
         }
      ],
      "filter": {
         "type": "form",
         "title": "表单",
         "mode": "inline",
         "submitText": null,
         "body": [
            {
               "type": "group",
               "id": "u:4e7ea8572e09",
               "label": "",
               "required": "",
               "gap": "xs",
               "body": [
                  {
                     "type": "button-group-select",
                     "name": "date_type",
                     "value": "2",
                     "btnActiveLevel": "primary",
                     "mode": "inline",
                     "options": [
                     {
                        "label": "年",
                        "value": 1
                     },
                     {
                        "label": "季",
                        "value": 2
                     },
                     {
                        "label": "月",
                        "value": 3
                     }
                     ],
                     "id": "_filterDateType",
                     "multiple": false
                  },
                  {
                     "type": "input-year",
                     "name": "year",
                     "inline": true,
                     "inputFormat": "YYYY",
                     "format": "YYYY",
                     "visibleOn": "date_type == 1",
                     "id": "_filterDateYear",
                     "label": "时间",
                     "clearable": false,
                     "value": "${DATETOSTR(TODAY(),'YYYY')}"
                  },
                  {
                     "type": "input-quarter",
                     "name": "quarter",
                     "inline": true,
                     "format": "YYYY-[Q]Q",
                     "visibleOn": "date_type == 2",
                     "id": "_filterDateQuarter",
                     "label": "时间",
                     "value": "${DATETOSTR(TODAY(),'YYYY-[Q]Q')}",
                     "inputFormat": "YYYY-[Q]Q",
                     "clearable": false
                  },
                  {
                     "type": "input-month",
                     "name": "month",
                     "inline": true,
                     "format": "YYYY-MM",
                     "visibleOn": "date_type == 3",
                     "id": "_filterDateMonth",
                     "label": "时间",
                     "value": "${DATETOSTR(TODAY(),'YYYY-MM')}",
                     "inputFormat": "YYYY-MM",
                     "placeholder": "请选择月份",
                     "clearable": false
                  }
               ]
               },
            {
               "type": "select",
               "label": "品牌",
               "name": "brand",
               "options": [
                  {
                     "label": "六月鲜",
                     "value": "11"
                  },
                  {
                     "label": "味达美",
                     "value": "08"
                  }
               ],
               "id": "u:dd13ed4038c4",
               "multiple": false,
               "value": "11"
            },
            {
               "type": "nested-select",
               "name": "nodeList",
               "label": "应用节点",
               "cascade": true,
               "multiple": true,
               "checkAll": false,
               "value": "",
               "source": "/api/shMock/shComponent/applyNode.json"
            },
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
               "type": "button-group-select",
               "name": "unit_type",
               "label": "",
               "inline": false,
               "options": [
                  {
                     "label": "销量(千瓶/L)",
                     "value": 0
                  },
                  {
                     "label": "销额(千元)",
                     "value": 1
                  }
               ],
               "id": "_filterUnitType",
               "multiple": false,
               "value": "0"
            },
            {
               "type": "button-toolbar",
               "buttons": [
                  {
                     "type": "reset",
                     "label": "重置"
                  },
                  {
                     "type": "submit",
                     "label": "确定",
                     "level": "primary"
                  }
               ]
            }
         ],
         "onEvent": {
            "change": {
               "weight": 0,
               "actions": []
            }
         }
      },
      "headerToolbar": [
         {
            "type": "service",
            "id": "_exportService",
            "body": [
               {
                  "type": "button",
                  "icon": "iconfont icon-daochu1",
                  "label": "导出",
                  "onEvent": {
                     "click": {
                        "actions": [
                        {
                           "actionType": "switch",
                           "children": [
                              {
                              "dialog": {
                                 "type": "dialog",
                                 "title": "确认导出",
                                 "body": [
                                    {
                                    "type": "tpl",
                                    "tpl": "导出成功，报表回发送到您的邮箱",
                                    "wrapperComponent": "",
                                    "inline": false,
                                    "id": "u:22c36fa27ae9"
                                    },
                                    {
                                    "type": "tpl",
                                    "tpl": "${ls:userInfo.userInfo.mail}",
                                    "wrapperComponent": "",
                                    "inline": false,
                                    "id": "u:2009dd6bdbc8"
                                    }
                                 ],
                                 "showCloseButton": true,
                                 "showErrorMsg": true,
                                 "showLoading": true,
                                 "id": "u:80dd09fd6e62",
                                 "closeOnEsc": false,
                                 "onEvent": {
                                    "confirm": {
                                    "weight": 0,
                                    "actions": [
                                       {
                                          "args": {
                                          "options": {
                                          },
                                          "api": {
                                             "url": "${exportUrl}",
                                             "method": "post",
                                             "messages": {
                                             },
                                             "data": {
                                                "&": "${exportParams}"
                                             }
                                          }
                                          },
                                          "outputVar": "responseResult",
                                          "actionType": "ajax"
                                       }
                                    ]
                                    }
                                 }
                              },
                              "actionType": "dialog",
                              "expression": "${AND(ls:userInfo.userInfo.mail)}"
                              },
                              {
                              "args": {
                              },
                              "actionType": "dialog",
                              "dialog": {
                                 "type": "dialog",
                                 "title": "提示",
                                 "body": [
                                    {
                                    "type": "tpl",
                                    "tpl": "导出报表将发送到您邮箱中，请RTX联系许晗斌补充您的邮箱！",
                                    "wrapperComponent": "",
                                    "inline": false,
                                    "id": "u:320e5a1134aa"
                                    }
                                 ],
                                 "showCloseButton": true,
                                 "showErrorMsg": true,
                                 "showLoading": true,
                                 "id": "u:2f9b4e82fd46",
                                 "closeOnEsc": false
                              },
                              "expression": "${AND(!ls:userInfo.userInfo.mail)}"
                              }
                           ]
                        }
                        ]
                     }
                  },
                  "id": "u:0d4a85f02e39"
               }
            ],
            "data": {
               "exportUrl": "xxx",
               "exportParams": "${filterParams}"
            }
         }
      ],
   }
}
```

## ipo 四象限分析

```schema
{
   "type": "page",
   "title": "ipo 四象限分析",
   "body": {
      "type": "crud",
      "draggable": false,
      "syncLocation": false,
      "api": {
         "url": "/api/shMock/shComponent/ipoTableList.json",
         "method": "get",
         "data": {
            "yearType": "${yearType}",
            "date": "${yearType === \"year\" ? year : (yearType === \"quarter\" ? quarter : month)}",
            "region": "${region}"
         }
      },
      "data": {
         "test": "北京"
      },
      "footerToolbar": [
         "statistics",
         "switch-per-page",
         "pagination"
      ],
      "columnsTogglable": true,
      "columns": [
         {
            "type": "text",
            "label": "${test}",
            "name": "type1",
            "fixed": "left",
            "width": 140
         },
         {
            "type": "text",
            "label": "IPO2目标额",
            "name": "ipo2"
         },
         {
            "type": "text",
            "label": "IPO3目标额",
            "name": "ipo3"
         },
         {
            "type": "text",
            "label": "IPO4目标额",
            "name": "ipo4"
         },
         {
            "type": "text",
            "label": "IPO5目标额",
            "name": "ipo5"
         },
         {
            "type": "text",
            "label": "IPO6目标额",
            "name": "ipo6"
         },
         {
            "type": "text",
            "label": "IPO7目标额",
            "name": "ipo7"
         },
         {
            "type": "text",
            "label": "IPO8目标额",
            "name": "ipo8"
         },
         {
            "type": "text",
            "label": "IPO9目标额",
            "name": "ipo9"
         },
         {
            "type": "text",
            "label": "IPO10目标额",
            "name": "ipo10"
         },
         {
            "type": "text",
            "label": "IPO11目标额",
            "name": "ipo11"
         }
      ],
      "filter": {
         "type": "form",
         "title": "表单",
         "mode": "inline",
         "submitText": null,
         "body": [
            {
               "type": "group",
               "label": "时间",
               "required": "",
               "gap": "xs",
               "body": [
                  {
                     "type": "button-group-select",
                     "name": "yearType",
                     "value": "year",
                     "btnActiveLevel": "primary",
                     "mode": "inline",
                     "options": [
                        {
                           "label": "年度",
                           "value": "year"
                        },
                        {
                           "label": "季度",
                           "value": "quarter"
                        },
                        {
                           "label": "月度",
                           "value": "monthly"
                        }
                     ]
                  },
                  {
                     "type": "input-year",
                     "name": "year",
                     "inline": true,
                     "inputFormat": "YYYY",
                     "format": "YYYY",
                     "value": "-1year",
                     "visibleOn": "data.yearType == 'year'"
                  },
                  {
                     "type": "input-quarter",
                     "name": "quarter",
                     "inline": true,
                     "format": "YYYY-MM",
                     "visibleOn": "data.yearType == 'quarter'"
                  },
                  {
                     "type": "input-month",
                     "name": "month",
                     "inline": true,
                     "inputFormat": "YYYY-MM",
                     "format": "YYYY-MM",
                     "visibleOn": "data.yearType == 'monthly'"
                  }
               ]
            },
            {
               "type": "nested-select",
               "name": "region",
               "label": "区域",
               "width": 200,
               "value": "010",
               "multiple": false,
               "extractValue": true,
               "source": "/api/shMock/shComponent/getRegionData.json"
            },
            {
               "type": "button-toolbar",
               "buttons": [
                  {
                     "type": "reset",
                     "label": "重置"
                  },
                  {
                     "type": "submit",
                     "label": "确定",
                     "level": "primary"
                  }
               ]
            }
         ],
         "onEvent": {
            "change": {
               "weight": 0,
               "actions": []
            }
         }
      }
   }
}
```

## 表单下载

```schema
{
  "type": "page",
  "title": "Excel下载",
  "body": [
    {
      "type": "button",
      "label": "下载",
      "onEvent": {
        "click": {
          "actions": [
            {
              "actionType": "custom",
              "script": "console.log('excel下载');\n const link = document.createElement('a');\n link.href = '替换为后端S3地址';\n link.download = 'filename.xlsx';\n document.body.appendChild(link); link.click();\n document.body.removeChild(link);"
            }
          ]
        }
      },
      "level": "primary"
    }
  ],
  "style": {
    "boxShadow": " 0px 0px 0px 0px transparent"
  }
}
```
