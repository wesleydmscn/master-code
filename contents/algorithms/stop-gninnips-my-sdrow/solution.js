const spinWords = (string) => {
  return string.split(" ").map(word => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  }).join(" ");
}

const test_cases = {
  "case 1": spinWords("Hey fellow warriors"), 
  "case 2": spinWords("This is a test"),
  "case 3": spinWords("This is another test"),
  "case 4": spinWords("Hello World!"),
}

console.log(test_cases);