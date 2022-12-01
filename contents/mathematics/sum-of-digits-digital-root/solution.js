function digitalRoot(n) {
  const numbers = String(n).split('');
  const response = String(numbers.reduce(sumTwo));

  function sumTwo(a, b = 0) {
    return (+a) + (+b);
  }

  return response.length > 1 ? digitalRoot(response) : +response;
}

const test_cases = {
  "case 1": digitalRoot(16),
  "case 2": digitalRoot(456),
  "case 3": digitalRoot(413812),
  "case 4": digitalRoot(999999999999),
}

console.log(test_cases);