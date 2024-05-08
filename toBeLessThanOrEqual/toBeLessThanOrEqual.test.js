const conta2 = require('./toBeLessThanOrEqual');

test ("to be less than or equal", () => {
    expect(conta2(1, 7, 7)).toBeLessThanOrEqual(62);
});