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

