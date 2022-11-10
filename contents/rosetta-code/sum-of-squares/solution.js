const sumsq = (array) => array.reduce((acc, curr) => acc + curr**2, 0);

const test_cases = {
  "case 1": sumsq([1, 2, 3, 4, 5]),
  "case 2": sumsq([25, 32, 12, 7, 20]),
  "case 3": sumsq([38, 45, 35, 8, 13]),
  "case 4": sumsq([43, 36, 20, 34, 24]),
}

console.log(test_cases);