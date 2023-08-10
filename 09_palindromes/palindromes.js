const palindromes = function (str) {
    str = str.toLowerCase()
    let arr = Array.from(str);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " " || arr[i] === "," || arr[i] === "." || arr[i] === "!") {
            arr.splice(i, 1);
            i--
        }
    }
    
    let reversedArr = arr.slice().reverse();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArr[i]) {
            return false
        }
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
