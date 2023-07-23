const removeFromArray = function(arr, ...values) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (arr[i] === values[j]) {
                arr.splice(i, 1)
                i--
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
