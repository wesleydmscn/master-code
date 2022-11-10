<p align="right">
  <a href="../home.md">< Back</a>
</p>

<h2>Deep Comparison (JS)</h2>

<h3 align="center">Problem</h3>

<p>Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.</p>

<h3 align="center">Info</h3>

<p>To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.</p>

<h3 align="center">Test cases</h3>

<p>Your code should pass all the test cases below:</p>

```js
const obj = { here: { is: "an" }, object: 2 };

deepEqual(obj, obj);
// → true
deepEqual(obj, { here: 1, object: 2 });
// → false
deepEqual(obj, { here: { is: "an" }, object: 2 });
// → true
deepEqual({ language: "ECMAScript" }, { language: "JavaScript" });
// → false
```

<h3 align="center">Solution files</h3>

- [Solution (JavaScript)](./solution.js)