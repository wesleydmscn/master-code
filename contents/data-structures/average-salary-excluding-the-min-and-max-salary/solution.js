const average = function(salary) {
  const average = [];
  
  salary.map(integer => {
      const max = integer !== Math.max(...salary);
      const min = integer !== Math.min(...salary);

      if (min && max) average.push(integer);
  })

  return average.reduce((acc, curr) => acc + curr) / average.length;
};

const test_cases = {
  "case 1": average([6000,3000,1000,2000]),
  "case 2": average([1000,6000,3000]),
  "case 3": average([4000,3000,1000,2000]),
  "case 4": average([1000,2000,4000]),
}

console.log(test_cases);