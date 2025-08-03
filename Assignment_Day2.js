import * as fs from 'node:fs';
import {notes} from './notes.js';
// import { userInfo } from 'node:os'
import { error } from 'node:console';
import os from 'os';
var _ = require("lodash");


function calculateCircleArea(radius){
    if(radius < 0){
        return "radius cannot be negative."
    }
    const area  = Math.PI * Math.pow(radius, 2)
    return area;
}

console.log(calculateCircleArea(0));
console.log(calculateCircleArea(1));
console.log(calculateCircleArea(2.5));
console.log(calculateCircleArea(3));

function performOperation(num1, num2, mulOP){
    return mulOP(num1, num2);
}

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    if(y === 0){
        return "Cannot divide by 0"
    }
    return x / y;
}

console.log(performOperation(10, 5, add));
console.log(performOperation(10, 5, subtract));
console.log(performOperation(10, 5, multiply));
console.log(performOperation(10, 5, divide));

const material = userInfo();


fs.appendFile('blank.txt', `hello ${material.username}.\n`, (error) => {
    if (error) throw error;

    console.log("Note is created");
});



console.log("Total memory available : ", os.totalmem());
console.log("free memory available : ", os.freemem());
console.log("Operating System Platform : ", os.platform());
console.log("Number of CPU cores : ", os.cpus().length);








