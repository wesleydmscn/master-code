function palindrome(string) {
  const formattedString = string.toLowerCase().replace(/[\W_]/g, '');
  const invertedString = formattedString.split('').reverse().join('');

  return formattedString === invertedString;
}

const test_cases = {
  "case 1": palindrome("eye"),
  "case 2": palindrome("A man, a plan, a canal. Panama"),
  "case 3": palindrome("1 eye for of 1 eye."),
  "case 4": palindrome("0_0 (: /-\ :) 0-0"),
}

console.log(test_cases);