const add7 = (value) => {
    return value + 7;
}
// console.log(add7(10));

const multiply = (value1, value2) => {
    return value1 * value2
}
// console.log(multiply(10, 20));

const capitalize = (valueLetter) => {
    return valueLetter.toUpperCase();
}
// console.log(capitalize("wekesa"));

const lastLetter = (last) => {
    //return the last letter of a string
    // return last.charAt(last.length - 1); 
    //return the fist letter of the string
    return last.charAt(0);
}

console.log(lastLetter("wekesa"))