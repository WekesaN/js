const repeatString = require('./repeatString')

test('Repeat an input three times', () => {
    expect(repeatString("hey", 3)).toEqual("heyheyhey")
 })