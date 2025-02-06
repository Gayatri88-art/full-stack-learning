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
// function mayFail() {
//   return new Promise((resolve, reject) => {
//       let success = Math.random() > 0.5; // 50% chance of success or failure
//       success ? resolve("Success!") : reject("Something went wrong!");
//   });
// }

// async function handlePromise() {
//   try {
//       let result = await mayFail();  // Wait for the promise
//       console.log(result);            // If it succeeds
//   } catch (error) {
//       console.error("Error:", error); // If it fails
//   }
// }

// handlePromise();

//API-->> application programming interface
//     -->>it return the data in the form of JSON


//JSON-->>javascript object notation(www.json.org)<=== use this website for extra info


//JSON.parse <<== EK DATA data formate se dusre me jane ke lia ye function use karte hai
             //to convert the string data into js object

//JSON.stringify  <<== js object to json

// let jsonRes = '{"fact": "Cats have five toes on their front paws, but only four on their back paws.","length": 68}'
// let validRes =JSON.parse(jsonRes);
// console.log(validRes.fact);



//testing API request in hoppscoch or postman 


//Ajax-->>  asynchronous javascript and XML


//http verbs -->> 1)get==> jab koe data ya info leni ho 
//                   2)post ==> jab kuch data post karna ho ya bhejna ho
//                   3)delete==>delete karna ho


//status codes==> 404 -- page not found
//                  400 -- bad request
//                  200 -- ok everything is done succesfully
//                  500 -- internal server error


// add info in urls -->>
//                 https://www.google.com/search?q=harry + porter
//                 here q = key
//                 value = harry porter

//http headers ==>> header,value 

let url= "https://catfact.ninja/fact";

fetch(url)
.then((res1)=>{
  console.log(res1);
  return res1.json();
})
.then((data)=>{
  console.log("data1-",data.fact);
})
.then((res2)=>{
  return res2.json(); 

})
.then((data2)=>{
  console.log("data2-",data2.fact);
})
.catch((err)=>{
  console.log("error-",err);
});
console.log("i am happy!!");






