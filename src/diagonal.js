var readlineSync = require('readline-sync');

let w = readlineSync.question('Width:');
let l = readlineSync.question('Length:');
let a = Number(w);
let b = Number(l);
let ca = a*a;
let cb = b*b
let c = cb+ca;
let diagonal = Math.pow(c,.5);
console.log("A(n)"+ w +'-by-'+l+'-inch sheet of paper has a diagonal of '+diagonal+' inch(es)');
