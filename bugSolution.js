function foo(a, b) {
  // Handle null or undefined values using short-circuiting
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;
  return a + b; //perform addition
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 20
console.log(foo(10, null)); // Output: 10
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 20)); // Output: 20
console.log(foo(10, undefined)); // Output: 10