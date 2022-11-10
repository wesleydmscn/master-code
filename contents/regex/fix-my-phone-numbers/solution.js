const isItANum = (str) => {
  const string = str.replace(/[^0-9]/g, '');
  const regExp = /^0\d{10}$/;
  
  return regExp.test(string) ? string : "Not a phone number";
}

const test_cases = {
  "case 1": isItANum("S:)0207ERGQREG88349F82!efRF)"),
  "case 2": isItANum("sjfniebienvr12312312312ehfWh"),
  "case 3": isItANum("0192387415456"),
  "case 4": isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"),
}

console.log(test_cases);