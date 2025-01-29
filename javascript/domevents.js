let btns = document.querySelectorAll("button");


//onclick
//onmouseenter
for(btn of btns){
  // btn.onclick = sayhello;
  btn.addEventListener("click",sayhello);
  btn.addEventListener("click",sayname);
  
  }
  

// btn.onclick = function(){
//   alert("button was clicked");
// };

function sayhello(){
  alert("hellow!!");
};
function sayname(){
  alert("apna college!!");
};




//addeventlistners




