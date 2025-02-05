//day-->>26

 //async keyword:=create an async function
 //by default ye promise return karta hai


// async function greet() {
//  // throw "404 page not found";
//   return"hellow";
// }
// greet()
// .then((result)=>{
//   console.log("promised was resolved");
//   console.log("result was:",result);
// })
// .catch((err)=>{
//   console.log("promise was rejected",err);
// });

// let demo = async ()=>{
//   return 5;
// };
    

//await keyword :-  pauses the execusion of its surrounded async function until the promises get rejected or resolve

// function getNum(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let num = Math.floor(Math.random()*10)+1;
//       console.log(num);
//       resolve();
//     },1000);
//   });
// }

// async function demo(){
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();


// }
//demo();

// let h1 = document.querySelector("h1");

// function colorchange(color,delay,nextcolor){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//       h1.style.color = color;
//       resolve("color changed!");
      
//     },delay);
//   });
// }
// //above code using await function
// async function demo(){
//    await colorchange("red",1000);
//    await colorchange("orange",1000);
//   await colorchange("green",1000);
//   colorchange("pink",1000);
// }



//handing rejection  we use try{} and catch{}
function mayFail() {
  return new Promise((resolve, reject) => {
      let success = Math.random() > 0.5; // 50% chance of success or failure
      success ? resolve("Success!") : reject("Something went wrong!");
  });
}

async function handlePromise() {
  try {
      let result = await mayFail();  // Wait for the promise
      console.log(result);            // If it succeeds
  } catch (error) {
      console.error("Error:", error); // If it fails
  }
}

handlePromise();





