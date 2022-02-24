const removeFromArray = require('./removeArray')

test('Remove element', () => { 
    expect(removeFromArray([1, 2, 3, 4, 5, 8, 12, 7], 5)).toEqual([1, 2, 3, 4, 8, 12, 7])
 })