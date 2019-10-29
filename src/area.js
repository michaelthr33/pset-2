var readlineSync = require('readline-sync');

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const mm = 25.4;
let l=number(length);
let w=number(width);
let area = l*w*mm
let areafinal = Math.round(area*100)/100
console.log("A(n)"+ width +'-by-'+length+'-inch sheet of paper has a area of '+areafinal+' square millimeter(s)');
