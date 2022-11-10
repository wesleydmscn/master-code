<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Detect Pangram</h2>

<h3 align="center">Problem</h3>

<p>A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).</p>

<p>Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.</p>

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
isPangram("The quick brown fox jumps over the lazy dog.") // true
isPangram("This is not a pangram.") // false
isPangram("Crazy Frederick bought many very exquisite opal jewels.") // true
isPangram("A quivering Texas zombie fought republic linked jewelry.") // true
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)
- [Solution (Python)](./solution.py)