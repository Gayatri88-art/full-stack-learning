 let password = prompt("enter your name:-");
 let newpassword = password.trim();  //trim is use to remove un-neccessary space from starting and ending.
 console.log(newpassword);

 //strings are immutable in js --> no changes can be made to string.(is we try to create new string then new string and old one both exist)

let name = "gayatri";
let msg = "Error";
console.log( msg.toUpperCase() );
console.log( msg.toLowerCase() );

let note ="ILovewebdev";
console.log( note.indexOf("Love"));

let boy = "  Tejas  ";
// let newboy = boy.trim();
// console.log("after trim",newboy);
//  newboy = newboy.toLowerCase();
//  console.log( "after touppercase",newboy);

let newboy = boy.trim().toUpperCase();
console.log(newboy);

//slice

let learn = "withapnaclg"
console.log(learn.slice(4,8));

let person = "goodboy"; ///replacing perticular word or letter.
update = person.replace("good","bad");
console.log(update);

let fruit = "mango";
x = fruit.repeat(3);
console.log(x);












