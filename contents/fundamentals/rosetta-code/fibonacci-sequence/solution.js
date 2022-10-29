function fibonacci(n) {
  const sequence = [];

  for (let i = 0; i <= n; i++) {
    if (sequence.length < 2) sequence.push(i);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[sequence.length - 1];
}

const test_cases = {
  "case 1": fibonacci(2),
  "case 2": fibonacci(3),
  "case 3": fibonacci(5),
  "case 4": fibonacci(10),
}

console.log(test_cases);