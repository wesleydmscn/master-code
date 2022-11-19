function invert(array) {
  return array.map(item => item === 0 ? -0 : item - (item * 2));
}