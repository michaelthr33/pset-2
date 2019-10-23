var readlineSync = require('readline-sync');

const width = readlineSync.question('Width:');
const length = readlineSync.question('Length:');
const mm = 25.4;
const area = width*length*mm
console.log("A(n)"+ width +'-by-'+length+'-inch sheet of paper has a area of '+area+' square millimeter(s)');
