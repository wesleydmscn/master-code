<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Build a Square</h2>

<h3 align="center">Problem</h3>

<p>I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.</p>

<h4>Example</h4>

<p><code>n = 3</code>, so I expect a 3x3 square back just like below as a string:</p>

```js
+++
+++
+++
```

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
generateShape(4) // '++++\n++++\n++++\n++++'
generateShape(3) // '+++\n+++\n+++'
generateShape(2) // '++\n++'
generateShape(1) // '+'
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)