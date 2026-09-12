/**
 * An anagram is a word, phrase or name formed by rearranging the letters of another.
 * 
 */

function validAnagram(first, second) {
  if (first.length !== second.length)
    return false;

  const freq = {};

  for (const ch of first)
    freq[ch] = (freq[ch] ?? 0) + 1;

  for (const ch of second) {
    if (!freq[ch])
      return false;
    freq[ch]--;
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'cat')); // false
console.log(validAnagram('silence', 'license')); // true
