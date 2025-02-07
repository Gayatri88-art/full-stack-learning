//axios ==>> library to make HTTP request
//to print randome facts about cats
// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//   let fact = await getFacts();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;

 
//   async function getFacts() {
//     try{
//       let res = await axios.get(url);
//       return res.data.fact;

//     }
//     catch(e){
//       console.log("error-", e);
//       return "no fact found";
//     }
//   }

// })



//to print random pictures of dog

let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
  let link = await getImage();
  let img = document.querySelector("#result");
  img.setAttribute("src",link);
  console.log(link);
});
 
  async function getImage() {
    try{
      let res = await axios.get(url);
      return res.data.message;

    }
    catch(e){
      console.log("error-", e);
      return "no img found";
    }
  }

