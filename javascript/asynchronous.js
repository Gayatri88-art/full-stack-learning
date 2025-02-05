//day-->>26

 //async keyword:=create an async function
 //by default ye promise return karta hai


async function greet() {
 // throw "404 page not found";
  return"hellow";
}
greet()
.then((result)=>{
  console.log("promised was resolved");
  console.log("result was:",result);
})
.catch((err)=>{
  console.log("promise was rejected",err);
});

let demo = async ()=>{
  return 5;
};
     




