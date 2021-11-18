# MyReact

## MyReact.createElement 实现

## virtualDom 转换为真实 DOM

1. 创建元素

```javascript
let domNode;
  if (virtualDom.type !== "text") {
    // 创建元素
    const element = document.createElement(virtualDom.type);
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
```

2. 为元素设置属性

```javascript
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
```
