function sumItems(array) {
  // Sum all the numbers in the array

  const flatten = arr => {
    let flatArr = [];
    arr.forEach(i => {
      if (Array.isArray(i)) {
        flatArr = flatArr.concat(flatten(i));
      } else {
        flatArr.push(i);
      }
    });
    return flatArr;
  };

  let sumArr = flatten(array);
  if (sumArr.length === 1) {
    return sumArr[0];
  }
  return sumArr[0] + sumItems(sumArr.slice(1));
}

module.exports = sumItems;