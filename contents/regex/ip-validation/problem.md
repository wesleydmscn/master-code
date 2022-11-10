<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>IP Validation</h2>

<h3 align="center">Problem</h3>

<p>Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between <code>0</code> and <code>255</code>, inclusive.</p>

<h4>Valid inputs examples:</h4>

```md
Examples of valid inputs:
1.2.3.4
123.45.67.89
```

<h4>Valid inputs examples:</h4>

```md
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
```

<h4>Notes:</h4>

- Leading zeros (e.g. <code>01.02.03.04</code>) are considered invalid.
- Inputs are guaranteed to be a single string.

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
isValidIP("0.0.0.0") // true
isValidIP("12.255.56.1") // true
isValidIP("123.456.789.0") // false
isValidIP("12.34.56") // false
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)