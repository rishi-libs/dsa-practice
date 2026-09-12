function isPalindrome(str, index = 0) {
  if (index === Math.floor(str.length / 2))
    return true;
  return str[index] === str[str.length - 1 - index] && isPalindrome(str, index + 1);
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
