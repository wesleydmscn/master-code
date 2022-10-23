function isPangram(phrase) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return alphabet
            .split("")
            .every(letter => phrase.toLowerCase().includes(letter));
}

const test_cases = {
  "case 1": isPangram("The quick brown fox jumps over the lazy dog."),
  "case 2": isPangram("This is not a pangram."),
  "case 3": isPangram("Crazy Frederick bought many very exquisite opal jewels."),
  "case 4": isPangram("A quivering Texas zombie fought republic linked jewelry."),
}

console.log(test_cases);