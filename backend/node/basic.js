//node.js is runtime environment
//it is used for server side programming
// node.js is not a language,library ,frame work

// Node REPL -->> READ
//                 EVALUATE
//                 print
//                 LOOP


// to run nodde files in terminal we use folloing commands
//  node filename.js

let n = 5;
for(i=1; i<=5;i++){
  console.log("hellow",i);
}
console.log("bye!");
console.log(process.argv); //<<--by default ya madhe 2 value astat ek file chi location ani ek executable path for node

//process in node
//  this object provides information about, and control over the current Node.js ProcessingInstruction.
 //node -->ke andar
//  process
//  process.release
//  process.cwd(); <== it will give u current working directory

// process.argv: return an array containing the commands-line arguments passed when the Node,js process 
// was lanunched

let args = process.argv;
for(i=2;i<args.length; i++ ){
  console.log("hello to ",args[i]);
}
const fruits = require("./export_in directories");
//Useful for passing inputs when running scripts! 🎯

// math.js madhe use lekele finction mala ya file meadhe use karayche aahe 
// module.exports --<< a special object
//require("./path likhna hota hai yaha") -->>a built in function to include external modules that exist in separate files

const someValue = require("./math");
console.log(someValue);

const math = require("./math");
console.log(math.sum(2,2));
console.log(math.mul(2,2));
console.log(math.g);
console.log(math.PI);


// dusri directory se info lene ke lia 
const info = require("./export_in directories");
console.log(info);

//node package manager(npm)
//1) library of packages
//2)command line tool

//install packages
npm install 


