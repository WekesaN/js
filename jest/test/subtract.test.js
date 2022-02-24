const sub = require('./subtract');

test('Subtract two values', () => {
    expect(sub(4, 3)).toBe(1);
})