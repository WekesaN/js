//CREATE AND ARRAY
// const cars = ["Saab", "Volvo", "BMW"];

//create an array then provide the elements
// const cars = []
// cars[0] = "Saab"
// cars[1] = "Volvo"
// cars[2] = "BMW"

//Accessing arrays
// const cars = ["Saab", "Volvo", "BMW"];
//access element at index 2 which is BMW
// let car = cars[2];

//Changing array elements
// const cars = ["Saab", "Volvo", "BMW"];
// cars[1] = "Opel"
// console.log(cars);

//Array vs objects
//arrays use numbers to access its elements
//Objects use names to access its elements
//An example of object
// const person = {
//     firstName: "Wekesa",
//     lastName: "Isaac",
//     age: "24"
// }
//But then array elements can be objects
// const car = [
//     { name: "BMW" },
//     2018,
//     functionality()
// ]

//Array properties and methods
//array.length
//array.sort
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars.length)
// console.log(cars.sort())
//Access the first & last element of the array

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0])
// console.log(cars[cars.length - 1])

//cars.pop() - remove the element of the array
//cars.shift() - removes the first element of the array 
//cars.unshift("benz") - adds an element to the beginning of the array

//looping through an array

const fruits = ["banana", "orange", "melon", "apple"]
let fruitLength = fruits.length;
// for (let i = 0; i < fruitLength; i++) {
//     console.log(fruits[i]);
// }
fruits.forEach((value) => {
    console.log(value)
})

