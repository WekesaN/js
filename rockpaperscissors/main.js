//Generate random number between between 1 and 3

// const randomNum = () => {
//     return Math.floor(Math.random() * 3) + 1;
// }

// console.log(randomNum());

const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        console.log("Rock");
    } else if (randomNumber === 2) {
        console.log("Paper")
    } else {
        console.log("scissors")
    }

}

computerPlay();