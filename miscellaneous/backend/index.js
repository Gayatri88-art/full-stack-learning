//npm init -y
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true})); //handling post request -->>1)set up Post request to get some responnse
                                                                           //2)parse POST request date 
app.get("/register",(req,res)=>{
  let {user}=req.query;
  res.send(`standard GET response ${user}`);
});

app.post("/register",(req,res)=>{
  res.send("standard POST response");
  console.log(req.body);
});

app.listen(port,()=>{
  console.log(`listening to port ${port}`);
})


// 1. __proto__
// __proto__ is an internal reference that links an object to its prototype.
// It allows objects to inherit properties and methods from their prototype.
// Example:
// let arr = [1, 2, 3]; 
// console.log(arr.__proto__ === Array.prototype); // true


// 2. Array.prototype
// Array.prototype is the prototype object for all array instances.
// It contains built-in array methods that all arrays inherit.
// Example:
// console.log(Array.prototype); // Shows all built-in array methods
// console.log(Array.prototype.includes); // Function reference for `includes()`

// 3. String.prototype
// String.prototype is the prototype object for all string instances.
// It contains built-in string methods like .toUpperCase(), .trim(), .split(), etc.
// Example:
// console.log(String.prototype.toUpperCase); 