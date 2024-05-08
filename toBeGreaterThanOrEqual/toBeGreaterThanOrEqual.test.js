const multi = require('./toBeGreaterThanOrEqual');

test ("to be greater than or equal", () => {
    expect(multi(10, 1, 2)).toBeGreaterThanOrEqual(20);
});