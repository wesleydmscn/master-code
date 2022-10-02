function multiplesOfThreeOrFive(number) {
  let total = 0;

  for (let n = 1; n < number; n++) {
    if (n % 3 === 0 || n % 5 === 0) total += n;
  }

  return total;
}

const test_cases = {
  "case 1": multiplesOfThreeOrFive(1000),
  "case 2": multiplesOfThreeOrFive(500),
  "case 3": multiplesOfThreeOrFive(100),
  "case 4": multiplesOfThreeOrFive(10)
}

console.log(test_cases);