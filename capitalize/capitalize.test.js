const capitalize = require('./capitalize');

test('checks a single word', () => {
    expect( capitalize('abc') ).toBe('Abc') ;
});

test('checks a sentence', () => {
    expect( capitalize('hello, I am Bob')).toBe('Hello, I am Bob');
});

test('works for empty string', () => {
    expect( capitalize('') ).toBe('');
});