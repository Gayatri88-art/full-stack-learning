let btns = document.querySelectorAll("button");
console.dir(btns);

//onclick
//onmouseenter
for(btn of btns){
  btn.onclick = sayhello;
  btn.onmouseenter = function(){
    console.log("you clicked a button");
  }
  console.dir(btn);
}
// btn.onclick = function(){
//   alert("button was clicked");
// };

function sayhello(){
  alert("hellow!!");
};

//


