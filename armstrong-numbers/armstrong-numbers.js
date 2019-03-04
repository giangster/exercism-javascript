export function validate(number) {
    let num = number.toString();
    let numberArms = 0;
    for (var i = 0; i < num.length; i++) {
        numberArms = numberArms + Math.pow(parseInt(num.charAt(i)), num.length);
    }

    return (number == numberArms);
}