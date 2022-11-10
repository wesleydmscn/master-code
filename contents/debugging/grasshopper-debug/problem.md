<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Grasshopper - Debug</h2>

<h3 align="center">Problem</h3>

<p>Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs. Find the errors in the code to get the celsius converter working properly. To convert fahrenheit to celsius:</p>

<p>Formula:</p>

```md
celsius = (fahrenheit - 32) * (5/9)
```
<p>Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.</p>

<p>Code with bugs:</p>

```js
function weatherInfo (temp) {
  var c : convert(temp)
  if (c > 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (tempertur) - 32 + (5/9)
  return temperature
}
```

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
weatherInfo(50) // "10 is above freezing temperature"
weatherInfo(23) // "-5 is freezing temperature"
weatherInfo(32) // "0 is above freezing temperature"
weatherInfo(10) // "-12.222222222222223 is freezing temperature"
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)