import re

def validate_usr(username):
  if re.match(r'^[a-z0-9_]{4,16}$', username):
    return True

  return False

test_cases = {
  "case 1": validate_usr("asd43_34"),
  "case 2": validate_usr("Hasd_12assssssasasasasasaasasasasas"),
  "case 3": validate_usr("____"),
  "case 4": validate_usr(""),
}

print(test_cases);