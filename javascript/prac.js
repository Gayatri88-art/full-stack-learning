// //Write a JavaScript function that returns array elements larger than a number.
// let arr = [ 1,3,4,6,7,9,8,5];
// let num = 5;
// function getelements (arr,num){
//   for(i=0;i<arr.length;i++){
//     if(arr[i]>num){
//       console.log(arr[i]);
//     }
//   }
// }
//  getelements (arr,num);


//  let str = "abcdabcdefgggh";
// //function to get String with all unique elements
// function getUnique(str) {
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//     //if current character is not added, then add it in
//     ans.
//     //Otherwise it is a duplicate.
//     ans += currChar;
//     }
//     }return ans;
//   }
//   getUnique(str);

//   //Write a JavaScript function that accepts a list of country names as input andreturns the longest country name as output.Example : country = ["Australia", "Germany", "United States of America"] output :"United States of America"

//   function longestName(country) {
//     let ansIdx = 0;
//     for (let i = 0; i < country.length; i++) {
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen > ansLen) {
//     ansIdx = i;
//     }
//     }
//     return country[ansIdx];
//     }
//     longestName(country);

//     //Qs4. Write a JavaScript function to count the number of vowels in a String
// let clg = "apnacollege";
// function countVowels(str) {
// let count = 0;for (let i = 0; i < str.length; i++) {
// if (
// str.charAt(i) == "a" ||
// str.charAt(i) == "e" ||
// str.charAt(i) == "i" ||
// str.charAt(i) == "o" ||
// str.charAt(i) == "u"
// ) {
// count++;
// }
// }
// return count;
// }
// //Qs5. Write a JavaScript function to generate a random number within a range(start, end).
// let start = 100;
// let end = 200;
// function generateRandom(start, end) {
// let diff = end - start;
// return Math.floor(Math.random() * diff) + start;
// }


// //Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2 Result should be arr = [1, 3, 4, 5, 6, 3]
// let arrs = [1, 2, 3, 4, 5, 6, 2, 3];
// let nums = 2 ;
// for(i=0;i<arrs.length;i++){
//   if (arrs[i]==nums){
//     arrs.splice(i,1);
//   }
// }
// console.log(arrs);

let n = 8;
let factorial = 1;
for(i=1;i<=n;i++){
  factorial*=i;

}
console.log(factorial);

