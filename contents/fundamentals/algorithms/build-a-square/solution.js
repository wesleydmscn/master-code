const generateShape = (n) => ("+".repeat(n)+"\n").repeat(n).trim();

const test_cases = {
  "case 1": generateShape(4),
  "case 2": generateShape(3),
  "case 3": generateShape(2),
  "case 4": generateShape(1),
}

console.log(test_cases);