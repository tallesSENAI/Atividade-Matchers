const multiESoma = require('./toEqual');

test ("to equal", () => {

    expect(multiESoma(10, 2, 80)).toEqual(180);

    expect(multiESoma(2, 2, 10)).toBeLessThanOrEqual(102);
    expect(multiESoma(7, 22, 1)).toBeLessThan(188);

    expect(multiESoma(9, 27, 74)).toBeGreaterThan(500);
    expect(multiESoma(1, 2, 80)).toBeGreaterThanOrEqual(82);
});