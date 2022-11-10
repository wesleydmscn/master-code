<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>A list (JS)</h2>

<h3 align="center">Problem</h3>

<p>Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.</p>

<h3 align="center">Info</h3>

<p>Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.</p>

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
arrayToList([10, 20]);
// → { value: 10, rest: { value: 20, rest: null} }
listToArray(arrayToList([10, 20, 30]));
// → [10, 20, 30]
prepend(10, prepend(20, null));
// → { value: 10, rest: { value: 20, rest: null} }
nth(arrayToList([10, 20, 30]), 1);
// → 20
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)