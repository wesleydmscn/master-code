def timesCharOccursString(string: str, char: str) -> int:
  return len(string.lower().split(char)) - 1

test_cases = {
  "case 1": timesCharOccursString("Nemesis", "s"),
  "case 2": timesCharOccursString("Zero Kamikaze Squirrel", "k"),
  "case 3": timesCharOccursString("The Legend of Zelda", "l"),
  "case 4": timesCharOccursString("Super Metroid", "e"),
}

print(test_cases)