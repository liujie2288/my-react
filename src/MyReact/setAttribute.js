export default function setAttribute(element, virtualDom) {
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
}
