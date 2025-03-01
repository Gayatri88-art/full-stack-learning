// REST(Representational State Transfer)
// REST is an architectural style that defines a set of constraints to be used for creating web services
 
// CRUD Operations:
// GET retrieves resources.
// POST submits new data to the server
// PUT updates existing data
// PATCH update existing data partially
// DELETE removes data

// Creating RESTful APIs

// GET /posts to get data for all posts (FOR indexing like to put the data in sequence)
// POST /posts to add a new post
// GET /posts/:id   to get one post (using id)
// PATCH /posts/:id   to update specific post
// DELETE /posts/:id   to delete specific post

const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); //Parses incoming form data.

let posts = [
  {
    id :"1a",
    username : "Gayatri",
    content: "I love coding!"
  },
  {
    id :"2b",
    username : "Sahil",
    content: "I love dev!"
  },
  {
    id :"3c ",
    username : "Tejas",
    content: "I love db!"
  },
]

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //fixed syntax

app.use(express.static(path.join(__dirname, "public"))); //fixed syntax

app.get("/posts", (req, res) => {
  res.render("index.ejs",{posts});
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs",{posts});
});
app.use(express.static("public"));//so that it can identify public


app.post("/posts", (req, res) => {
  let {username,content}= req.body; //This extracts the username and content fields from the request body (data sent by the client).
  posts.push({username,content}); //This adds the new username and content into an array named posts (which should be declared somewhere else in your code).
  res.redirect("/posts");///now we will learn something which help us to onnect different pages

});

app.get("/posts/:id",(req,res)=>{
  let {id}= req.params;
  let post = posts.find((p)=> id ===p.id);
  res.render("show.ejs",{post}); //to show the post in details
})



app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});


