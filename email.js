const fs = require('fs');

const file = fs.readFileSync('test.txt', {encoding: 'utf8'});

// console.log(file.length);

// let counter = 0;
// const substring = "@softwire.com";

// for(let i = 0; i < file.length; i++) {
//     if(file.substring(i, i+13) === substring) {
//         counter ++
//     }
// }

// console.log(counter);

// REGEX solution

const domain = new RegExp(/\w+@softwire\.com\W/g);
const test = new RegExp(/\w+@\w+\.\w+/g);

console.log(file.match(domain).length);

