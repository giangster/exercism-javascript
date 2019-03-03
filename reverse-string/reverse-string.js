export function reverseString(string) {
    let gnirts = '';
    if (string === '') {
        return gnirts;
    } else {
        for (var i = string.length; i >= 0; i--) {
            gnirts = gnirts + string.charAt(i);
        }
        return gnirts;
    }
}

