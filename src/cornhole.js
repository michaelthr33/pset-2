var readlineSync = require('readline-sync');

const l = 48;
const w = 24;
const d = 6;
const r= d/2
const cornarea = l*w
const holearea = Math.pow(r,2)
const holearea2=holearea*3.1415
const cornholearea= cornarea - holearea2
console.log("The surface area of a standard Cornhole board is " + cornholearea + " square inch(es)")
