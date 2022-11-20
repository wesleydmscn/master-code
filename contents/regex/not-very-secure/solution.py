def alphanumeric(password):
    return password.isalnum()

test_cases = {
  "case 1": alphanumeric("Mazinkaiser"),
  "case 2": alphanumeric("hello world_"),
  "case 3": alphanumeric("PassW0rd"),
  "case 4": alphanumeric("     ")
}

print(test_cases)