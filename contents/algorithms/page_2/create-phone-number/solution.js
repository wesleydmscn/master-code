function createPhoneNumber(numbers) {
  let pattern = "(xxx) xxx-xxxx";
  
  for (const int of numbers) {
    pattern = pattern.replace('x', int);
  }
  
  return pattern;
}

const test_cases = {
  "case 1": createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "case 2": createPhoneNumber([1, 2, 2, 2, 2, 2, 2, 2, 2, 1]),
  "case 3": createPhoneNumber([1, 3, 3, 4, 4, 5, 5, 6, 6, 1]),
  "case 4": createPhoneNumber([1, 8, 8, 8, 8, 2, 2, 2, 2, 1]),
}

console.log(test_cases);