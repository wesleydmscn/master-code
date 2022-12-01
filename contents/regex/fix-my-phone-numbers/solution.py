import re

def is_it_a_num(s: str) -> str:
  removing_chars = re.sub('[^0-9]', '', s)

  if len(removing_chars) == 11 and removing_chars[0] == '0':
    return removing_chars
  else:
    return 'Not a phone number'

test_cases = {
  "case 1": is_it_a_num("S:)0207ERGQREG88349F82!efRF)"),
  "case 2": is_it_a_num("sjfniebienvr12312312312ehfWh"),
  "case 3": is_it_a_num("0192387415456"),
  "case 4": is_it_a_num("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"),
}

print(test_cases)