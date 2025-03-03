//npm init
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



try{
  connection.query("SHOW TABLES",(err,result)=>{
    if(err)throw err;
    console.log(result);
  });
}catch(err){
  console.log(err);
}
connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), 
    email: faker.internet.email(),
    password: faker.internet.password(),
   
  };
};
console.log(getRandomUser());

