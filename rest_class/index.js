// REST(Representational State Transfer)
// REST is an architectural style that defines a set of constraints to be used for creating web services
 
// CRUD Operations:
// GET retrieves resources.
// POST submits new data to the server
// PUT updates existing data
// PATCH update existing data partially
// DELETE removes data

// Creating RESTful APIs

// GET /posts to get data for all posts
// POST /posts to add a new post
// GET /posts/:id   to get one post (using id)
// PATCH /posts/:id   to update specific post
// DELETE /posts/:id   to delete specific post

const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); //Parses incoming form data.

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //fixed syntax

app.use(express.static(path.join(__dirname, "public"))); //fixed syntax

app.get("/", (req, res) => {
  res.send("server working well!");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});


