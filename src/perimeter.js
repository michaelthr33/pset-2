var readlineSync = require('readline-sync');
let w = readlineSync.question('Width:');
let l = readlineSync.question('Length:');
const cm = 2.54;
let width = Number(w);
let length = Number(l);
const perimeter = length+length+width+width;
console.log("A(n)"+ width +'-by-'+length+'-inch sheet of paper has a perimeter of '+perimeter*2.54+' centimeter(s)');
