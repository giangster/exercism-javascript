// This is dev-deanle branch

// blah blah
export function toRoman(number) {
  let oneToTen = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  let tenToHundred = [
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "C"
  ];
  let hundredToThousand = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "M"
  ];
  let roman = "";
  roman = roman + hundredToThousand[10].repeat(Math.floor(number / 1000));
  number = number % 1000;
  roman = roman + hundredToThousand[Math.floor(number / 100)];
  number = number % 100;
  roman = roman + tenToHundred[Math.floor(number / 10)];
  number = number % 10;
  if (number > 0) {
    roman = roman + oneToTen[number - 1];
    return roman;
  } else {
    return roman;
  }
}
