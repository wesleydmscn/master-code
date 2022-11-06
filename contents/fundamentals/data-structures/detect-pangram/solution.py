import string

def isPangram(string: str) -> bool:
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  result = []

  for letter in alphabet:
    if (letter in string.lower()):
      result.append(letter)

  return len(result) == 26

test_cases = {
  "case 1": isPangram("The quick brown fox jumps over the lazy dog."),
  "case 2": isPangram("This is not a pangram."),
  "case 3": isPangram("Crazy Frederick bought many very exquisite opal jewels."),
  "case 4": isPangram("A quivering Texas zombie fought republic linked jewelry.")
}

print(test_cases)