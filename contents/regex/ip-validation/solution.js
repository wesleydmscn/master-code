const regExp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

const isValidIP = (str, reg) => reg.test(str);

const test_cases = {
  "case 1": isValidIP("0.0.0.0", regExp),
  "case 2": isValidIP("12.255.56.1", regExp),
  "case 3": isValidIP("123.456.789.0", regExp),
  "case 4": isValidIP("12.34.56", regExp),
}

console.log(test_cases);