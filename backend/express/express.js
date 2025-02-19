

// ## library ==>> library is the collection of pre-written codes that can be used  to perform a specific task
// ex - axios
// ## framework ==>> framework is set of pre-written codes that provieds  structurs for devloping software application
// ex - express

// express -->> express is a Node.js application framework that help us to make web application 
//           it is used for server side programming
//         working:-
//           1)listen for incoming request
//           2)pass request 
//           3)match response with routes
//           4)response

// i perform (npm init) to initialize my directory

//npm install express

 const express = require("express");
 const app = express();
 
 let port = 3000;

 app.listen(port , ()=>{
  console.log(`app is listening on port ${port}`);
 });

 app.get("/",(req,res)=>{
  res.send("you contacted rootpath");
});

app.get("/apple",(req,res)=>{
  res.send("you contacted  apple path");
});
app.get("/banana",(req,res)=>{
  res.send("you contacted  banana path");
});
app.get("/carry",(req,res)=>{
  res.send("you contacted  carry path");
});
app.get("*",(req,res)=>{
  res.send("path  doesnot exist"); //it will help you to reach requires page means all of them
});


//app.send (POST is used to send data to the server)
app.post("/",(req,res)=>{
  res.send("you sent a post request");
});



//  app.use((req,res)=>{
//   console.log("request recevied");
//   console.log(`app is listening on port ${port}`);

  // res.send({
  //   name:"apple",
  //   color:"red",
  // });
  // let code =" <h1>List of Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>";
  // res.send(code)
// });                              // for running this part u need to open  localhost:3000 on the browser at the same time



//  port -->>A port in computer networking is a communication endpoint. It acts as a logical channel through which data is exchanged between devices over a network.

// Key Points:
// Ports are identified by numbers (e.g., 80, 443, 3000).
// Each port number is associated with a specific process or service.

//app.get (GET is used to retrieve data from the server.)

