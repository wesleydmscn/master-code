const validateUsr = (username) => /^[a-z0-9_]{4,16}$/g.test(username);

const test_cases = {
  "case 1": validateUsr("asd43_34"),
  "case 2": validateUsr("Hasd_12assssssasasasasasaasasasasas"),
  "case 3": validateUsr("____"),
  "case 4": validateUsr(""),
}

console.log(test_cases);