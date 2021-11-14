class Calculator {

    add = (...values) => {
        let sum = 0;
        for (let value of values) {
            sum += value;
        }
        return sum;

    };

    multiply = (...values) => {
        let multiplication = 1;
        for (let value of values) {
            multiplication *= value;
        }
        return multiplication;
    };
}

module.exports = Calculator;

