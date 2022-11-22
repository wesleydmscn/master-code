function moveZeros(arr) {
  return arr
          .filter(item => item !== 0)
          .concat(arr.filter(item => item === 0));
}

const test_cases = {
  "case 1": moveZeros([1,2,0,1,0,1,0,3,0,1]),
  "case 2": moveZeros([1,2,2,1,0,1,0,3,0,1]),
  "case 3": moveZeros([1,2,0,1,3,1,0,3,0,1]),
  "case 4": moveZeros([1,2,0,1,5,1,0,3,0,1])
}

console.log(test_cases);