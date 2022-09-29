function sym() {
  const args = [];

  for (let items of arguments) {
    args.push(items);
  }

  function getTwoSym(arr1, arr2) {
    const result = [];
    
    arr1.filter(item => {
      if (!arr2.includes(item)) {
        result.push(item);
      }

    });
    
    arr2.filter(item => {
      if (!arr1.includes(item)) {
        result.push(item);
      }
      
    });
    
    return result
    .filter((item, pos) => result.indexOf(item) === pos)
    .sort((a, b) => a - b);
  }

  return args.reduce(getTwoSym);
}

const test_cases = {
  "case 1": sym([1, 2, 3], [5, 2, 1, 4, 5]),
  "case 2": sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), 
  "case 3": sym(
      [3, 2, 5], 
      [2, 1, 5, 7],
      [3, 4, 6],
      [1, 2, 3],
      [5, 3, 8],
      [1]),
  "case 4": sym([])
}

console.log(test_cases);