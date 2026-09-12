function same(first, second) {
  if (first.length !== second.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (const val of first)
    freq1[val] = (freq1[val] ?? 0) + 1;

  for (const val of second)
    freq2[val] = (freq2[val] ?? 0) + 1;

  for (const key in freq1) {
    if (!(key * key in freq2))
      return false;
    else if (freq1[key] !== freq2[key * key])
      return false;
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
