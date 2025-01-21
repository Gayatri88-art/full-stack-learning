
for( let i=1;i<=6;i++){
  console.log(i);
}

for(let i = 1; i<=15; i = i+2){
  console.log(i);
}

console.log("backward:")
for(let i = 15; i>=1; i = i-2){
  console.log(i);
}

for(let i = 2; i<=10; i = i*2){
  console.log(i);
}

for(let i = 2; i<=50; i = i+2){
  console.log(i);
}

for(let i = 5; i<=50; i = i+5){
  console.log(i);
}

// let n = prompt("enter your number:-");
// n = parseInt(n);
// for( let i=n;i<=n*10;i=i+n){
//   console.log(i);
// }

for(let i=1;i<=5;i++){
  for(let j=1;j<=6;j++){
    console.log(j);
  }
}

let i = 1; //white loop
while(i<=15){
  console.log(i);
  i++;
}

const favmovie = "vivah";
let guess = prompt("enter my favmovies name:-");
while(guess!="vivah"){
  if(guess=="quit"){
    console.log("you quit");
    break;
  }
    guess = prompt("wront! please try again");
}
if(guess==favmovie){
  console.log("congrats!");
}