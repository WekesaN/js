const sumAll = require('./sumAll');

test('Sum numbers between 1 and 4', () => { 
    expect(sumAll(1, 4)).toEqual(10);
 })