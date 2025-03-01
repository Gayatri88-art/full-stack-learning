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
const { v4: uuidv4 } = require('uuid');  //uuid ==>universally unique identifier
const methdOverride = require("method-override");


app.use(express.urlencoded({ extended: true })); //Parses incoming form data.
app.use(methdOverride("_method"));
let posts = [
  {
    id :uuidv4(), //it helps u to get uniqu id's
    username : "Gargi",
    content: "I love coding!"
  },
  {
    id :uuidv4(),
    username : "Sahil",
    content: "I love dev!"
  },
  {
    id :uuidv4(),
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
  let id = uuidv4(); //post create karne ke sath sath ham id bhi create karenge
  posts.push({username,content,id}); //This adds the new username and content into an array named posts (which should be declared somewhere else in your code).
  res.redirect("/posts");///now we will learn something which help us to onnect different pages
  
});

app.patch("/posts/:id",(req,res)=>{ //now we want to create something which help us to get a special edit button so that we can edit that and bring back to that page again
  let {id} = req.params;
  let newContent = req.body.content;
  let post = posts.find((p)=> id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
 
})

app.get("/posts/:id/edit",(req,res)=>{
  let {id} = req.params;
  let post = posts.find((p)=> id === p.id);
  res.render("edit.ejs",{post});
 
})

app.get("/posts/:id",(req,res)=>{
  let {id}= req.params;
  let post = posts.find((p)=> id ===p.id);
  res.render("show.ejs",{post}); //to show the post in details
})

app.delete("/posts/:id",(req,res)=>{
  let {id} = req.params;
  posts = posts.filter((p)=> id !==p.id );
  res.redirect("/posts");
})





app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});


