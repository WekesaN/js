//Generate random number between between 1 and 3

const randomNum = () => {
    return Math.floor(Math.random() * 3) + 1;
}

console.log(randomNum());