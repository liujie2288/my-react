import renderElement from "./renderElement";
export default function render(virtualDom, container) {
  // 注意，这里要区分是原生的html标签还是react组件
  // React组件 virtualDom 的type 都是函数
  renderElement(virtualDom, container);
}
