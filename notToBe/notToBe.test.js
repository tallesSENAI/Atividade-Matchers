const soma = require('./notToBe');

test ("soma valores", () => {
    expect(soma(3, 4, 8)).not.toBe(108);
});