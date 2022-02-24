// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(nums.splice(3)) remove the first three elements
//console.log(nums.splice(2, 4)) print out two elements after the 3 element

// const numSlice = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const numSplice = [1, 2, 3, 4]

// console.log(`Slice(2) ${numSlice.slice(2, 6)}`)
// console.log(`Splice(2) ${numSplice.splice(2)}`)

// const newNum = numSplice.splice(2, 1);
// console.log(numSplice);

//Splice does not affect the original array

const numSplice = [1, 2, 3, 4]

const removeFromArray = (array, value) => {
    for (let i = 1; i <= array.length; i++) {
        if (array[i] === value) {
            array.splice(value, 1)
        } 
    }
    return array
}

// removeFromArray(numSplice, 3)
console.log(removeFromArray(numSplice, 3))

// module.exports = removeFromArray



