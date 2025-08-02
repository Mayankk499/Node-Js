// import * as fs from 'node:fs';
// import { userInfo } from 'node:os'
var _ = require("lodash");
const notes = require("./notes.js");

// const user = userInfo();

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', (err) => {
//     if (err) throw err;
//     console.log('File is created');
// });

// console.log("server file is available");

// var age = notes.age;

// var result = notes.addNumber(age + 18, 10);

// console.log(age);
// console.log(result);

var data = ["person", "person", 1,2,1,2, 'name', 'age', '2'];
var filter = _.uniq(data)
console.log(filter);
console.log(_.isString(true));




