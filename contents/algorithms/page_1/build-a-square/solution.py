def generate_shape(n):
  return ((('+' * n) + '\n') * n)[:-1]

test_cases = {
  "case 1": generate_shape(4),
  "case 2": generate_shape(3),
  "case 3": generate_shape(2),
  "case 4": generate_shape(1),
}

print(test_cases)