//npm init -y
const express = require("express");
const app = express();
const port = 3000;

app.get("/register",(req,res)=>{
  let {user}=req.query;
  res.send(`standard GET response ${user}`);
});

app.post("/register",(req,res)=>{
  res.send("standard POST response");
});

app.listen(port,()=>{
  console.log(`listening to port ${port}`);
})
