const compras = require('./toContain');

test ("to contain", () => {
    expect(compras).toContain('arroz');
    expect(compras).toContain('feijao');
});