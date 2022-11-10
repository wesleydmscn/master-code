const correctTail = (bod, tail) => bod[bod.length - 1] === tail;

const test_cases = {
  "case 1": correctTail("Fox", "x"),
  "case 2": correctTail("Rhino", "o"),
  "case 3": correctTail("Meerkat", "t"),
  "case 4": correctTail("Lion", "z"),
}

console.log(test_cases);