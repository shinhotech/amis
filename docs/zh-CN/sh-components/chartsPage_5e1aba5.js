amis.define('docs/zh-CN/sh-components/chartsPage.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Echarts 图表查询",
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9B%BE%E8%A1%A8%E5%8F%AF%E8%A7%86%E5%8C%96\" href=\"#%E5%9B%BE%E8%A1%A8%E5%8F%AF%E8%A7%86%E5%8C%96\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图表可视化</h2><p>基于<code>Echarts 官方文档</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"className\": \"amis-charts-page\",\n  \"cssVars\": {\n    \"--Checkbox-onHover-color\": \"#fa705b\",\n    \"--button-primary-default-top-border-color\": \"#fa705b\",\n    \"--button-primary-default-right-border-color\": \"#fa705b\",\n    \"--button-primary-default-bottom-border-color\": \"#fa705b\",\n    \"--button-primary-default-left-border-color\": \"#fa705b\",\n    \"--button-primary-default-bg-color\": \"#fa705b\",\n    \"--colors-brand-5\": \"#fa705b\",\n    \"--colors-brand-6\": \"#fa705b\"\n  },\n  \"body\": {\n    \"type\": \"service\",\n    \"id\": \"_marketCapacityVisualService\",\n    \"data\": {\n      \"quotaChecked\": [\n        \"overview\",\n        \"channelRatio\",\n        \"priceParagraphRatio\",\n        \"marketCapacityBar\"\n      ]\n    },\n    \"body\": [\n      {\n        \"type\": \"panel\",\n        \"className\": \"amis-panel-pb0\",\n        \"body\": {\n          \"type\": \"form\",\n          \"title\": \"过滤条件\",\n          \"target\": \"overview,channelRatio,priceParagraphRatio,marketCapacityBar\",\n          \"submitOnInit\": true,\n          \"wrapWithPanel\": false,\n          \"mode\": \"inline\",\n          \"body\": [\n            {\n              \"type\": \"select\",\n              \"name\": \"year\",\n              \"label\": \"时间\",\n              \"value\": \"2023\",\n              \"options\": [\n                {\n                  \"label\": \"2023年\",\n                  \"value\": \"2023\"\n                },\n                {\n                  \"label\": \"2022年\",\n                  \"value\": \"2022\"\n                }\n              ]\n            },\n            {\n              \"type\": \"select\",\n              \"label\": \"渠道\",\n              \"name\": \"channels\",\n              \"multiple\": true,\n              \"checkAll\": true,\n              \"value\": [\"大众\"],\n              \"options\": [\n                {\n                  \"label\": \"大众\",\n                  \"value\": \"大众\"\n                },\n                {\n                  \"label\": \"餐饮\",\n                  \"value\": \"餐饮\"\n                }\n              ],\n              \"placeholder\": \"全部\"\n            },\n            {\n              \"type\": \"nested-select\",\n              \"name\": \"prdcateg\",\n              \"label\": \"品类\",\n              \"value\": \"0100\",\n              \"multiple\": false,\n              \"joinValues\": false,\n              \"extractValue\": true,\n              \"hideNodePathLabel\": true,\n              \"source\": \"https://shinhotech.github.io/amis/mock/cfc/mock/shComponent/prdcateg.json\"\n            },\n            {\n              \"type\": \"nested-select\",\n              \"name\": \"region\",\n              \"label\": \"区域\",\n              \"value\": \"CN\",\n              \"multiple\": false,\n              \"joinValues\": false,\n              \"extractValue\": true,\n              \"hideNodePathLabel\": true,\n              \"source\": \"https://shinhotech.github.io/amis/mock/cfc/mock/shComponent/getRegionData.json\"\n            },\n            {\n              \"type\": \"button-toolbar\",\n              \"buttons\": [\n                {\n                  \"type\": \"reset\",\n                  \"label\": \"重置\",\n                  \"className\": \"amis-reset-btn\"\n                },\n                {\n                  \"type\": \"submit\",\n                  \"label\": \"确定\",\n                  \"level\": \"danger\",\n                  \"className\": \"amis-submit-btn\"\n                }\n              ]\n            }\n          ],\n          \"actions\": []\n        }\n      },\n      {\n        \"type\": \"button\",\n        \"label\": \"自定义卡片\",\n        \"style\": {\n          \"marginBottom\": \"10px\"\n        },\n        \"onEvent\": {\n          \"click\": {\n            \"weight\": 0,\n            \"actions\": [\n              {\n                \"dialog\": {\n                  \"type\": \"dialog\",\n                  \"title\": \"自定义指标\",\n                  \"body\": [\n                    {\n                      \"type\": \"checkboxes\",\n                      \"label\": \"\",\n                      \"name\": \"quotaChecked\",\n                      \"multiple\": true,\n                      \"options\": [\n                        {\n                          \"label\": \"概览\",\n                          \"value\": \"overview\"\n                        },\n                        {\n                          \"label\": \"渠道占比\",\n                          \"value\": \"channelRatio\"\n                        },\n                        {\n                          \"label\": \"价格段占比\",\n                          \"value\": \"priceParagraphRatio\"\n                        },\n                        {\n                          \"label\": \"市场容量\",\n                          \"value\": \"marketCapacityBar\"\n                        }\n                      ],\n                      \"value\": \"${quotaChecked}\",\n                      \"checkAll\": false,\n                      \"joinValues\": false,\n                      \"extractValue\": true,\n                      \"editable\": false\n                    }\n                  ],\n                  \"showCloseButton\": true,\n                  \"showErrorMsg\": true,\n                  \"showLoading\": true,\n                  \"closeOnEsc\": false,\n                  \"size\": \"sm\",\n                  \"onEvent\": {\n                    \"confirm\": {\n                      \"weight\": 0,\n                      \"actions\": [\n                        {\n                          \"componentId\": \"_marketCapacityVisualService\",\n                          \"actionType\": \"reload\",\n                          \"dataMergeMode\": \"merge\",\n                          \"data\": {\n                            \"quotaChecked\": \"${event.data.quotaChecked}\"\n                          }\n                        }\n                      ]\n                    }\n                  }\n                },\n                \"actionType\": \"dialog\"\n              }\n            ]\n          }\n        }\n      },\n      {\n        \"type\": \"panel\",\n        \"title\": \"概览\",\n        \"initFetch\": false,\n        \"className\": {\n          \"market-capacity-overview\": true,\n          \"display-none\": \"${IF(!ARRAYINCLUDES(quotaChecked, \\\"overview\\\"), true, false)}\"\n        },\n        \"body\": {\n          \"type\": \"service\",\n          \"name\": \"overview\",\n          \"data\": {\n            \"population\": 140977,\n            \"urbanizationRate\": 59,\n            \"familyCount\": 46158,\n            \"peopleDensity\": 0\n          },\n          \"body\": {\n            \"type\": \"grid\",\n            \"gap\": \"lg\",\n            \"columns\": [\n              {\n                \"type\": \"tpl\",\n                \"tpl\": \"<span class=\\\"overview-item-title\\\">市场容量</span><div class=\\\"overview-item-data\\\">${marketVolume|round:1|number|default: -}<span class=\\\"unit\\\"> 万瓶</span></div>\"\n              },\n              {\n                \"type\": \"tpl\",\n                \"tpl\": \"<span class=\\\"overview-item-title\\\">常驻人口数量</span><div class=\\\"overview-item-data\\\">${population|round:1|number|default: -}<span class=\\\"unit\\\"> 万人</span></div>\"\n              },\n              {\n                \"type\": \"tpl\",\n                \"tpl\": \"<span class=\\\"overview-item-title\\\">城镇化率</span><div class=\\\"overview-item-data\\\">${urbanizationRate|default: -}<span class=\\\"unit\\\">%</span></div>\"\n              },\n              {\n                \"type\": \"tpl\",\n                \"tpl\": \"<span class=\\\"overview-item-title\\\">家庭户数</span><div class=\\\"overview-item-data\\\">${familyCount|round:1|number|default:-}<span class=\\\"unit\\\"> 万户</span></div>\"\n              },\n              {\n                \"type\": \"tpl\",\n                \"tpl\": \"<span class=\\\"overview-item-title\\\">人口密度数</span><div class=\\\"overview-item-data\\\">${peopleDensity|round:1|number|default:-}</div>\"\n              }\n            ]\n          }\n        }\n      },\n      {\n        \"type\": \"flex\",\n        \"justify\": \"space-between\",\n        \"style\": {\n          \"flex-wrap\": \"wrap\",\n          \"flex\": 1\n        },\n        \"items\": [{\n          \"type\": \"panel\",\n          \"title\": \"渠道占比\",\n          \"style\": {\n            \"width\": \"100%\"\n          },\n          \"className\": {\n            \"amis-market-capacity-flex-item\": true,\n            \"display-none\": \"${IF(!ARRAYINCLUDES(quotaChecked, 'channelRatio'), true, false)}\"\n          },\n          \"body\": {\n            \"type\": \"service\",\n            \"name\": \"channelRatio\",\n            \"id\": \"channelRatio\",\n            \"initFetch\": false,\n            \"api\": \"https://shinhotech.github.io/amis/mock/cfc/mock/shComponent/channelCard.json\",\n            \"body\": [{\n              \"type\": \"chart\",\n              \"trackExpression\": \"${items|json}\",\n              \"config\": {\n                \"tooltip\": {\n                  \"trigger\": \"item\",\n                  \"borderColor\": \"transparent\",\n                  \"backgroundColor\": \"rgba(51, 51, 51, 0.9)\",\n                  \"textStyle\": {\n                    \"color\": \"#FFF\"\n                  },\n                  \"formatter\": \"function(params){const targetHtml = `<div><svg width='20' height='10' style='display: inline-block'><circle cx='6' cy='5' r='4'  fill='${params.color}' /></svg><span style='margin-left: -6px; font-size: 12px; color: #fff; font-weight: bold;'>${params.name.split('&')[0]}</span><span style='display: inline-block; margin-left: 60px; margin-right: 5px;'>${params.data.ratio}<span style='margin-left: 4px;'>${params.data.value}</span></span></div>`;return (`<div style='margin-bottom: 10px;'>${params?.seriesName}</div>${targetHtml}`)}\",\n                },\n                \"color\": [\n                  \"#5BA3F6\",\n                  \"#FDD349\",\n                  \"#F8AD66\",\n                  \"#98C9FB\",\n                  \"#59BDBD\",\n                  \"#A2E168\",\n                  \"#81CA43\",\n                  \"#C89FE0\",\n                  \"#A25FC8\",\n                  \"#FA705B\",\n                  \"#FAAB9D\",\n                  \"#88D0D1\"\n                ],\n                \"legend\": {\n                  \"left\": \"53%\",\n                  \"top\": \"45%\",\n                  \"orient\": \"vertical\",\n                  \"icon\": \"circle\",\n                  \"itemWidth\": 8,\n                  \"itemHeight\": 8,\n                  \"type\": \"scroll\",\n                  \"selectedMode\": false,\n                  \"pageIconSize\": 8,\n                  \"formatter\": \"function (name) { const target = name.split('&'); return ['{title|' + target[0] + '}', '{ratio|' + target[1] + '}', '{value|' + target[2] + '}'].join('');}\",\n                  \"textStyle\": {\n                    \"rich\": {\n                      \"title\": {\n                        \"fontSize\": 12,\n                        \"width\": 18,\n                        \"color\": \"#333\",\n                        \"padding\": [0, 70, 0, 0]\n                      },\n                      \"ratio\": {\n                        \"fontSize\": 12,\n                        \"color\": \"#333\",\n                        \"align\": \"right\",\n                        \"width\": 40\n                      },\n                      \"value\": {\n                        \"fontSize\": 12,\n                        \"color\": \"#333\",\n                        \"align\": \"right\",\n                        \"width\": 61\n                      }\n                    }\n                  }\n                },\n                \"series\": [\n                  {\n                    \"name\": \"渠道占比\",\n                    \"type\": \"pie\",\n                    \"radius\": [\n                      \"40%\",\n                      \"70%\"\n                    ],\n                    \"center\": [\n                      \"33%\",\n                      \"50%\"\n                    ],\n                    \"avoidLabelOverlap\": false,\n                    \"label\": {\n                      \"show\": false\n                    },\n                    \"emphasis\": {\n                      \"disabled\": true\n                    },\n                    \"labelLine\": {\n                      \"show\": false\n                    },\n                    \"data\": \"${items}\"\n                  }\n                ]\n              },\n              \"hiddenOn\": \"${!COUNT(items)}\"\n            }, {\n              \"type\": \"image\",\n              \"name\": \"emptyImage\",\n              \"src\": \"https://sh-root-mvp1-test.shinho.net.cn/img/empty.a319be45.svg\",\n              \"thumbMode\": \"cover\",\n              \"imageCaption\": \"暂无数据\",\n              \"className\": \"amis-card-empty\",\n              \"hiddenOn\": \"${COUNT(items)}\",\n              \"style\": {\n                \"width\": \"110px\",\n                \"height\": \"110px\"\n              }\n            }]\n          }\n        }, {\n          \"type\": \"panel\",\n          \"title\": \"价格段占比\",\n           \"style\": {\n            \"width\": \"100%\"\n          },\n          \"className\": {\n            \"amis-market-capacity-flex-item\": true,\n            \"display-none\": \"${IF(!ARRAYINCLUDES(quotaChecked, 'priceParagraphRatio'), true, false)}\"\n          },\n          \"body\": {\n            \"type\": \"service\",\n            \"name\": \"priceParagraphRatio\",\n            \"id\": \"_priceParagraphRatio\",\n            \"initFetch\": false,\n            \"api\": \"https://shinhotech.github.io/amis/mock/cfc/mock/shComponent/prdcategCard.json\",\n            \"body\": [{\n              \"type\": \"chart\",\n              \"trackExpression\": \"${items|json}\",\n              \"config\": {\n                \"tooltip\": {\n                  \"trigger\": \"item\",\n                  \"borderColor\": \"transparent\",\n                  \"backgroundColor\": \"rgba(51, 51, 51, 0.9)\",\n                  \"textStyle\": {\n                    \"color\": \"#FFF\"\n                  },\n                  \"formatter\": \"function(params){const targetHtml = `<div><svg width='20' height='10' style='display: inline-block'><circle cx='6' cy='5' r='4'  fill='${params.color}' /></svg><span style='margin-left: -6px; font-size: 12px; color: #fff; font-weight: bold;'>${params.name.split('&')[0]}</span><span style='display: inline-block; margin-left: 60px; margin-right: 5px;'>${params.data.ratio}<span style='margin-left: 4px;'>${params.data.value}</span></span></div>`;return (`<div style='margin-bottom: 10px;'>${params?.seriesName}</div>${targetHtml}`)}\",\n                },\n                \"color\": [\n                  \"#5BA3F6\",\n                  \"#FDD349\",\n                  \"#F8AD66\",\n                  \"#98C9FB\",\n                  \"#59BDBD\",\n                  \"#A2E168\",\n                  \"#81CA43\",\n                  \"#C89FE0\",\n                  \"#A25FC8\",\n                  \"#FA705B\",\n                  \"#FAAB9D\",\n                  \"#88D0D1\"\n                ],\n                \"legend\": {\n                  \"left\": \"53%\",\n                  \"top\": \"35%\",\n                  \"orient\": \"vertical\",\n                  \"icon\": \"circle\",\n                  \"itemWidth\": 8,\n                  \"itemHeight\": 8,\n                  \"type\": \"scroll\",\n                  \"selectedMode\": false,\n                  \"pageIconSize\": 8,\n                  \"formatter\": \"function (name) { const target = name.split('&'); return ['{title|' + target[0] + '}', '{ratio|' + target[1] + '}', '{value|' + target[2] + '}'].join('');}\",\n                  \"textStyle\": {\n                    \"rich\": {\n                      \"title\": {\n                        \"fontSize\": 12,\n                        \"width\": 18,\n                        \"color\": \"#333\",\n                        \"padding\": [0, 70, 0, 0]\n                      },\n                      \"ratio\": {\n                        \"fontSize\": 12,\n                        \"color\": \"#333\",\n                        \"align\": \"right\",\n                        \"width\": 40\n                      },\n                      \"value\": {\n                        \"fontSize\": 12,\n                        \"color\": \"#333\",\n                        \"align\": \"right\",\n                        \"width\": 61\n                      }\n                    }\n                  }\n                },\n                \"series\": [\n                  {\n                    \"name\": \"价格段占比\",\n                    \"type\": \"pie\",\n                    \"radius\": [\n                      \"40%\",\n                      \"70%\"\n                    ],\n                    \"center\": [\n                      \"33%\",\n                      \"50%\"\n                    ],\n                    \"avoidLabelOverlap\": false,\n                    \"label\": {\n                      \"show\": false\n                    },\n                    \"emphasis\": {\n                      \"disabled\": true\n                    },\n                    \"labelLine\": {\n                      \"show\": false\n                    },\n                    \"data\": \"${items}\"\n                  }\n                ]\n              },\n              \"hiddenOn\": \"${!COUNT(items)}\"\n            }, {\n              \"type\": \"image\",\n              \"name\": \"emptyImage\",\n              \"src\": \"https://sh-root-mvp1-test.shinho.net.cn/img/empty.a319be45.svg\",\n              \"thumbMode\": \"cover\",\n              \"imageCaption\": \"暂无数据\",\n              \"className\": \"amis-card-empty\",\n              \"hiddenOn\": \"${COUNT(items)}\"\n            }]\n          }\n        }, {\n          \"type\": \"panel\",\n          \"title\": \"市场容量\",\n          \"style\": {\n            \"width\": \"100%\"\n          },\n          \"className\": {\n            \"display-none\": \"${IF(!ARRAYINCLUDES(quotaChecked, 'marketCapacityBar'), true, false)}\"\n          },\n          \"body\": {\n            \"type\": \"service\",\n            \"name\": \"marketCapacityBar\",\n            \"id\": \"_marketCapacityBar\",\n            \"initFetch\": false,\n            \"api\": \"https://shinhotech.github.io/amis/mock/cfc/mock/shComponent/marketCapacityBar.json\",\n            \"body\": [{\n              \"type\": \"chart\",\n              \"trackExpression\": \"${items|json}\",\n              \"config\": {\n                \"tooltip\": {\n                  \"trigger\": \"axis\",\n                  \"borderColor\": \"transparent\",\n                  \"backgroundColor\": \"rgba(51, 51, 51, 0.9)\",\n                  \"textStyle\": {\n                    \"color\": \"#fff\"\n                  },\n                  \"axisPointer\": {\n                    \"type\": \"shadow\",\n                    \"show\": true,\n                    \"shadowStyle\": {\n                      \"shadowColor\": \"rgba(0, 0, 0, 0.1)\"\n                    }\n                  },\n                  \"formatter\": \"function (paramArr) {const params = paramArr?.[0] || {};const targetHtml = `<div><svg width='20' height='10' style='display: inline-block'><circle cx='6' cy='5' r='4'  fill='${params.color}' /></svg><span style='margin-left: -6px; font-size: 12px; color: #fff; font-weight: bold;'>${params.seriesName}</span><span style='display: inline-block; margin-left: 60px; margin-right: 5px;'><span style='margin-left: 4px;'>${params.value}</span></span></div>`;return (`<div style='margin-bottom: 10px;'>${params?.name}</div>${targetHtml}`)}\",\n                },\n                \"dataZoom\": {\n                  \"type\": \"slider\",\n                  \"bottom\": 20,\n                  \"height\": 20\n                },\n                \"legend\": {\n                  \"bottom\": 40,\n                  \"icon\": \"circle\",\n                  \"itemWidth\": 8,\n                  \"itemHeight\": 8,\n                },\n                \"grid\": {\n                  \"left\": 0,\n                  \"right\": 0,\n                  \"top\": 30,\n                  \"bottom\": 70,\n                  \"containLabel\": true\n                },\n                \"xAxis\": {\n                  \"type\": \"category\",\n                  \"data\": \"${xAxisData}\",\n                  \"axisLine\": {\n                    \"show\": true,\n                    \"onZero\": false,\n                    \"lineStyle\": {\n                      \"color\": \"#E6E6E6\"\n                    }\n                  },\n                  \"axisTick\": {\n                    \"show\": false\n                  },\n                  \"axisLabel\": {\n                    \"color\": \"#333\"\n                  }\n                },\n                \"yAxis\": [\n                  {\n                    \"type\": \"value\",\n                    \"name\": \"万元\",\n                    \"axisLabel\": {\n                      \"color\": \"#333\"\n                    },\n                    \"axisLine\": {\n                      \"show\": true,\n                      \"lineStyle\": {\n                        \"color\": \"#E6E6E6\"\n                      }\n                    },\n                    \"axisTick\": {\n                      \"show\": false\n                    },\n                    \"splitLine\": {\n                      \"lineStyle\": {\n                        \"type\": \"dashed\",\n                        \"color\": [\n                          \"#E6E6E6\"\n                        ]\n                      }\n                    },\n                    \"nameTextStyle\": {\n                      \"fontFamily\": \"PingFang SC\",\n                      \"fontSize\": 12,\n                      \"color\": \"#999\",\n                      \"align\": \"right\",\n                      \"padding\": [\n                        0,\n                        0,\n                        0,\n                        0\n                      ]\n                    }\n                  }\n                ],\n                \"series\": \"${items}\"\n              },\n              \"hiddenOn\": \"${IF(COUNT(items), false, true)}\"\n            }, {\n              \"type\": \"image\",\n              \"name\": \"emptyImage\",\n              \"src\": \"https://sh-root-mvp1-test.shinho.net.cn/img/empty.a319be45.svg\",\n              \"thumbMode\": \"cover\",\n              \"imageCaption\": \"暂无数据\",\n              \"className\": \"amis-card-empty\",\n              \"hiddenOn\": \"${COUNT(items)}\"\n            }]\n          }\n        }]\n      }\n    ]\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F\" href=\"#%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>页面样式</h2><pre><code class=\"language-css\"><span class=\"token comment\">/* echarts page 可视化卡片样式设置 */</span>\n<span class=\"token selector\">.display-none</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token comment\">/* 按钮 */</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Button.cxd-Button--size-default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 28px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 12px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> 4px 18px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Button.cxd-Button--default:not(:disabled):not(.is-disabled)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> #eee<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Button.cxd-Button--default:not(:disabled):not(.is-disabled):hover</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> #fafafa<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> #eee<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #333<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Button.cxd-Button--danger:not(:disabled):not(.is-disabled):hover, .cxd-Button.cxd-Button--primary:not(:disabled):not(.is-disabled):hover</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> #F0513E<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> #F0513E<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #fff<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Form .cxd-ButtonToolbar > .cxd-Button</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> 10px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">/* select 下拉 */</span>\n<span class=\"token selector\">.amis-charts-page .cxd-SelectControl</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 164px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 28px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-SelectControl .cxd-Select</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> 2px 12px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 12px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> 28px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-SelectControl .cxd-Select--multi .cxd-Select-valueWrap .cxd-Select-placeholder</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> 0<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Select-valueIcon</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block <span class=\"token important\">!important</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Checkbox > i + span</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> middle<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-Select-arrow svg.icon</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #ccc<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">/* 级联 */</span>\n<span class=\"token selector\">.amis-charts-page .cxd-NestedSelectControl</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 184px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 28px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-NestedSelectControl .cxd-NestedSelect-noResult</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 184px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .cxd-NestedSelectControl .cxd-ResultBox</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 12px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> 2px 12px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> 28px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">/* 概览卡片 */</span>\n<span class=\"token selector\">.amis-charts-page .overview-item-title</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #999<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 12px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .overview-item-data</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #f0513e<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-weight</span><span class=\"token punctuation\">:</span> 600<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> 15px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .overview-item-data .unit</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 12px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\">.amis-charts-page .amis-market-capacity-flex-item</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> 248px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .market-capacity-overview</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding-bottom</span><span class=\"token punctuation\">:</span> 10px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.amis-charts-page .amis-market-capacity-flex-item .cxd-Panel-body</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> 260px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">/* 自定义指标 多选 */</span>\n<span class=\"token selector\">.cxd-CheckboxesControl.is-inline .cxd-Checkbox</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> block <span class=\"token important\">!important</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token comment\">/** 空态图片 */</span>\n<span class=\"token selector\">.cxd-ImageField .cxd-Image</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #999<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.cxd-ImageField .cxd-Image--thumb .cxd-Image-thumb</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">transform</span><span class=\"token punctuation\">:</span> <span class=\"token function\">translate</span><span class=\"token punctuation\">(</span>-50%<span class=\"token punctuation\">,</span> 0<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> 50%<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 110px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 110px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\">.cxd-ImageField .cxd-Image--thumb .cxd-Image-info</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> 100%<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\">.cxd-ImageField.amis-card-empty</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> flex<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">flex-wrap</span><span class=\"token punctuation\">:</span> wrap<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">justify-content</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transform</span><span class=\"token punctuation\">:</span> <span class=\"token function\">translate</span><span class=\"token punctuation\">(</span>-55px<span class=\"token punctuation\">,</span> 40px<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> 50%<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "图表可视化",
          "fragment": "%E5%9B%BE%E8%A1%A8%E5%8F%AF%E8%A7%86%E5%8C%96",
          "fullPath": "#%E5%9B%BE%E8%A1%A8%E5%8F%AF%E8%A7%86%E5%8C%96",
          "level": 2
        },
        {
          "label": "页面样式",
          "fragment": "%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F",
          "fullPath": "#%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});