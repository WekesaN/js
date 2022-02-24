//allows you to get a single item
const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    {name: "Keyboard", price: 25}
]


const searchItem = (itemName) => {
    const foundItem = items.find((item) => {
        return item.name === itemName;
    })
    return foundItem
    // return foundItem.price

}

console.log(searchItem("Book"))