function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

const test_cases = {
  "case 1": solution([1,2,3,10,5]),
  "case 2": solution(null),
  "case 3": solution([]),
  "case 4": solution([20, 2, 10])
}

console.log(test_cases);