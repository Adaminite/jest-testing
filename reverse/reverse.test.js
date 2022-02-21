const reverse = require('./reverse');

test('works on word', () => {
    expect(reverse("abc")).toBe("cba");
});

test('works on sentence', () => {
    expect( reverse('I am Bob')).toBe('boB ma I');
});

test('works on palindromes', () => {
    expect( reverse('madam')).toBe('madam');
});

test('accepts empty strings', () => {
    expect( reverse('')).toBe('');
});
