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
    label: '表单组件',
    children: [
      {
        label: '表单筛选项',
        path: '/zh-CN/sh-components/index',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/index.md').then(wrapDoc)
        )
      }
    ]
  },
  {
    label: '图表组件',
    children: [
      {
        label: '四象限（气泡图）',
        path: '/zh-CN/sh-components/charts',
        component: React.lazy(() =>
          import('../../docs/zh-CN/sh-components/charts.md').then(wrapDoc)
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
