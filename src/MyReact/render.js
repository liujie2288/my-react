export default function render(virtualDom, container) {
  // 注意，这里要区分是原生的html标签还是react组件

  let domNode;
  if (virtualDom.type !== "text") {
    // 创建元素
    const element = document.createElement(virtualDom.type);
    // 添加属性
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
