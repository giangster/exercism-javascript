export function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 !== 0) {
            return false;
        } else if (year % 400 == 0) {
            return true;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// function isLeap(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }