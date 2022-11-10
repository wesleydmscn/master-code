const deepEqual = (first, second) => {
  if (first === second) return true;
  
  else if (first == null || typeof first != "object" ||
      second == null || typeof second != "object") return false;

  const keysA = Object.keys(first), keysB = Object.keys(second);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(first[key], second[key])) return false;
  }

  return true;
}

const obj = { here: { is: "an" }, object: 2 };

const test_cases = {
  "case 1": deepEqual(obj, obj),
  "case 2": deepEqual(obj, { here: 1, object: 2 }),
  "case 3": deepEqual(obj, { here: { is: "an" }, object: 2 }),
  "case 4": deepEqual({ language: "ECMAScript" }, { language: "JavaScript" }),
}

console.log(test_cases);