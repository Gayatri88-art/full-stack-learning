//for each
let arr = [1,2,3,4,5];
 arr.forEach(element => {
  console.log(element);
 });
 arr.forEach(function(el){
  console.log(el);
 });

 let arr2 = [
          {
            name:"gayatri",
            gender:"female",
            marks:90
          },
            {
              name:"mayuri",
            gender:"female",
            marks:93
          },
            {
              name:"sanika",
            gender:"female",
            marks:98
          }
          ];
         arr2.forEach((student)=>{
          console.log(student.marks);
         })

         let gpa = arr2.map((el)=>{
          return el.marks/10;
         })
         console.log(gpa);

//map

list = [2,4,6,8,10];
let double = list.map((el) =>{
  return el*el;
});
console.log(double);

//filter
nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let check = nums.filter((el)=>{
  return el%2==0; //even=true odd=false
})
console.log(check);

//every
let number = [2,4,6].every((el)=>el%2==0);
console.log(number);

//some
let xyz = [1,3,5,4].some((el)=>el%2==0);
console.log(xyz); //because some even number is there i.e 4

//reduce
let mno = [1,2,3,4,5].reduce((result,el)=> result+el);
console.log(mno); // its working is like loop kind of

//find the maximum from an array using reduce

let pqr = [1,2,3,4,5,6,7,8,9,11,12];
let result =pqr.reduce((result,el)=>{
  if(result<el){
    return  el;
  }
  else{
    return result;
  }
});
console.log(result);


//practice question

//1. all numbers from array are multiple of 10 or not
 abc = [10,22,30,40,50];
let def =abc.every((el)=>el%10==0);
console.log(def);

//2.create a function to find the min number from array

ghi = [1,2,3,4,5,6,7,8,9];
let jkl = ghi.reduce((res,el)=>{
  if (res>el){
    return el;
  }
  else{
    return res;
  }
});
console.log(jkl);

//default parameter
function sum(a,b=4){
  return a+b;

};

//spread

ghi = [1,2,3,4,5,6,7,8,9];
console.log(...ghi);
console.log(Math.min(...ghi));

console.log(..."apnacollege");

//spread --> with array literals
let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let mix = [...even,...odd];
console.log(mix);

//-->with object literals
const data ={
  name:"gayatri",
  age:20,
  clg:"rcp"
};

let copydata = {...data};
console.log(copydata);

//destructuring -->> storing value of array in multiple variable
let name = ["gayatri","varade","tejas","liladhar","laxmi"];
let [first,second,...others] =  name;
console.log(first);




