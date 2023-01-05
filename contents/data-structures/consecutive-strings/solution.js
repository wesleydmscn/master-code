function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  const values = strarr.map((str, index) => {
    return strarr
            .slice(index)
            .slice(0, k)
            .reduce((acc, curr) => acc + curr, '');
  })

  return values.reduceRight((acc, curr) => acc.length > curr.length ? acc : curr, '')
}

const test_cases = {
  "case 1": longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
  "case 2": longestConsec([], 3),
  "case 3": longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
  "case 4": longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3),
}

console.log(test_cases);