<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Fix My Phone Numbers!</h2>

<h3 align="center">Problem</h3>

<p>Oh thank goodness you're here! The last intern has completely ruined everything! All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!</p>

<h4>The Format:</h4>

<p>Phone numbers are stored as strings and comprised of 11 digits, eg <code>'02078834982'</code> and must always start with a <code>0</code>.</p>

<p>However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!</p>

<p>For example, <code>'02078834982'</code> has somehow become <code>'efRFS:)0207ERGQREG88349F82!'</code> and there are lots more lines that we need to check.</p>

<h4>The Task:</h4>

<p>Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. <code>'02078834982'</code> with no whitespace or special characters, else return <code>"Not a phone number"</code>.</p>

<p>Your code should pass all the test cases below:</p>

```js
isItANum("S:)0207ERGQREG88349F82!efRF)") // "02078834982"
isItANum("sjfniebienvr12312312312ehfWh") // "Not a phone number"
isItANum("0192387415456") // "Not a phone number"
isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165") // "02084564165"
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)