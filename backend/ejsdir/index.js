const { render } = require("ejs");
const express = require("express");
const app = express();

const port = 8080;

app.set("view engine","ejs");
app.get("/",(req,res)=>{
  res.render("home.ejs"); // render is useful to send files on server
}); 

app.listen(port,()=>{
  console.log(`listening on port ${port}`)
});


//as we globally install nodemon
//nodemon index.js