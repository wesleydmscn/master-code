<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Reversing an Array</h2>

<h3 align="center">Problem</h3>

<p>Write two functions, <code>reverseArray</code> and <code>reverseArrayInPlace</code>. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.</p>

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
reverseArray(["A", "B", "C"]) // ["C", "B", "A"]

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue); // [5, 4, 3, 2, 1]
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)