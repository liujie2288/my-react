import renderElement from "./renderElement";
export default function render(virtualDom, container) {
  renderElement(virtualDom, container,container.firstChild);
}
