import renderElement from "./renderElement";
import setAttribute from "./setAttribute";
// 渲染原生html元素
export default function renderNativeElement(virtualDom, container, oldDom) {
  let domElement;
  if (virtualDom.type !== "text") {
    // 创建元素
    const element = document.createElement(virtualDom.type);
    // 添加属性
    setAttribute(element, virtualDom);
    domElement = element;
  } else {
    // 创建文本节点
    const textNode = document.createTextNode(virtualDom.props.textContent);
    domElement = textNode;
  }

  // 递归处理子元素
  virtualDom.children.forEach((child) => {
    renderElement(child, domElement);
  });

  container.appendChild(domElement);
}
