<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Triangular Number Sequence</h2>

<h3 align="center">Problem</h3>

<p>Write a function that returns the number of dots when given its corresponding triangle number of the sequence.</p>

<h3 align="center">Info</h3>

<p>This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:</p>

<blockquote>
  1, 3, 6, 10, 15
</blockquote>

<p>This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.</p>

<blockquote>
  <code>triangle(1) ➞ 1</code>

  <code>triangle(6) ➞ 21</code>

  <code>triangle(215) ➞ 23220</code>
</blockquote>

<p>So the sequence formed here is in the pattern: <code>1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4</code>,  and so on.</p>

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
triangle(1) // 1
triangle(2) // 3
triangle(3) // 6
triangle(8) // 36
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)