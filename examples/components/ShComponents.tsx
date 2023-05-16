import React from 'react';
import {Switch} from 'react-router-dom';
import {navigations2route} from './App';
import makeMarkdownRenderer from './MdRenderer';
function wrapDoc(doc: any) {
  return {
    default: makeMarkdownRenderer(doc)
  };
}

export const shComponents = [
  {
    label: '开发流程',
    children: [
      {
        label: '项目集成',
        path: '/zh-CN/sh-components/index',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/index.md').then(wrapDoc)
        )
      },
      {
        label: '混合开发',
        path: '/zh-CN/sh-components/develop',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/develop.md').then(wrapDoc)
        )
      }
    ]
  },
  {
    label: '重置样式',
    children: [
      {
        label: 'C4I',
        path: '/zh-CN/sh-components/c4i',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/c4iStyle.md').then(wrapDoc)
        )
      },
      {
        label: '树根',
        path: '/zh-CN/sh-components/root',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/rootStyle.md').then(wrapDoc)
        )
      }
    ]
  },
  {
    label: '表单组件',
    children: [
      {
        label: '表单查询',
        path: '/zh-CN/sh-components/forms',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/forms.md').then(wrapDoc)
        )
      }
    ]
  },
  {
    label: '图表组件',
    children: [
      {
        label: 'Echats图表',
        path: '/zh-CN/sh-components/charts',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/charts.md').then(wrapDoc)
        )
      }
    ]
  },
  {
    label: '图表页面',
    children: [
      {
        label: 'EchatsPage查询',
        path: '/zh-CN/sh-components/chartsPage',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/chartsPage.md').then(wrapDoc)
        )
      }
    ]
  }
];

export default class Components extends React.PureComponent<any> {
  componentDidMount() {
    this.props.setNavigations(shComponents, false);
  }

  componentDidUpdate(preProps: any) {
    if (this.props.location.pathname !== preProps.location.pathname) {
      this.props.setNavigations(shComponents, false);
    }
  }

  render() {
    return (
      <Switch>
        {navigations2route(shComponents, {
          theme: this.props.theme,
          classPrefix: this.props.classPrefix,
          locale: this.props.locale,
          viewMode: this.props.viewMode,
          offScreen: this.props.offScreen
        })}
        {/* {React.cloneElement(this.props.children as any, {
          ...(this.props.children as any).props,
          theme: this.props.theme,
          classPrefix: this.props.classPrefix,
          locale: this.props.locale,
          viewMode: this.props.viewMode,
          offScreen: this.props.offScreen
        })} */}
      </Switch>
    );
  }
}
