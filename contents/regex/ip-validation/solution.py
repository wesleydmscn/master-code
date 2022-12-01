import re

regExp = r'^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$'

def is_valid_IP(strng):
  if re.fullmatch(regExp, strng):
    return True
  else:
    return False

test_cases = {
  "case 1": is_valid_IP("1.2.3.4"),
  "case 2": is_valid_IP("12.255.56.1"),
  "case 3": is_valid_IP("123.456.789.0"),
  "case 4": is_valid_IP("12.34.56"),
}

print(test_cases);