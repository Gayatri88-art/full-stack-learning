//dusre file ke functions ko ya properties ko ham kaise use kare
const sum = (a,b)=> a+b;
const mul = (a,b)=> a*b;
const PI = 3.14;
const  g = 9.8;

module.exports = "this is exported info from one file to another using module.exports word";

let obj = {
  sum:sum,
  mul:mul,
  PI:PI,
  g:g,
};
module.exports = obj;




