//stack -->> stack is LIFO (last in first out)
// function one(){
//   return 1;
// }
// function two(){
//   return one() + one();
// }
// function three(){
//  let ans =  two()+ one();
//  console.log(ans);
// }
// three();

// //js is single threaded language
// setTimeout(()=>{
//   console.log("apna college")

// },2000);
// console.log("hiiiiiiiu");


//callback nesting-->>callback hell
// let h1 = document.querySelector("h1");
// function colorchange(color,delay,nextcolor){
//   setTimeout(() =>{
//     h1.style.color = color;
//     if(nextcolor)nextcolor();
//   },delay);
// }
// colorchange("red",1000,()=>{
//   colorchange("green",1000,()=>{
//     colorchange("pink",1000,()=>{
//       colorchange("blue",1000,()=>{
//         colorchange("orange",1000,()=>{

//         });
//       });
//     });
//   });
// });

//above code in simple way or you can understand this code more easily
function colorchange(color,delay,nextcolor){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      h1.style.color = color;
      resolve("color changed!");
      
    },delay);
  });
}

//above code using await function
async function demo(){
   await colorchange("red",1000);
   await colorchange("orange",1000);
  await colorchange("green",1000);
  colorchange("pink",1000);



}

// colorchange("red",1000)
// .then(()=>{
//   console.log("red color was completed");
//   return colorchange("orange",1000);
// })
// .then(()=>{
//   console.log("orange color was completed");
//   return colorchange("green",1000);
// })
// .then(()=>{
//   console.log("green color was completed");
//   return colorchange("pink",1000);
// })
// .then(()=>{
//   console.log("pink color was completed");
  
// });







//the promises object represent the eventual completion or failure od asyncronous operation and its resultion value.
//following code create confusion so that to overcome this we have another method which was implimented
//refactoring with promises -->> or by promises chaining

// function savetoDb(data,success,failure){
//   let internetSpeed = Math.floor(Math.random()*10)+1;
//   if(internetSpeed>4){
//     success();
//   }else{
//     failure();
//   }
// }
// savetoDb(
//   "hiiiii",
//   ()=>{
//     console.log("success:data saved");
//     savetoDb(
//       "word",
//       ()=>{
//         console.log("success2:data saved");
//         savetoDb(
//           "gargii",
//           ()=>{
//             consol.log("success3:data saved");
//           },
//           ()=>{
//             console.log("failure3:weak connection");
//           },
//         );
//       },
//       ()=>{
//         console.log("failure2:weak  connection");
//       },
//     );
//   },
//   ()=>{
//     console.log(" failure:weak connection");
//   },
// );

//refactoring with promises (promisesw are objects they return value in two way rejected or resolve )\
// function savetoDb(data){
//   return new Promise((success,failure)=>{
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//       success("success:data stored");
//     }else{
//       failure("failure:weak connection");
//     }

//   });
// }
//inpute savetoDb("apna college");



// then() catch() method -->> promises ke hi ye 2 method hai
//consition fulfill hone ke baad-->>then()
//otherwise -->>catch()

// savetoDb("apna college")
//   .then(()=>{
//     console.log("promise was accepted");
    
//   })
//   .catch(()=>{
//     console.log("promise was rejected");
    
//   });

//promise chainning-->> call hell se more readable hai ye method

// savetoDb("apna college")
//   .then((result)=>{
//     console.log("promise1: was saved");
//     console.log("result of promise:",result);

//     return savetoDb("gargii");
//   })
//   .then((result)=>{
//     console.log("promise2: was saved");
//     console.log("result of promise:",result);
 
//     return savetoDb("gayatri");
    
//   })
//   .then((result)=>{
//     console.log("promise3: was saved");
//     console.log("result of promise:",result);
//   })

//   .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("result of promise:",error);
//   });

  //promises are reject or accepted with some data












