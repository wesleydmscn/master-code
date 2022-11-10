const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, curr) => acc + curr);

const test_cases = {
  "case 1": arrayPlusArray([1, 2, 3], [4, 5, 6]),
  "case 2": arrayPlusArray([-1, -2, -3], [-4, -5, -6]),
  "case 3": arrayPlusArray([0, 0, 0], [4, 5, 6]),
  "case 4": arrayPlusArray([100, 200, 300], [400, 500, 600]),
}

console.log(test_cases);