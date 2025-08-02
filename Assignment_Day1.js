// var prompt = require("prompt-sync")();

// let userAge = prompt("Enter the age: ");

// if(userAge < 18){
//     console.log("You get a 20% discount!");
// }else if(userAge > 18 && userAge < 65){
//     console.log("Normal ticket price applies.");
// }else{
//     console.log("You get a 30% senior discount");

// }

// // Question 2 ------------

// const length = prompt("Enter the length : ");
// const width = prompt("Enter the width : ");

// const area = length * width;

// console.log("Area of rectangle is :", area);

// // Question - 3 ------------------

// var product = {
// name: 'Mayank',
// price: 250,
// inStock: true
// };

// console.log("Name is : ", product.name, typeof product.name);
// console.log("Price is : ", product.price, typeof product.price);
// console.log("inStock : ", product.inStock, typeof product.inStock);

// // Question 4 ---------------------

// const guestList = ["Rahul", "Rajeev", "Rajan", " Raja", "Ramu"];
// function checkGuest(name) {
//   return guestList.includes(name);
// }
// let name = prompt("Enter the guest name: ");

// if (checkGuest(name)) {
//   console.log(`Welcome to the party, ${name}`);
// } else {
//   console.log("Sorry you're not on the guest list");
// }

const weatherForecast = {
    Date: '22/07/2025',
    temperature: 30,
    condition: "Sunny",
    humidity: 60
};

console.log("weather Forecast : ", weatherForecast.Date);
console.log("temperature", weatherForecast.temperature + "°C");
console.log("condition", weatherForecast.condition);
console.log("humidity", weatherForecast.humidity + "%");






