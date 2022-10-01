function timesCharOccursString(string, char) {
  return string
          .toLowerCase()
          .split(char).length - 1;
}

const test_cases = {
  "case 1": timesCharOccursString("Nemesis", "s"),
  "case 2": timesCharOccursString("Zero Kamikaze Squirrel", "k"),
  "case 3": timesCharOccursString("The Legend of Zelda", "l"),
  "case 4": timesCharOccursString("Super Metroid", "e"),
}

console.log(test_cases);