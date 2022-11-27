def aVeryBigSum(integers) :
  total = 0

  for integer in integers:
    total += integer
  
  return total

test_cases = {
  "case 1": aVeryBigSum([2, 3, 5]),
  "case 2": aVeryBigSum([200, 160, 140, 70]),
  "case 3": aVeryBigSum([314560239, 3314560239, 5314560239]),
  "case 4": aVeryBigSum([])
}

print(test_cases)