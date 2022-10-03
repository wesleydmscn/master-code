function fibonacciSequence(maxTermsValue) {
  const sequence = [0, 1];

  for (let i = 0; sequence.length < maxTermsValue; i++) {
    const nextFibonacciNumber = (sequence[i + 1]) + (sequence[i]);
    sequence.push(nextFibonacciNumber);
  }

  return sequence;
}

function evenFibonacciNumbers(sequence) {
  const evenValues = sequence.filter(eachNumber => eachNumber % 2 === 0);
  const sumOfEvenValues = evenValues.reduce((number, nextNumber) => number + nextNumber);

  return {
    "Sequence normal": sequence,
    "Even values": evenValues,
    "Sum of even values": sumOfEvenValues,
  };
}

const test_cases = {
  "case 1": evenFibonacciNumbers(fibonacciSequence(200))["Sum of even values"],
  "case 2": evenFibonacciNumbers(fibonacciSequence(150))["Sum of even values"],
  "case 3": evenFibonacciNumbers(fibonacciSequence(100))["Sum of even values"],
  "case 4": evenFibonacciNumbers(fibonacciSequence(50))["Sequence normal"],
}

console.log(test_cases);