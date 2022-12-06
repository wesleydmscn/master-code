const sumStrings = (a, b) => String(BigInt(a) + BigInt(b));

const test_cases = {
  "case 1": sumStrings(100, 200),
  "case 2": sumStrings(1234567891012322, 1232949293932992),
}

console.log(test_cases);