//Generate random number between between 1 and 3

// const randomNum = () => {
//     return Math.floor(Math.random() * 3) + 1;
// }

// console.log(randomNum());
let randomNumber = Math.floor(Math.random() * 3) + 1;

const computerPlay = () => {
    if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Rock"
    } else {
        return "Scissors"
    }

}

// console.log(computerPlay())

// Play Round();

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "Huraaa!!!"
    } else {
        return "Not equal"
    }
}
let playerSelection = "Rock"
let computerSelection = computerPlay();

// console.log(computerSelection)

// const game = (value) => {
//     for (let i = 0; i < 5; i++) {
//         console.log(i + value);
//     }
// }

// game(10)