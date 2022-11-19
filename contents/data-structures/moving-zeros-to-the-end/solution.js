function moveZeros(arr) {
  return arr
          .filter(item => item !== 0)
          .concat(arr.filter(item => item === 0));
}