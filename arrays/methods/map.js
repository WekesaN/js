const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    {name: "Keyboard", price: 25}
]

// const itemName = items.map((item) => {
//     return item.name
// })

// const itemPrice = items.map((item) => {
//     return item.price
// })

// console.log(itemName)

//Get a specific name from the array after input
// const itemPriceSearch = (inputName) => {
//     const itemName = items.map((item) => {
//         let names = item.name
//         for (let i = 0; i <= names.length; i++) {
//             if (itemName === inputName) {
//                 return `${itemName}`;
//             } else {
//                 return `${inputName} doesnt exist`
//             }
//         }
//     })

// }
// console.log(itemPriceSearch("Phone"))
// module.exports = itemPriceSearch