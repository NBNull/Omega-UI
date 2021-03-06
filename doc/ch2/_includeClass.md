# _incudeClass
> 为组件追加 `class` 修饰符，指定该组件最外层 DOM 元素增加指定的 `class` 修饰符。

### 作用
该属性可以为某个组件增加一个或多个自定义的 `class` 修饰符，通常情况下，该 `class` 修饰符会直接作用于组件的最外层容器中，若组件为复合类型组件，则同时支持在子组件上设置`_includeClass` 属性。
 
### 语法
##### 调用方式
``` jsx
<style type='text/css'>
.m-font-bold:{
    font-weight:bold;
}
.m-font-white:{
    color:'#FFF';
}
</style>
//_includeClass 支持传入一个字符串作为参数。
<Text _includeClass='m-font-bold'>This is a text. </Text>
//_includeClass 同时支持传入一个字符串数组作为参数。
<Paragraph _includeClass={['m-font-white','m-font-bold']}>This is a paragraph.</Paragraph>
```

##### 渲染结果
``` html
<!--若传入字符串，则该字符串会直接添加至 class 标签中。-->
<span class='m-font-blod'>
    This is a text.
</span>
<!--若传入数组，则数组中的每个元素依次添加至 class 标签中。-->
<p class='m-font-white m-font-bold'>
    This is a paragraph.
</p>
```