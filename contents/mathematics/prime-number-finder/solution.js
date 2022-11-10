function primeFinder(integer) {
  const result = [];

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  };

  for (let i = 0; i <= integer; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

const test_cases = {
  "case 1": primeFinder(11),
  "case 2": primeFinder(16),
  "case 3": primeFinder(20),
  "case 4": primeFinder(24),
}

console.log(test_cases);