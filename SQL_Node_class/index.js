//npm init ==>>npm init is used to initialize a new Node.js project and create a package.json file
//installing package faker ==>> (npm i @faker-js/faker)
//installing package mysql2 ==>> to connect node with sql (npm i mysql2)
//npm i express 
 //npm i uuid
//for templeting we install ejs
 //npm i ejs
 //npm i method-override

//required part
 
 const { faker } = require('@faker-js/faker');

const mysql = require("mysql2");
const express = require("express"); //express ko require kar liya
const app = express();
const path = require("path"); //requiring path
const methodOverride = require("method-override");//requireing method-override



app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true})); //so it can understand by express

app.set("view engine","ejs"); //for ejs
app.set("views",path.join(__dirname,"/views"));

// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'SQL_Class',
  password:'1432',
});


//creating the fake data of 100 user
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
   
  ];
};

app.get("/",(req,res)=>{
let q = `select count(*) from user`;

//querypart
try{
  connection.query(q,(err,result)=>{
    if(err)throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count});
  });
}catch(err){
  console.log(err);
  res.send("some error in db");
}
})

//show user
app.get("/user",(req,res)=>{
  let q = `select * from user`;

  //querypart
  try{
    connection.query(q,(err,users)=>{
      if(err)throw err;
      
      res.render("showusers.ejs",{users});
    });
  }catch(err){
    console.log(err);
    res.send("some error in db");
  }

})

//edit users -1)this will give u a form
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `select * from user where id = '${id}' `;

  try{
    connection.query( q, (err,result)=>{
      if(err)throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in db");
  }
})

// //2)update db route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password: formPass, username:newUsername} = req.body;
  let q = `select * from user where id ='${id}'`;

  
  try{
    connection.query(q,(err,result)=>{
      if(err)throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("wrong password");
      }else{
       
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;

        connection.query(q2,(err,result)=>{
          if(err)throw err;
          res.redirect("/user");
        }) ;
      }
      
    });
  }catch(err){
    console.log(err);
    res.send("some error in db");
  }
});

app.listen("7000",()=>{
  console.log("server is working well");
})




// //inserting new data
// let q = "insert into user (id,username,email,password) values ?";

// let data = [];
// for(let i =1;i<=100;i++){
//   data.push(getRandomUser()); //pushing this data to data ka khali array
// }
 

// //ending the process
// connection.end();



