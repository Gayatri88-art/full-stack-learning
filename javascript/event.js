let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
let p = document.querySelector('p');

function changecolor(){
  console.dir(this.innerText);
  this.style.backgroundColor = "green";
}



h1.addEventListener("click",changecolor());

h3.addEventListener("click",changecolor());
p.addEventListener("click",changecolor());
btn.addEventListener("click",changecolor());



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

//key events


