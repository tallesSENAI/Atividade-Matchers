const modelos = require('./toMatch');

test ("to match", () => {
    expect(modelos([0])).not.toMatch(/E93/);
    expect(modelos([2])).toMatch(/GTR/);
});