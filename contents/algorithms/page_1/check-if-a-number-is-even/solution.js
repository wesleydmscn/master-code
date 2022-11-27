function isEven(integer) {
  return integer % 2 === 0;
}

const test_cases = {
  "case 1": isEven(2),
  "case 2": isEven(5),
  "case 3": isEven(-8),
  "case 4": isEven(-15),
}

console.log(test_cases);