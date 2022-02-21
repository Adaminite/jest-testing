const analyze = require('./analyzeArray');

test('error if array is empty', () => {
    expect(analyze([])).toBe("ERROR");
});

test('works on normal array', () => {
    expect(analyze([1,2,3])).toMatchObject( {average: 2, min: 1, max: 3, length: 3});
});