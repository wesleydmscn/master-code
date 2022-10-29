function fizzBuzz() {
  const results = [];

  for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) results.push("FizzBuzz");
    else if (n % 3 === 0) results.push("Fizz");
    else if (n % 5 === 0) results.push("Buzz");
    else results.push(n);
  }

  return results;
}

const test_cases = {
  "case 1": fizzBuzz(),
}

console.log(test_cases);