<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Simple validation of a username</h2>

<h3 align="center">Problem</h3>

<p>Write a simple regex to validate a username. Allowed characters are:</p>

- lowercase letters,
- numbers,
- underscore

<p>Length should be between 4 and 16 characters (both included).</p>

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
validateUsr("asd43_34") // true
validateUsr("Hasd_12assssssasasasasasaasasasasas") // false
validateUsr("____") // true
validateUsr("") // false
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)