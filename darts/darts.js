export function solve(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return null;
    }
    let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if (z <= 1) {
        return 10;
    } else if (1 < z && z <= 5) {
        return 5;
    } else if (5 < z && z <= 10) {
        return 1;
    } else {
        return 0;
    }
}