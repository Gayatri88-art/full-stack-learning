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
console.log(process.argv);

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
