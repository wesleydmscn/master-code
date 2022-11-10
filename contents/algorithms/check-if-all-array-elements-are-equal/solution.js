function checkAllArrayElementsEqual(arr) {
  return arr.every(item => item === arr[0]);
}

const test_cases = {
  "case 1": checkAllArrayElementsEqual([true, true, true, true]),
  "case 2": checkAllArrayElementsEqual(['test', 'test', 'test']),
  "case 3": checkAllArrayElementsEqual([1,1,1,2]),
  "case 4": checkAllArrayElementsEqual(['10',10,10,10]),
}

console.log(test_cases);