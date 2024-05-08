const multi = require('./toBe');

test ("multiplica os valores de A, B e C entre si", () => {
    expect(multi(3, 4, 9)).toBe(108);
});