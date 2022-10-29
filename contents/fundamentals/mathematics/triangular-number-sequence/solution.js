function triangle(n) {
  let count = 1;
  
  for (let i = 2; i <= n; i++) {
    count = count + i;
  }
    
  return count;
}

const test_cases = {
  "case 1": triangle(1),
  "case 2": triangle(2),
  "case 3": triangle(3),
  "case 4": triangle(8),
}

console.log(test_cases);