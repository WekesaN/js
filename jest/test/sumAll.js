const sumAll = (init, last) => {
    let newArr = []
    let  sum = 0;
    for (let i = init; i <= last; i++) {
        newArr.push(i)
        sum += i 

    }
    return sum
 
}

// console.log(sumAll(1, 4));


module.exports = sumAll;