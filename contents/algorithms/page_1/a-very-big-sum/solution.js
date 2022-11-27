function aVeryBigSum(integers) {
  return integers.reduce((acc, curr) => acc + curr, 0);
}

const test_cases = {
  "case 1": aVeryBigSum([2, 3, 5]),
  "case 2": aVeryBigSum([200, 160, 140, 70]),
  "case 3": aVeryBigSum([314560239, 3314560239, 5314560239]),
  "case 4": aVeryBigSum([])
}

console.log(test_cases);