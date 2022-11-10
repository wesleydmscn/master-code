<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Get Planet Name By ID</h2>

<h3 align="center">Problem</h3>

<p>The function is not returning the correct values. Can you figure out why?
Example (Input --> Output ):</p>

<code>3 --> "Earth"</code>

<p>Code with bug:</p>

```js
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }
  
  return name;
}
```

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
getPlanetName(2) // 'Venus'
getPlanetName(5) // 'Jupiter'
getPlanetName(3) // 'Earth'
getPlanetName(4) // 'Mars'
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)