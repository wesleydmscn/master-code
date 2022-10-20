function getSumOfDigits(integer) {
  const digits = integer.toString().split("").join("+");
  return eval(digits);
}

const test_cases = {
  "case 1": getSumOfDigits(123),
  "case 2": getSumOfDigits(223),
  "case 3": getSumOfDigits(1337),
  "case 4": getSumOfDigits(1339),
}

console.log(test_cases);