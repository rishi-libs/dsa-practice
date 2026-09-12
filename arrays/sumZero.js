function sumZero(arr) {
  if (arr.length < 2) return undefined;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0)
      return [arr[left], arr[right]];
    else if (sum > 0)
      right--;
    else
      left++;
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
