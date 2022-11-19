function solution(nums){
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}