function getRandomValueBetween(min, max) {
    const result = Math.random() * (max - min) + min;
    return +result.toFixed(2);
}

module.exports.randomBetween = getRandomValueBetween;