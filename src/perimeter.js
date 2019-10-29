var readlineSync = require('readline-sync');
const w = readlineSync.question('Width:');
const l = readlineSync.question('Length:');
const cm = 2.54;
const width = Number(w);
const length = Number(l);
const perimeter = length+length+width+width;
const perimetercm= perimeter*cm
const roundedperimeter= Math.round(perimetercm*100)/100
console.log("A(n)"+ width +'-by-'+length+'-inch sheet of paper has a perimeter of '+roundedperimeter+' centimeter(s)');
