console.log('Enter three homework grades.');
var readlineSync = require('readline-sync');

const hw1= readlineSync.question();
const homework1=Number(hw1);
const hw2= readlineSync.question();
const homework2=Number(hw2);
const hw3= readlineSync.question();
const homework3=Number(hw3);
const homework= homework1+homework2+homework3;
const hw= homework/3;
const hwtotal= hw/6.66666667;
console.log("enter three quiz grades")
const q1= readlineSync.question();
const quiz1= Number(q1);
const q2= readlineSync.question();
const quiz2= Number(q2);
const q3= readlineSync.question();
const quiz3= Number(q3);
const quiz = quiz1+quiz2+quiz3;
const q = quiz/3;
const qtotal = q/2.85714286;
console.log("enter three test grades");
const t1= readlineSync.question();
const test1= Number(t1);
const t2= readlineSync.question();
const test2=Number(t2);
const t3 = readlineSync.question();
const test3= Number(t3);
const test = test1+test2+test3
const t = test/3
const ttotal = t/2
const total = (ttotal+qtotal+hwtotal)
const finalgrade = Math.round(total*100)/100

console.log("You grade is "+finalgrade);
