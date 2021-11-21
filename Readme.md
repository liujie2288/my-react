# MyReact

## MyReact.createElement 实现

## virtualDom 转换为真实 DOM

virtualDom 包含两种类型的元素，一种是 html 原生标签（div，span 等），一种是自定义的 React 元素（`<h1>hello,React element</h1>`），在渲染时需要区分对待。

**如何区分元素是 React 元素还是 html 原生元素呢？** 从调试`createElement`函数可以知道，`babel` 在转换 React 元素时，元素名称会被作为变量传递到`createElement`中，而 html 原生元素则将元素名称作为字符串传递到`createElement`中，因此通过判断`virtualDom.type`来区分元素类型：

```javascript
// renderElement.js 渲染元素
function(){
  if (isFunction(virtualDom.type)) {
    renderComponentElement(virtualDom, container);
  } else {
    renderNativeElement(virtualDom, container);
  }
}
```

### 将原生 html 转换为 dom

原生标签转换为 dom，只需要根据原生标签名称来创建 dom，并为其设置对应的属性，然后添加到页面中。

1. 创建元素

```javascript
// renderNativeElement.js 渲染原生html标签
import setAttribute from "./setAttribute";
function renderNativeElement() {
  let domNode;
  if (virtualDom.type !== "text") {
    // 创建元素
    const element = document.createElement(virtualDom.type);
    // 设置元素属性
    setAttribute(element, virtualDom);
    domNode = element;
  } else {
    // 创建文本节点
    const textNode = document.createTextNode(virtualDom.props.textContent);
    domNode = textNode;
  }
  // 递归处理子元素
  virtualDom.children.forEach((child) => {
    render(child, domNode);
  });
  // 添加元素
  container.appendChild(domNode);
}
```

2. 为元素设置属性

```javascript
// setAttribute.js 设置元素属性
function setAttribute(element, virtualDom) {
  Object.keys(virtualDom.props).forEach((propName) => {
    const propValue = virtualDom.props[propName];
    // 单独处理事件
    if (propName.startsWith("on")) {
      const eventName = propName.toLowerCase().slice(2);
      element.addEventListener(eventName, propValue);
    } else if (["value", "checked"].includes(propName)) {
      // 单独checked，value属性
      element[propName] = propValue;
    } else if (propName !== "children") {
      if (propName === "className") {
        propName = "class";
      }
      // 兜底处理
      element.setAttribute(propName, propValue);
    }
  });
}
```

### 将 React 元素 转换为 dom

React 元素分为两种类型：类组件和函数组件。他们虽然在书写形式上有区别，但是实质都是吐出 virtualDom。

类组件和函数组件渲染有一些区别，所以需要区分开分别渲染，可通过类组件的原型对象上的`render`方法来区分。

函数组件渲染只需要调用函数，并传递属性。类组件则通过`new`实例化组件后，调用`render`方法。

```javascript
// renderComponentElement.js  渲染函数组件和类组件
import renderElement from "./renderElement";
// 渲染React元素
function renderComponentElement(virtualDom, container) {
  // React元素有两种形式： function组件 、  class组件
  // function组件直接调用，返回值为新的virtualDom
  // class组件需要先实例化，在调用实例的render方法
  const component = virtualDom.type;
  const componentProps = virtualDom.props || {};
  if (component.prototype?.render) {
    // 类组件
    const instance = new component(componentProps);
    renderElement(instance.render(), container);
  } else {
    const newVirturalDom = component(componentProps);
    // 函数组件中仍然可能存在组件的渲染，需要调用上层渲染函数渲染
    renderElement(newVirturalDom, container);
  }
}
```

Q&A: react 组件内部如何渲染 props 属性值？

在 react 编译时，会将组件内部使用的属性传递到`createElement`中，比如：

```javascript
function Test(props) {
  return <div>hello , {props.name}</div>;
}
MyReact.render(<Test name="react">)
```

编译后:

```javascript
function Test(props) {
  return MyReact.createElement("div", null, props.name);
}

MyReact.render(MyReact.createElement(Test, { name: react }));
```

传递到`createElement`中的表达式(`props.name`)已经是一个确定好了的值，所以`createElement`会根据具体值来创建对应的文本节点。
