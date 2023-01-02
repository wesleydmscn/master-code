function smaller(nums) {  
  return nums.map((num, index) => {
    return nums.slice(index).filter(int => int < num).length;
  })
}

const test_cases = {
  "case 1": smaller([5, 4, 3, 2, 1]),
  "case 2": smaller([1, 2, 3]),
  "case 3": smaller([1, 2, 0]),
  "case 4": smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]),
}

console.log(test_cases);