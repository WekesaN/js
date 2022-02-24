const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    {name: "Keyboard", price: 25}
]

const filteredItem = items.filter((item) => {
    return item.price >= 200

})

console.log(filteredItem)

// let word = "racewords"
// let newWord = word.split("").reverse().join("")

// console.log(newWord)
