export function convert(array, a, b) {
  if (!Number.isInteger(a) || a <= 1 || a == null) {
    throw new Error("Wrong input base");
  }
  if (!Number.isInteger(b) || b <= 1 || b == null) {
    throw new Error("Wrong output base");
  }
  if (array.length === 0) {
    throw new Error("Input has wrong format");
  }

  if (array[0] === 0) {
    throw new Error("Input has wrong format");
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      throw new Error("Input has wrong format");
    }
  }
  var number = parseInt(array.join(""), a);

  var numberConverted = Number(number).toString(b);
  let output = [];
  for (var j = 0; j < numberConverted.length; j++) {
    output.push(parseInt(numberConverted.charAt(j)));
  }
  return output;
}
