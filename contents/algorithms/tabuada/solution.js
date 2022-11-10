function tabuada(integer) {
  const table = [];

  for (let i = 1; i <= 10; i++) {  
    table.push(`${integer} x ${i} = ${integer * i}`);
  }

  return table;
}

const test_cases = {
  "case 1": tabuada(2),
  "case 2": tabuada(4),
}

console.log(test_cases);