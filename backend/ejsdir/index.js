const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
  res.render("home.ejs"); // render is useful to send files on server
}); 

app.get("/rolldice",(req,res)=>{
  let num = Math.floor(Math.random()*6)+1
  res.render("rolldice",{num}); // render is useful to send files on server
}); 

app.listen(port,()=>{
  console.log(`listening on port ${port}`)
});


//as we globally install nodemon
//nodemon index.js


//interpolation syntax
//interpolation  refers to the embeddiing expression into marked up text
//ejs.co --<< for more informations







