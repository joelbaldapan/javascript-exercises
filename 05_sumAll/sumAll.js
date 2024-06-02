const sumAll = function (min, max) {
    let sum = 0;

    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;