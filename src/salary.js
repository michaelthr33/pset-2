var readlineSync = require('readline-sync');

let annualsalary= readlineSync.question("Annual Salary: ");
let salary= Number(annualsalary);
let contribution= .93
let federaltax=.843
let statetax =.9553
let socialsecuritytax=.938
let medicaretax= .9855
let pretax= salary*contribution
let taxes = federaltax+statetax+socialsecuritytax+medicaretax;
let money = salary*pretax
let takehomemoney= money*taxes
let roundedtakehomemoney= Math.round(takehomemoney*100)/100
console.log("Your take-home pay each check will be " +roundedtakehomemoney+".")
