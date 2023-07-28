const sumAll = function(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number' && num1 >= 0 && num2 >= 0) {
        if (num1 > num2) {
            let temp = num1
            num1 = num2
            num2 = temp
        }
        let result = num1
        for (let i = num1 + 1; i <= num2; i++) {
            result += i
        }

        return result
    } else return 'ERROR'
    
};

// Do not edit below this line
module.exports = sumAll;
