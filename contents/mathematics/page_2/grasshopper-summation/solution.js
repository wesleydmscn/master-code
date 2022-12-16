const summation = (num) => {
  return num === 1 ? 1 : num + summation(num - 1);
}

const test_cases = {
  "case 1": summation(1),
  "case 2": summation(2),
  "case 3": summation(8),
  "case 4": summation(16),
}

console.log(test_cases);