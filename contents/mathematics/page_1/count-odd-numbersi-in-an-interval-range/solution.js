const countOdds = function(low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) count++;
  }

  return count;
};

const test_cases = {
  "case 1": countOdds(3, 7),
  "case 2": countOdds(8, 10),
  "case 3": countOdds(1, 9),
  "case 4": countOdds(3, 16),
}

console.log(test_cases);