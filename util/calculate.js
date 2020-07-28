exports.randomBetween = (min, max, kalman) => {
    const random = Math.random() * (max - min) + min;
    const result = kalman.filter(random);
    return +result.toFixed(2);
};

exports.randomIntegerBetween = (min, max, kalman) => {
    const random = Math.random() * (max - min) + min;
    const result = kalman.filter(random);
    return +result.toFixed(0);
};

exports.simCharging = (previousVal) => {
    const result = previousVal += 5;
    return result;
};

exports.simDischarging = (previousVal) => {
    const result = previousVal -= 2;
    return result;
};

exports.convertPrecentage = (value, of) => {
    const result = (value * 100) / of;
    return +result.toFixed(0);
};

exports.randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

exports.airQuality = (value) => {
    if (value <= 35) {
        return 'Good';
    }
    if (value > 35 && value <= 55) {
        return 'Moderate';
    }
    if (value > 55 && value <= 75) {
        return 'Sufficient';
    }
    if (value > 75 && value <= 110) {
        return 'Bad';
    }
    return 'Out of scale';
};

exports.randomIntegerBetweenLevels = (min, max) => {
    const random = Math.random() * (max - min) + min;
    const level = this.convertPrecentage(random, max);

    if (level <= 20) {
        return 0;
    }
    if (level > 20 && level <= 40) {
        return 30;
    }
    if (level > 40 && level <= 60) {
        return 50;
    }
    if (level > 60 && level <= 80) {
        return 70;
    }
    return 100;
};

exports.acMode = () => {
    const result = Math.random() * 4;

    if (result <= 1) {
        return 'Auto';
    }
    if (result > 1 && result <= 2) {
        return 'Cooling';
    }
    if (result > 2 && result <= 3) {
        return 'Heating';
    }
    return 'Manual';
};
