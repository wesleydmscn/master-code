[<p align="right">< Back</p>](../home.md)

<h2>Find the Symmetric Difference</h2>

<h3 align="center">Problem</h3>

<p>Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).</p>

<h3 align="center">Info</h3>

<p>The mathematical term symmetric difference ( △ or ⊕ ) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets <code>A = {1, 2, 3}</code> and <code>B = {2, 3, 4}</code>.</p>

```js
  // Result: A △ B = {1, 4}
```

<p>Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements <code>(A △ B △ C)</code>, you must complete one operation at a time.</p>

<p>Thus, for sets <code>A = {1, 2, 3}</code> and <code>B = {2, 3, 4}</code> above, and <code>C = {2, 3}</code>:</p>

```js
    // A △ B △ C = (A △ B) △ C 

    // Result: AB {1, 4} △ C {2, 3} = {1, 2, 3, 4}
```

<p>For more tips and informations, below are some links:</p>

- [Wikipedia - Symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
- [Byjus - Difference of sets](https://byjus.com/maths/difference-of-sets/)

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
  sym([1, 2, 3], [5, 2, 1, 4, 5]) // [3, 4, 5]
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) // [2, 3, 4, 6, 7]

  sym(
    [3, 2, 5], 
    [2, 1, 5, 7],
    [3, 4, 6],
    [1, 2, 3],
    [5, 3, 8],
    [1])
    // [1, 2, 4, 5, 6, 7, 8]

  sym([]) // []
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)