const fibonacci = function(num) {
    num = parseInt(num)
    if (num < 0) {
        return "OOPS"
    }
    let fibo = [];

    for (let i = 0; i < num; i++) {
        if (i <= 1) {
            fibo.push(1)
        } else {
            fibo.push((fibo[fibo.length - 1] + fibo[fibo.length - 2]))
        }
    }
    return fibo[fibo.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
