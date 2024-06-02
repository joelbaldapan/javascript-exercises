const removeFromArray = function () {
    let array = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        const arg = arguments[i]
        // Find how many instances to be removed
        const total = (array.filter(item => item === arg)).length;

        // Remove each of them
        for (let j = 0; j < total; j++) {
            let index = array.findIndex(item => item === arg);
            array.splice(index, 1);
        }
    }

    return array;
};


// Do not edit below this line
module.exports = removeFromArray;