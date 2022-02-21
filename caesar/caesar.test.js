const encode = require('./caesarCipher');

test('works on single word', () => {
    expect( encode('ABC')).toBe('DEF');
});

test('works on sentence', () => {
    expect( encode("THE BRITISH ARE COMING")).toBe('WKH EULWLVK DUH FRPLQJ');
});

test('works on empty string', () => {
    expect( encode('')).toBe('');
});