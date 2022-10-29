<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Is this my tail?</h2>

<h3 align="center">Problem</h3>

<p>Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!</p>

<p>If the tail is right return true, else return false. The arguments will always be non empty strings, and normal letters.</p>

<p>Code with bugs:</p>

```js
function correctTail(bod, tail ;
  
  sub = body.substr(bodylength-(tail.length)
  
  if sub = tail) ;
    return true
  }
  else 
    return false
```

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
correctTail("Fox", "x") // true
correctTail("Rhino", "o") // true
correctTail("Meerkat", "t") // true
correctTail("Lion", "z") // false
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)