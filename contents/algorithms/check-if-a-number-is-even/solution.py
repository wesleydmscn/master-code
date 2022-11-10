def isEven(integer: int) -> int:
  return integer % 2 == 0

test_cases = {
  "case 1": isEven(2),
  "case 2": isEven(5),
  "case 3": isEven(-8),
  "case 4": isEven(-15),
}

print(test_cases)