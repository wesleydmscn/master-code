function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune',
  }[id];
}

const test_cases = {
  "case 1": getPlanetName(2),
  "case 2": getPlanetName(5),
  "case 3": getPlanetName(3),
  "case 4": getPlanetName(4),
}

console.log(test_cases);