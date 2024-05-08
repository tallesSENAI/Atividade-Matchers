const sub = require('./toBeGreaterThan');

test ("to be greater than", () => {
    expect(sub(20, 4, 9)).toBeGreaterThan(6);
});