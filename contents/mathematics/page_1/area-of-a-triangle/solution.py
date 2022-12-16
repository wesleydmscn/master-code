def triArea(base: int, height: int) -> int:
  return int((base * height) / 2)

test_cases = {
  'case 1': triArea(3, 2),
  'case 2': triArea(5, 4),
  'case 3': triArea(10, 10),
  'case 4': triArea(12, 11)
}

print(test_cases)