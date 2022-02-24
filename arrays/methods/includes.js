const nums = [1, 2, 3, 4, 5]

const present = (input) => {
    let presence = nums.includes(input)
    if (presence) {
        return `Your value ${input} is present`
    } else {
        return `Your value ${input} is not present`
    }
}

console.log(present(1))
