const express = require("express");
const app = express();

const port = 8080;

app.listen(port,()=>{
  console.log(`listening on port ${port}`)
});
//as we globally install nodemon
//nodemon index.js