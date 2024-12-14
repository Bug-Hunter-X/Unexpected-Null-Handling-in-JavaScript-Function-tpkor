function foo(a, b) {
  // Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null; // Return null if inputs aren't numbers
  }

  // Handle null or undefined values by using the || operator and providing a default value.
  a = a || 0; // If 'a' is null or undefined, use 0 as a default value.
  b = b || 0; // If 'b' is null or undefined, use 0 as a default value.

  return a + b;
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(undefined, 5)); //Output: 5
console.log(foo(null, undefined)); //Output: 0