// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let btn = document.querySelector('button');
// let p = document.querySelector('p');

// function changecolor(){
//   console.dir(this.innerText);
//   this.style.backgroundColor = "green";
// }



// h1.addEventListener("click",changecolor());

// h3.addEventListener("click",changecolor());
// p.addEventListener("click",changecolor());
// btn.addEventListener("click",changecolor());



//wrong practice-->> removing redundancy by creating function --->>as mention above


// h1.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor = "green";
// })

// h3.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor = "green";
// })
// p.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor = "green";
// })
// btn.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor = "green";
// })

//key events-->>

// let inp = document.querySelector("input");  //keydown
// inp.addEventListener("keydown",function(){
//   console.log("key was pressed");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){ //keyup
//   console.log("key was released");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//   console.log("code =",event.code); //ArrowUp(keyU),ArrowDown(keyD),Arrowleft(keyL),Arrowright(keyR).
//   if (event.code == "KeyU"){
//     console.log("charecter move towards upward");
//   } else if (event.code == "KeyD"){
//     console.log("charecter move towards down");
//   }else if (event.code == "KeyL"){
//     console.log("charecter move towards left");
//   }else if (event.code == "KeyR"){
//     console.log("charecter move towards right");
//   }

// });



//extracting data from forms
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
 event.preventDefault(); //because of this we are not gone on any link or address
  let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");
  console.log(user.value);
  console.log(pass.value);

  alert(` hi ${user.value} your passsword is ${pass.value}`);
 //we use value to get inner text written in the forms
});


let user = document.querySelector("#user");
user.addEventListener("change",function(){
  console.log("changed event");
  console.log("finalvalue=",this.value);
});

user.addEventListener("input",function(){
  console.log("input events");
  console.log("finalvalue=",this.value);
});

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
  console.log(inp.value);
  p.innerText = inp.value;


});


 


