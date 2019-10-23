var readlineSync = require('readline-sync');

const w = readlineSync.question('Hourly Wage:');
let mon = readlineSync.question('Monday:');
let tues = readlineSync.question('Tuesday:');
let wends = readlineSync.question('Wendsday:');
let thurs = readlineSync.question('Thursday:');
let fri = readlineSync.question('Friday:');
let hours = mon+tues+wends+thurs+fri;
let weeklypay = hours*w;
console.log("You'll make $"+ weeklypay + " this week" );
