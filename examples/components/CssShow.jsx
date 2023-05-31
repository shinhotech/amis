/*
 * @description: 展示 and 复制 css
 * @Author: 程书丽
 * @Date: 2023-05-30
 */
import React from 'react';
import {toast} from 'amis';
import classnames from 'classnames';
import * as marked from 'marked';
import * as prism from 'prismjs';

export default class CssShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleCopy = this.handleCopy.bind(this);
    this.renderCss = this.renderCss.bind(this);
    this.handleToggle = this.handleToggle.bind(this)
  }

  state = {
    // styleTagClassName: 'myStyle-tag-' + Math.random().toString(36).substr(2, 9),
    styleShowWrapClassName: 'style-show-wrap' + Math.random().toString(36).substr(2, 9),
    isShow: true
  };

  // 样式复制功能
  handleCopy() {
    // 获取 style 标签
    // const styleTag = document.querySelector('#' + this.state.styleTagClassName);
    // 获取 style 标签中的内容
    // const styleContent = styleTag.innerHTML;

    const { code } = this.props;
    // 创建一个文本输入框
    const input = document.createElement("textarea");
    input.value = code;
    document.body.appendChild(input);

    // 选中文本输入框中的内容
    input.select();

    // 复制选中的内容到剪贴板中
    document.execCommand("copy");

    // 删除文本输入框
    document.body.removeChild(input);

    // 复制成功提示
    toast.success('样式已复制到粘贴板');
  }

  // 使用 marked 将 字符串转换为 HTML
  renderCss() {
    // 1. 获取需要转换的内容
    const markdownString = '```css\n' + this.props.code + '\n```'

    // 2. 创建 md 转换器
    const renderer = new marked.Renderer();
    // 3. 修改配置
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code, lang) {
        if (lang) {
          return prism.highlight(code, prism.languages[lang], lang);
        } else {
          return code;
        }
      }
    });
    // 4. 文本转换
    const html =  marked.marked(markdownString)

    // 5. 插入容器中
    const container= document.createElement('div');
    container.innerHTML = html;

    // 将容器元素添加到文档中
    const wrapDom = document.querySelector('#' + this.state.styleShowWrapClassName)
    wrapDom.appendChild(container);
  }

  handleToggle() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidMount() {
    this.renderCss()
  }

  render() {
    const {container, ...rest} = this.props;
    const { isShow } = this.state;
    const style = { right: '40px' }

    return (
      <div className="Playgroud Playgroud--mini">
        <a onClick={this.handleCopy} className="Playgroud-edit-btn" style={style}>
          复制 <i className="fa fa-code p-l-xs"></i>
        </a>
        <a onClick={this.handleToggle} className="Playgroud-edit-btn">
          { isShow ? '收起' : '展开'}
        </a>
        <style>{ rest.code }</style>
        <div className={classnames('style-show-wrap', { 'isShow': isShow })} id={this.state.styleShowWrapClassName}></div>
      </div>
    );
  }
}
