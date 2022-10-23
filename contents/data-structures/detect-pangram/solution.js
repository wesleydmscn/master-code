function isPangram(phrase) {
  const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  ];

  const phraseSplitted = phrase.toUpperCase().split("");
  const result = [];

  phraseSplitted.map(letter => {
    if (alphabet.includes(letter)) result.push(letter);
  })

  return result.filter((prev, pos) => result.indexOf(prev) === pos).sort().length === 26;
}

const test_cases = {
  "case 1": isPangram("The quick brown fox jumps over the lazy dog."),
  "case 2": isPangram("This is not a pangram."),
  "case 3": isPangram("Crazy Frederick bought many very exquisite opal jewels."),
  "case 4": isPangram("A quivering Texas zombie fought republic linked jewelry."),
}

console.log(test_cases);