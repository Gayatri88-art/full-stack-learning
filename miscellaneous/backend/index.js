//npm init -y
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true})); //handling post request -->>1)set up Post request to get some responnse
                                                                           //2)parse POST request date 
app.get("/register",(req,res)=>{
  let {user}=req.query;
  res.send(`standard GET response ${user}`);
});

app.post("/register",(req,res)=>{
  res.send("standard POST response");
  console.log(req.body);
});

app.listen(port,()=>{
  console.log(`listening to port ${port}`);
})


// 1. __proto__
// __proto__ is an internal reference that links an object to its prototype.
// It allows objects to inherit properties and methods from their prototype.
// Example:
// let arr = [1, 2, 3]; 
// console.log(arr.__proto__ === Array.prototype); // true


// 2. Array.prototype
// Array.prototype is the prototype object for all array instances.
// It contains built-in array methods that all arrays inherit.
// Example:
// console.log(Array.prototype); // Shows all built-in array methods
// console.log(Array.prototype.includes); // Function reference for `includes()`

// 3. String.prototype
// String.prototype is the prototype object for all string instances.
// It contains built-in string methods like .toUpperCase(), .trim(), .split(), etc.
// Example:
// console.log(String.prototype.toUpperCase); 

//factory funtions:==>>is not suitable becaurse it creates copy of that particular object 


//new operators -->>The new operator creates a new object, sets its prototype to the constructor function’s prototype, and executes the constructor function, binding this to the newly created object.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user = new Person("Alice", 25);
// console.log(user.name); // Output: Alice
// console.log(user.age);  // Output: 25

//more efficient method for this is ===>>classes
// classes are templets for creating objects
// the constructor method is a special method of a class for creating and initialising
// AN objects instance of that class



// class Person{  
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//     }
//   talk(){
//     console.log(`Hi, my name is ${this.name}`);
//   }
// }
// let p1 = new Person("gargi",20);
// let p2 = new Person("monu",21);



//==>> 1)) inheritance 
// class Person { //{base class or parent class}
//   constructor(name,age){
//     console.log("person class constructor");
//     this.name = name;
//     this.age = age;
//   }
//   talk(){
//     console.log(`hi, i am ${this.name}`);
//   }
// }
// class Student extends Person{ //we use extends and parent class name
//   constructor(name,age,marks){
//     console.log("student class constructor");
//     super(name,age); //parent class constructor is being called
//     this.marks = marks;

//   }
// }
// class Teacher extends Person{
//   constructor(name,age,subject){
//     console.log("teacher class constructor");
//     super(name,age); //parent class constructor is being called
//     this.subject = subject;

//   }
// }
// let t1 = new Teacher("tejas",24,"dbms");
// console.log(t1);
// let s1 = new Student("gargi",20,90);
// console.log(s1);


//2))
class Mammal {
  constructor(name){
    this.name = name;
    this.type = "warm-blooded";
  }
  eat(){
    console.log("i am eating");
  }
}

class Dog extends Mammal{
  constructor(name){
    super(name);
  }
  bark(){
    console.log("wooff..");
  }
}

class Cat extends Mammal{
  constructor(name){
    super(name);
  }
  meow(){
    console.log("meow...");
  }
}

let dog1 = new Dog("tommy");
console.log(dog1);




