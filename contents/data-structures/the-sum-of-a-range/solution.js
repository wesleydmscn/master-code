function range(start, end) {
  const array = [];

  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  
  return array;
}

function sum(array) {
  let total = 0;
  
  for (const value of array) {
    total += value;
  }

  return total;
}

const test_cases = {
  "case 1": range(1, 4),
  "case 2": sum(range(1, 4)),
  "case 3": range(),
  "case 4": sum(range()),
}

console.log(test_cases);