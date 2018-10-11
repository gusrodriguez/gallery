function group(array, size) {
  const arrays = [];

  while (array.length > 0) {
    arrays.push(array.splice(0, size));
  }

  return arrays;
}

export default group;
