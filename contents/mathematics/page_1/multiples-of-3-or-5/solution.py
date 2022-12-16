def multiples_of_three_or_five(number):
  total = 0

  for int in range(0, number):
    if int % 3 == 0 or int % 5 == 0:
      total += int

  return total

test_cases = {
  "case 1": multiples_of_three_or_five(1000),
  "case 2": multiples_of_three_or_five(500),
  "case 3": multiples_of_three_or_five(100),
  "case 4": multiples_of_three_or_five(10)
}

print(test_cases)