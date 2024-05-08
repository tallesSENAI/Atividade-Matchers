const retornaFloat = require('./toBeCloseTo');

test ("to be close to", () => {
    expect(retornaFloat(10, 4)).toBeCloseTo(2.1);
});