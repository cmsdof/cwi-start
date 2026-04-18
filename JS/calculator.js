let input = require('fs').readFileSync('./js/stdin.txt', 'utf8');
let lines = input.split('\n');

let v1 = parseFloat(lines[0]);
let v2 = parseFloat(lines[1]);

let sum = v1 + v2;
let sub = v1 - v2;
let div = v1 / v2;
let mult = v1 * v2;

console.log(`SUM = ${sum}`);
console.log(`SUB = ${sub}`);
console.log(`MULT = ${mult}`);
console.log(`DIV = ${div}`);