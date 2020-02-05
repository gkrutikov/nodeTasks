const { gg } = require('./g');
const { filter } = require('./f');
const { f } = require('./s');
const { u } = require('./u');
const { correctArray } = require('./correct-array');


// Function order must be the same
const arr = gg(20, 1);
const filtered = filter(arr);
const filt2 = f(filtered);
const resultArray = u(filt2);
// // From this line do not touch
const isSameArrays = correctArray.reduce((acc, next, index) => {
    if (correctArray[index] !== resultArray[index]) {
        return false;
    }
    return acc;
}, true);

if (!isSameArrays) {
    throw new Error("The arrays arn't the same");
} else {
    console.log('Cool!');
} 