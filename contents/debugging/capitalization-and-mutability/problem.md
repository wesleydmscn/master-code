<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Capitalization and Mutability</h2>

<h3 align="center">Problem</h3>

<p>Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.</p>

<p>Your co-worker's code:</p>

```js
function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}
```

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
capitalizeWord('word') // "Word"
capitalizeWord('i') // "I"
capitalizeWord('glasswear') // "Glasswear"
capitalizeWord('hello') // "Hello"
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)