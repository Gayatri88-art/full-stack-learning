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

