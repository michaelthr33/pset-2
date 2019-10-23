var readlineSync = require('readline-sync');

const w = readlineSync.question('Hourly Wage:');
let mon = readlineSync.question('Monday:');
let tues = readlineSync.question('Tuesday:');
let wends = readlineSync.question('Wendsday:');
let thurs = readlineSync.question('Thursday:');
let fri = readlineSync.question('Friday:');
let monday = Number(mon);
let tuesday = Number(tues);
let wendsday = Number(wends);
let thursday = Number(thurs);
let friday = Number(fri);
let wages = Number(w);
let hours = monday+tuesday+wendsday+thursday+friday;
let weeklypay = hours*wages;
console.log("You'll make $"+ weeklypay + " this week" );
