const reverseString = (input) => {
    let newStr = ""
    for (let i = input.length - 1; i >= 0; i--) {
        newStr += input[i]
    }
    return newStr;


}

console.log(reverseString("hello there"));