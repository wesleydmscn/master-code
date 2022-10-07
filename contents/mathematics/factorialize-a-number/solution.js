function factorialize(integer) {
  const factorial = [];

  if (integer <= 0) integer = 1;

  for (let i = 0; i < integer; i++) {
    factorial.push(integer - i);
  }

  return factorial.reduce((previous, next) => previous * next);
}

const test_cases = {
  "case 1": factorialize(5),
  "case 2": factorialize(10),
  "case 3": factorialize(20),
  "case 4": factorialize(0)
}

console.log(test_cases);