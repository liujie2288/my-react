import { isFunction } from "./utils";
import renderNativeElement from "./renderNativeElement";
import renderComponentElement from "./renderComponentElement";
export default function renderElement(virtualDom, container, oldDom) {
  // 注意，这里要区分是原生的html标签还是react组件
  // React组件 virtualDom 的type 都是函数
  if (isFunction(virtualDom.type)) {
    renderComponentElement(virtualDom, container, oldDom);
  } else {
    renderNativeElement(virtualDom, container, oldDom);
  }
}
