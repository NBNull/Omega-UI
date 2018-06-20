<p align="center">
  <a href="javascript:;" rel="noopener" target="_blank"><img width="70%" src="https://cdn.qulongjun.cn/omega/logo_blue.png" alt="Omega-UI logo"></a></p>
</p>

------

<div align="center">

 基于 [React](http://facebook.github.io/react/) 的响应式后台 UI 框架

</div>

## 安装方式

您可以使用 `NPM` 命令进行安装，命令如下：

```shell
// with npm
npm i omega-ui

```

## 用法

以下是一个组件的简单使用示例, **你只需做如下事情**:
```jsx
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//导入按钮组件
import Button from '@Button';

class App extends Component {
    render(){
        return (<Button value="Hello World" />);
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## 遇到问题

你可以使用 Github 的 [Issue](https://github.com/qulongjun/Omega-UI/issues) 功能 进行提问，我们会随时进行解答。

## 官网示例

是否正在寻找一些示例来开始您的项目? 点击 [此处](https://omega.qulongjun.com) 查看使用示例。

## 技术文档

使用过程中存在任何问题，建议浏览文档获得技术支持。点击 [此处](https://omega-doc.qulongjun.com) 查看技术文档。

## 参与项目

我们很期待您能参与进来一起开发。 :)


## License

本项目基于 MIT license 开源。