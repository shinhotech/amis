---
title: 表单组件
---

## 表单查询

```schema
{
   "type": "page",
   "title": "Amis表单查询",
   "body": {
      "type": "crud",
      "draggable": false,
      "syncLocation": false,
      "perPage": 10,
      "api": {
         "url": "/api/mock2/shComponent/nodeList",
         "method": "post",
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
               "source": {
                  "url": "/api/mock2/shComponent/applyNode",
                  "method": "get",
                  "dataType": "json",
                  "responseData": {
                     "options": "${items|pick:label~nodeDesc,value~nodeCode}"
                  }
               }
            },
            {
               "type": "input-year",
               "label": "时间",
               "name": "year",
               "id": "u:e1a120d1c59d",
               "inputFormat": "YYYY",
               "placeholder": "请选择年",
               "format": "X",
               "minDate": "",
               "maxDate": "",
               "value": ""
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
                     "level": "danger"
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
         "url": "/api/mock2/shComponent/ipoTableList",
         "method": "post",
         "data": {
            "yearType": "${yearType}",
            "date": "${yearType === \"year\" ? year : (yearType === \"quarter\" ? quarter : month)}",
            "region": "${region}"
         },
         "dataType": "json",
         "responseData": {
            "items": "${items}"
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
               "source": {
                  "url": "/api/mock2/shComponent/getRegionData",
               }
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
                     "level": "danger"
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
