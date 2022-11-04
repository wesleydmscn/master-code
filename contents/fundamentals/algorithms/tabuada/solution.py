def tabuada(integer: int):
  if (integer <= 0 or integer > 10):
    return print("Error, number must be between 1 and 10.")

  for x in range(1, 11):
    print(f"{integer} x {x} = {integer * x}")

test_cases = {
  "case 1": tabuada(10),
}