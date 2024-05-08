const conta1 = require('./toBeLessThan');

test ("to be less than", () => {
    expect(conta1(3, 4, 9)).toBeLessThan(50);
});