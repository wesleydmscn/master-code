function reverseArray(array) {
  const reversedArray = [];

  for (const item of array) {
    reversedArray.unshift(item);
  }

  return reversedArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    const old = array[i];

    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }

  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

const test_cases = {
  "case 1": reverseArray(["A", "B", "C"]),
  "case 2": arrayValue,
}

console.log(test_cases);