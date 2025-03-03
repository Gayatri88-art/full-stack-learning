//npm init ==>>npm init is used to initialize a new Node.js project and create a package.json file
//installing package faker ==>> (npm i @faker-js/faker)
//installing package mysql2 ==>> to connect node with sql (npm i mysql2)
const { faker }= require("@faker-js/faker");
const mysql = require("mysql2");


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

//inserting new data
let q = "insert into user (id,username,email,password) values ?";

let data = [];
for(let i =1;i<=100;i++){
  data.push(getRandomUser()); //pushing this data to data ka khali array
}
 
//querypart
try{
  connection.query(q,[data],(err,result)=>{
    if(err)throw err;
    console.log(result);
  });
}catch(err){
  console.log(err);
}
//ending the process
connection.end();




