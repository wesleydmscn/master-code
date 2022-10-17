const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

const listToArray = (list) => {
  let array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

const prepend = (value, list) => {
  return { value, rest: list };
}

const nth = (list, n) => {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

const test_cases = {
  "case 1": arrayToList([10, 20]),
  "case 2": listToArray(arrayToList([10, 20, 30])),
  "case 3": prepend(10, prepend(20, null)),
  "case 4": nth(arrayToList([10, 20, 30]), 1),
}

console.log(test_cases);
