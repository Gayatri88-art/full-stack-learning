 
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
 console.log(list);
 
 list.name = "sahil";
 console.log(list.name);
 list.city;
 list.city = "mumbai";
 list.marks = 99;
 delete list.name;


//  const stu_info = {
//   gayatri: {
//     age:20,
//     grade:"A",
//   },
//   sahil: {
//     age:20,
//     grade:"o",
//   },
//   mayuri: {
//     age:20,
//     grade:"o",
//   },
//   sanika: {
//     age:20,
//     grade:"A+",
//   },
//  }
//  console.log(stu_info);
 
 
//  console.log(stu_info.gayatri);
//  console.log( delete stu_info.gayatri.age);

const stu_info = [

  {name:"gayatri",
    age:20,
    grade:"A",
  },
   {name:"sahil",
    age:20,
    grade:"o",
  },
   {name:"mayuri",
    age:20,
    grade:"o",
  },
  {name:"sanika",
    age:20,
    grade:"A+",
  },
]
 console.log(stu_info);
 console.log(stu_info[0].name = "gargi");
 console.log(stu_info[2].gender = "female");
 console.log(stu_info[2]);





