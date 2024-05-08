test ("to be null", () => {

    const palavra1 = null;
    const palavra2 = undefined;

    const num1 = 90;
    const num2 = undefined;

    expect(palavra1).toBeNull();
    expect(palavra2).toBeUndefined();
    
    expect(num1).not.toBeUndefined();
    expect(num2).toBeDefined();
});