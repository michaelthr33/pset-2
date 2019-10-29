var readlineSync = require('readline-sync');

const w = readlineSync.question('Width:');
const l = readlineSync.question('Length:');
const a = Number(w);
const b = Number(l);
const ca = a*a;
const cb = b*b
const c = cb+ca;
const diagonal = Math.pow(c,.5);
const finalanswer= Math.round(diagonal*100)/100
console.log("A(n)"+ w +'-by-'+l+'-inch sheet of paper has a diagonal of '+diagonal+' inch(es)');
