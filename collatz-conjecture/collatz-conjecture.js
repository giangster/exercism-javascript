export function steps(n) {
  if (n <= 0) {
    throw "Only positive numbers are allowed";
  }
  try {
    var count = 0;
    while (n > 1) {
      if (n % 2 === 0) {
        n = n / 2;
        count++;
      } else {
        n = n * 3 + 1;
        count++;
      }
    }
    return count;
  } catch (e) {
    console.log(e);
  }
}
