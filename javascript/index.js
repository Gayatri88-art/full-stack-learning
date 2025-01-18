console.log("gargi");
console.log("my name is gargiiiiii");

let a = 5;
let b = 10;
console.log("SUM:",a+b);

let firstprice = 56;
let secondprice = 10;
console.log(`the total price is:${firstprice + secondprice} rs.`); //template literals

//operators
let age = 18;
console.log(age>18); //false
console.log(age>=18); //true


//conditional statements
console.log("before my if statement");
let yr = 19;
if (yr > 18){
  console.log("you can vote");
}
console.log("after my if statement");

//traffic light program
console.log("before my if statement");
let color = "pink"  ;
if (color === "red"){
  console.log("stop");
}
 else if (color === "yellow"){
  console.log("slow down");
}
 else if(color === "green"){
  console.log("go");
}
else {
  console.log("traffic light is broken");
}
console.log("after my if statement");

//else if

let marks = 20;
if (marks > 80){
  console.log("A+");
}
else if(marks >= 60){
  console.log("A");
}
else if(marks > 40){
  console.log("B");
}
else if (marks < 35) {
  console.log("F");
}


let size = "M";
if (size=== "XL"){
  console.log("price is Rs.250");
}
 else if (size=== "L"){
  console.log("price is Rs.200");
}
 else if (size=== "M"){
  console.log("price is Rs.100");
}

 else {
  console.log("price is Rs.50");
}


//nested if else
let markss = 75;
if (markss > 70 ){
  console.log("pass");
  if (markss ==  75){
    console.log("grade:0");
  }
  else{
    console.log("A");
  }
}
else{
  console.log("fail");
}

//logical operators && || !

let XYZ = 75;
if (XYZ ==75 && XYZ >= 70){ // true+true = true other all are false
  console.log("older");
  console.log(" 70+");
}

let abc = 80;
if (abc !=75 || abc < 70){ // false+false= false other all are true
  console.log("older");
  console.log(" 70+");
}


let lmn = 75;
if ( !(lmn== 75)){ 
  console.log("older");
  console.log(" 70+");
}


//practice question
let str ="sahil";
if(str[0]=== "g" && str.length>=3){
  console.log("string is good");
}
else{
  console.log("string is  not good"); 
}

//switch case

let colors = "red";
switch(colors){
  case "red" :
    console.log("stop");
    break;
  case "yellow" :
    console.log("slow down");
    break;
  case " green" :
    console.log("go");
    break;
  default:
      console.log("light is broken");
      
}

//example on switchcase

let days = "thus";
switch(days){
  case "monday":
    console.log("1");
    break;
  case "tue":
      console.log("2");
      break;
  case "wed":
        console.log("3");
        break;    
        
  case "thus":
          console.log("4");
          break;
  case "fri":
            console.log("5");
            break;
  case "sat":
              console.log("68");
              break;
case "sun":
                console.log("7");
                break;
}

//alert("this is the first alert!");
console.error(" thi is the error msg");
console.warn("this is the warn msg");


let firstname = prompt("enter your firstname:-");
let lasttname = prompt("enter your lastname:-");
let msg = "welcome" + firstname  ;
alert(msg);







