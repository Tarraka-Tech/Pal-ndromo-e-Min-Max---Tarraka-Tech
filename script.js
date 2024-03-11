function isPalindrome(frase) {
    let fraseLimpa = '';
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== ' ') {
            fraseLimpa += frase[i].toLowerCase();
        }
    }

    const length = fraseLimpa.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (fraseLimpa[i] !== fraseLimpa[length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

function arrayMaxMin(arr) {
    if (arr.length === 0) {
        return [];
    }

    let minValue = arr[0];
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return [minValue, maxValue];
}