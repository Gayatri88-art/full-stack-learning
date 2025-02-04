//stack -->> stack is LIFO (last in first out)
function one(){
  return 1;
}
function two(){
  return one() + one();
}
function three(){
 let ans =  two()+ one();
 console.log(ans);
}
three();

//js is single threaded language
setTimeout(()=>{
  console.log("apna college")

},2000);
console.log("hiiiiiiiu");


//callback nesting-->>callback hell
let h1 = document.querySelector("h1");
function colorchange(color,delay,nextcolor){
  setTimeout(() =>{
    h1.style.color = color;
    if(nextcolor)nextcolor();
  },delay);
}
colorchange("red",1000,()=>{
  colorchange("green",1000,()=>{
    colorchange("pink",1000,()=>{
      colorchange("blue",1000,()=>{
        colorchange("orange",1000,()=>{

        });
      });
    });
  });
});

//the promises object represent the eventual completion or failure od asyncronous operation and its resultion value.
 