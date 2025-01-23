function hello (){
  console.log("hello");
}
hello();

function printname(){
  console.log("gayatri");
  console.log("liladhar");
  console.log("varade");
}
printname();


function tableofnum(){
  for(let i=5;i<=50;i=i+5){
    console.log(i);
  }
}
tableofnum();


function ifadult(){
  let age = 23;
  if(age>18){
    console.log(" adult");
  }
  else{
    console.log("not adult");
  }
}
ifadult();

function poem(){
  console.log("Twinkle, twinkle, little star,How I wonder what you are!Up above the world so high,Like a diamond in the sky.");
}
poem();

//create a function to roll the dice
function rolldice(){
  let random = Math.floor(Math.random()*5)+1;
  console.log(random);
}
rolldice();
rolldice();
rolldice();
rolldice();
rolldice();

function calculate(a,b){
  console.log(" sum of the num is-", a+b);
}
calculate(23,10);



//avg of the number
function avg(a,b,c){
  console.log(" avarage of the num is-", (a+b+c)/2);
}
avg(1,2,3);

function multable(n){
  for(let i =n; i<=n*10;i=i+n)
  console.log(i);
}
multable(20);


function age(n){
  if (n>18){
    return "adult";
  }
  else{
    return"not adult";
  }
  
}
age(23);


//sum oof n num
function getsum(n){
  let sum=0;
for (let j=1;j<=n;j++){
sum+=j;
}
return sum;
}

//concate string

let str =["hi","my","self","gargi"];
function concat(str){
  let result = "";
  for (i=0; i<=str.length;i++){
    result+=str[i];
  }
  return result;
}

//function scope-->variable difine in the function is not accesible from the outside
//block scope-->
  

//function expression
let sum= function(a,b){
  return a+b;

}

//function higher order

function  multiplegreet (func,n){
  for(let i = 1; i<=n; i++){
    func();
  }
}
let greet = function(){
  console.log("hello");
}
multiplegreet(greet,10);



function oddeventest(request){
  if(request=="odd"){
    return function(n){
      console.log(!(n%2==o));
    }
    return odd;
  }
  else if(request=="even"){
    return function(n){
      console.log((n%2==o));
    }
    return even;
  }
   
  else{
    console.log("wrong request");
  }
}
let request = "odd";


//const calculator
const calculator = {
  sum: function(a,b){
    return a+b;
  },
  
  sub: function(a,b){
    return a-b;
  },
  mul:function(a,b){
    return a*b;
  },
  div: function(a,b){
    return a/b;
  }
 
}

//this in js
const students = {
  name:"sahil",
  age:20,
  city:"mumbai",
  eng:98,
  math:96,
  chem:99,
  getavg(){
    console.log(this);
     let avg = (this.eng+this.math+this.chem)/2;
     console.log(avg);
  }

}
 function getavg(){
  console.log(this);
 }

 try {
  console.log(a);
 }catch (err){
  console.log("variable doesnt exist");
  console.log(err);
 }
