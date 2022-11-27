String.prototype.camelCase= function() {
  return this.split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join('');
}

const test_cases = {
  "case 1": "test case".camelCase(),
  "case 2": "camel case method".camelCase(),
  "case 3": "say hello ".camelCase(),
  "case 4": " camel case word".camelCase(),
}

console.log(test_cases);