function evenFibonacci(maxValue) {
  const sequence = [];

  for (let x = 0; x < maxValue; x++) {
    if (sequence.length < 2) sequence.push(x);
    else sequence.push(sequence[x - 1] + sequence[x - 2]);
  }

  const filtredNumbers = sequence.filter(number => number <= maxValue);
  const evenValues = filtredNumbers.filter(eachNumber => eachNumber % 2 === 0);
  const sumEvenValues = evenValues.reduce((previous, next) => previous + next);

  return sumEvenValues;
}

const test_cases = {
  "case 1": evenFibonacci(40),
  "case 2": evenFibonacci(30),
  "case 3": evenFibonacci(20),
  "case 4": evenFibonacci(10),
}

console.log(test_cases);