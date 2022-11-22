function invert(array) {
  return array.map(item => item === 0 ? -0 : item - (item * 2));
}

const test_cases = {
  "case 1": invert([1,2,3,4,5]),
  "case 2": invert([1,-2,3,-4,5]),
  "case 3": invert([])
}

console.log(test_cases);