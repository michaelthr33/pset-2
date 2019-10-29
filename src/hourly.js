var readlineSync = require('readline-sync');

const wage = readlineSync.question('Hourly Wage:');
const mon = readlineSync.question('Monday:');
const tues = readlineSync.question('Tuesday:');
const wends = readlineSync.question('Wednesday:');
const thurs = readlineSync.question('Thursday:');
const fri = readlineSync.question('Friday:');
const sat= readlineSync.question("Satuday:");
const sun= readlineSync.question("Sunday: ");
const monday = Number(mon);
const tuesday = Number(tues);
const wendsday = Number(wends);
const thursday = Number(thurs);
const friday = Number(fri);
const saturday = Number(sat);
const sunday = Number(sun);
const wages = Number(wage);
const hours = monday+tuesday+wendsday+thursday+friday+saturday+sunday;
const weeklypay = hours*wages;
const salary= Math.round(weeklypay*100)/100
console.log("You'll make $"+ salary + " this week." );
