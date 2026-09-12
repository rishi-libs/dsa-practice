function maxSubarraySum(arr, n) {
  if (!arr.length) return null;


  let windowSum = 0;

  for (let i = 0; i < n; i++)
    windowSum += arr[i];

  let maxSum = windowSum;

  for (let i = n; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - n];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([], 4)); // null
