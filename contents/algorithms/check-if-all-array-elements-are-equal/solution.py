def checkAllArrayElementsEqual(array):
  if (array.count(array[0]) == len(array)):
    return True
  else:
    return False

test_cases = {
  "case 1": checkAllArrayElementsEqual([True, True, True, True]),
  "case 2": checkAllArrayElementsEqual(['test', 'test', 'test']),
  "case 3": checkAllArrayElementsEqual([1,1,1,2]),
  "case 4": checkAllArrayElementsEqual(['10',10,10,10]),
}

print(test_cases)