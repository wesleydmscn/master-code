function isIsogram(str) {
  return str
          .toLowerCase()
          .split('')
          .every((char, index, arr) => arr.indexOf(char) === index);
}

const test_cases = {
  "case 1": isIsogram('Dermatoglyphics'),
  "case 2": isIsogram('isogram'),
  "case 3": isIsogram('aba'),
  "case 4": isIsogram('moOse')
}

console.log(test_cases);