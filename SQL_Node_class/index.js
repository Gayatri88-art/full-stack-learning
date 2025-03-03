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

//inserting new data
let q = "insert into user (id,username,email,password) values ?";
let users = [
  ["123b","123_newuserb","abc@gmail.comb","abcb"],
  ["123c","123_newuserc","abc@gmail.comc","abcc"]
];



//querypart
try{
  connection.query(q,[users],(err,result)=>{
    if(err)throw err;
    console.log(result);
  });
}catch(err){
  console.log(err);
}
//ending the process
connection.end();

// let getRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), 
//     email: faker.internet.email(),
//     password: faker.internet.password(),
   
//   };
// };
// console.log(getRandomUser());

