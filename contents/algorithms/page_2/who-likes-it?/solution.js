function likes(names) {  
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  
  return names.length === 2
  ? `${names[0]} and ${names[1]} like this`
  : (names[0] || 'no one') + ' likes this';
}

const test_cases = {
  "case 1": likes([]),
  "case 2": likes(['Peter']),
  "case 3": likes(['Jacob', 'Alex']),
  "case 4": likes(['Max', 'John', 'Mark']),
}

console.log(test_cases);