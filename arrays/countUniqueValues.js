function countUniqueValues(arr) {
  if (arr.length < 2) return arr.length;

  let count = 0;
  
  for (let i = 0, j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) continue;
    else {
      count++;
      i = j;
    }
  }
  return count + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4