function alphanumeric(string){
  return /^[a-z0-9]+$/i.test(string);
}

const test_cases = {
  "case 1": alphanumeric("Mazinkaiser"), // true
  "case 2": alphanumeric("hello world_"), // false
  "case 3": alphanumeric("PassW0rd"), // true
  "case 4": alphanumeric("     ") // false
}

console.log(test_cases);