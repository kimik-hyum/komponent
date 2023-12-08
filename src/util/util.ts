function isFunctionChild<T, C>(
  child: T | ((context: C) => T)
): child is (context: C) => T {
  return typeof child === "function";
}
export { isFunctionChild };
