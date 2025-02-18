

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
 })

//  poer -->>A port in computer networking is a communication endpoint. It acts as a logical channel through which data is exchanged between devices over a network.

// Key Points:
// Ports are identified by numbers (e.g., 80, 443, 3000).
// Each port number is associated with a specific process or service.