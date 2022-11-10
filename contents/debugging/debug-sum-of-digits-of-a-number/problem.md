<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Debug Sum of Digits of a Number</h2>

<h3 align="center">Problem</h3>

<p>Debug function <code>getSumOfDigits</code> that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.</p>

<p>Exemple:</p>

```md
123  => 6
223  => 7
1337 => 14
```

<p>Code with bugs:</p>

```js
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}
```

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
getSumOfDigits(123) // 6
getSumOfDigits(223) // 7
getSumOfDigits(1337) // 14
getSumOfDigits(1339) // 16
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)