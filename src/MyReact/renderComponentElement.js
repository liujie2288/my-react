import renderElement from "./renderElement";
// 渲染React元素
export default function renderComponentElement(virtualDom, container, oldDom) {
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
