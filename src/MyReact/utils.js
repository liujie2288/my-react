function type(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, "");
}

export function isFunction(obj) {
  return type(obj) === "Function";
}
