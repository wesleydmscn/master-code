function symmetricDifference(setA, setB) {
  const diff = [];

  for (const item of setA) {
    if (!setB.includes(item)) diff.push(item);
  }

  for (const item of setB) {
    if (!setA.includes(item)) diff.push(item);
  }

  return diff.sort();
}

const test_cases = {
  "case 1": symmetricDifference([1, 2, 3], [3, 4]),
  "case 2": symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]),
  "case 3": symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  "case 4": symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9]),
}

console.log(test_cases);