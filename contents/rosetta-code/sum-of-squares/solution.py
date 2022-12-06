def sum_squares(array):
  result = 0

  for int in array:
    result += int**2
  
  return result

test_cases = {
  "case 1": sum_squares([1, 2, 3, 4, 5]),
  "case 2": sum_squares([25, 32, 12, 7, 20]),
  "case 3": sum_squares([38, 45, 35, 8, 13]),
  "case 4": sum_squares([43, 36, 20, 34, 24]),
}

print(test_cases)