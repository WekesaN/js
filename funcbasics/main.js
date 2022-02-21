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

// console.log(lastLetter("wekesa"))

//Fizzybuzz
//output fizzy for numbers divisible by 3
//Output buzz for numbers divisible by 5
//output fizzybuzz for numbers divisible by 15 or both 3 and 5

const input = parseInt(prompt("Enter your number you would like to fizzybuzz upto: "));

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzybuzzy");
    } else if (i % 3 === 0) {
        console.log("fizzy")
    } else if (i % 5 === 0) {
        console.log("buzzy")
    } else {
        console.log(i)
    }

}