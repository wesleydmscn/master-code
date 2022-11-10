const weatherInfo = (temp) => {
  const celsius = convertToCelsius(temp);
  
  if (celsius < 0) return (`${celsius} is freezing temperature`);
  else return (`${celsius} is above freezing temperature`);
}

const convertToCelsius = (temperature) => (temperature - 32) * (5 / 9);

const test_cases = {
  "case 1": weatherInfo(50),
  "case 2": weatherInfo(23),
  "case 3": weatherInfo(32),
  "case 4": weatherInfo(10),
}

console.log(test_cases);