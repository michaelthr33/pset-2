console.log('Enter three homework grades.');
var readlineSync = require('readline-sync');

let hw1= readlineSync.question();
let homework1=Number(hw1);
let hw2= readlineSync.question();
let homework2=Number(hw2);
let hw3= readlineSync.question();
let homework3=Number(hw3);
let homework= homework1+homework2+homework3;
let hw= homework/3;
let hwtotal= hw/6.66666667;
console.log("enter three quiz grades")
let q1= readlineSync.question();
let quiz1= Number(q1);
let q2= readlineSync.question();
let quiz2= Number(q2);
let q3= readlineSync.question();
let quiz3= Number(q3);
let quiz = quiz1+quiz2+quiz3;
let q = quiz/3;
let qtotal = q/2.85714286;
console.log("enter three test grades");
let t1= readlineSync.question();
let test1= Number(t1);
let t2= readlineSync.question();
let test2=Number(t2);
let t3 = readlineSync.question();
let test3= Number(t3);
let test = test1+test2+test3
let t = test/3
let ttotal = t/2
let total = (ttotal+qtotal+hwtotal)

console.log("You grade is "+total);
