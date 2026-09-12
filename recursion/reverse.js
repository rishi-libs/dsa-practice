function reverse(str) {
  if (!str.length)
    return '';

  const result = new Array(str.length).fill('');

  function helper(index = 0) {
    if (index > Math.floor(str.length / 2))
      return;

    const temp = str[index];
    result[index] = str[str.length - 1 - index];
    result[str.length - 1 - index] = temp;

    helper(index + 1);
  }

  helper();

  return result.join('');
}

console.log(reverse('awesome'));
console.log(reverse('foobar'));
