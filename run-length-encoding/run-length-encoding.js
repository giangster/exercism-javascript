export function encode(string) {

    var newString = '';
    for (var i = 0; i < string.length; i++) {
        var count = 1;
        while (string.charAt(i) === string.charAt(i + 1)) {
            count++;
            i++;
        }
        if (count !== 1) {
            newString = newString + count + string.charAt(i);
        } else {
            newString = newString + string.charAt(i)
        }
    }
    return newString;
}

export function decode(str) {
    return str.replace(/(\d+)(\s|\w)/g,
        function (m, n, c) {
            return new Array(parseInt(n, 10) + 1).join(c);
        }
    );
}


