export default function createElement(type, props, ...children) {
  //  过滤布尔值以及为null的元素(React中不渲染)
  children = children.filter(
    (child) => typeof child !== "boolean" || child === null
  );
  // 处理纯文本元素，转换为对象类型（统一元素类型方便处理）
  children = children.map((child) => {
    if (typeof child === "string") {
      return createElement("text", { textContent: child });
    }
    return child;
  });
  return {
    type,
    // 每个元素下面都存在children来记录当前元素的子元素
    props: { children, ...props },
    children,
  };
}
