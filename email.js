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
const generic = new RegExp(/\w+@\w+\.\w+/g);

// console.log(file.match(domain).length);
let results = file.match(generic)
// console.log(results);

let uniqueAddresses = {};

for (address of results){
    uniqueDomain = address.split('@')[1];
    uniqueAddresses[uniqueDomain] ? uniqueAddresses[uniqueDomain] += 1 : uniqueAddresses[uniqueDomain] = 1
    }
console.log(uniqueAddresses);