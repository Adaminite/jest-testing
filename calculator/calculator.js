const calculator = {
    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        if(num2 === 0){
            return "ERROR";
        }

        return num1 / num2;
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    }
}

module.exports = calculator;