// this file is used to combine all the three files and export them
//sabse pehele baki sari files se data requier karti hai combine karti hai aur fir export karti hai
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana,orange];
module.exports = fruits;