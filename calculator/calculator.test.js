const calculator = require('./calculator');

test('multiplies correctly', () => {
    expect( calculator.multiply(9, 8) ).toBe(72);
});

test('divides correctly', () => {
    expect( calculator.divide(9, 3) ).toBe(3);
});

test('error if division by 0', () => {
    expect( calculator.divide( 9, 0 ) ).toBe("ERROR");
});

test('adds correctly', () => {
    expect( calculator.add(2, 4)).toBe(6);
});

test('subtracts properly', () => {
    expect( calculator.subtract(2, 4)).toBe(-2);
});