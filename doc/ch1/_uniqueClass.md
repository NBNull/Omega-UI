# _uniqueClass
> 为组件设置唯一 `class` 修饰符，指定该组件最外层 DOM 元素仅设置指定的 `class` 修饰符。 `_uniqueClass` 属性具有最该优先级。

### 作用
该属性可以为某个组件移除全部 `class` 修饰符，并追加该属性设置的 `class` 修饰符。通常情况下，该 `class` 修饰符会直接作用于组件的最外层容器中，若组件为复合类型组件，则同时支持在子组件上设置`_uniqueClass` 属性。
 
### 语法
##### 调用方式
``` html
<style type='text/css'>
.m-font-bold:{
    font-weight:bold;
}
.m-font-white:{
    color:'#FFF';
}
</style>
<!--_uniqueClass 支持传入一个字符串作为参数。-->
<Text _includeClass='m-font-bold' _uniqueClass='m-font-white'>This is a text. </Text>
<!--_uniqueClass 同时支持传入一个字符串数组作为参数。-->
<Paragraph _includeClass={['m-font-white','m-font-bold']} _uniqueClass={[]}>This is a paragraph.</Paragraph>
```

##### 渲染效果
``` html
<!--若传入字符串，则该字符串会直接添加至 class 标签中。-->
<span class='m-font-white'>
    This is a text.
</span>
<!--若传入数组，则数组中的每个元素依次添加至 class 标签中。-->
<p>
    This is a paragraph.
</p>
```