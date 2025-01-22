 
 const post = {
  username:"gayatri varade",
  content:"#this is my first post",
  likes:10000,
  reposts:345,
  tags:["tejas","sahil","rcpit"]
 }

 post["username"]; //or
 post.likes;

 //javascript automatically convert  objects keys to string.

 const list = {
  name:"gayatri",
  age:"20yr",
  gender:"female"

 };
 
 list.name = "sahil";
 list.city;
 list.city = "mumbai";
 list.marks = 99;
 delete list.name;