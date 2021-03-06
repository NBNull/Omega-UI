# _includeStyle
> 为组件追加 `style` 样式，指定该组件最外层 DOM 元素增加指定的 `style` 样式。

### 作用
该属性可以为某个组件增加一个或多个自定义的 `style` 样式，通常情况下，该 `style` 样式会直接作用于组件的最外层容器中，若组件为复合类型组件，则同时支持在子组件上设置`_includeStyle` 属性。
 
### 语法
##### 调用方式
``` jsx
//_includeStyle 支持传入一个对象作为参数。
<Text _includeStyle={{
    fontSize:'20px',
    color:'#000'
}}>This is a text. </Text>
```

##### 渲染结果
``` html
<span style=""font-size:'20px';color:'#000'">
    This is a text.
</span>
```

### 注意
由于 React 的 `JSX` 行内样式具有特殊性，因此需要采用`驼峰式` 的 Key 作为样式的键值，例如：`backgroundSize`、`fontSize`、`zIndex` 等。