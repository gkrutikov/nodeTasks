const u = (arr) => {
    return arr.reduce((acc, next) => {
        if (~acc.indexOf(next)) {
            return acc;
        }
        return [...acc, next];
    }, Array.from([]));
};
module.exports.u = u
