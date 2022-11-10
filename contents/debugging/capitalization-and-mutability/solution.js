const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

const test_cases = {
  "case 1": capitalizeWord('word'),
  "case 2": capitalizeWord('i'),
  "case 3": capitalizeWord('glasswear'),
  "case 4": capitalizeWord('hello'),
}

console.log(test_cases);