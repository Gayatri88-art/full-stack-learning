//use concole to run the command



// console.dir(document.getElementById("gayuu"));
// console.dir(document.getElementsByClassName("container"));
// console.dir(document.getElementsByTagName("p")[1].innerText="new content");
// console.dir(document.querySelector('p'));
// console.dir(document.querySelector('.second'));


// console.dir(document.querySelectorall("div a"));

// console.dir(document.querySelectorall("div a"));
// console.dir(document.querySelectorall("div a"));
// console.dir(document.querySelectorall("div a"));

// let para = document.querySelector('p');
// console.log(para);
// console.log(para.innerText);//it shows all content which showing on the screen
// console.log(para.innerHTML);//it shows all content with all tags
// console.log(para.textContent);//it shows all content as per the html file
// console.log(para.innertext = "abcd"); //now it will visible on the screen.


// let heading =document.querySelector('h1');
// heading.innerText;
// heading.innerHTML = "<u>Welcome to My Webpage </u>";



// let picturs = document.querySelector('img');
// picturs;
// picturs.getAttribute('id');
// picturs.setAttribute('id','dharal');
// picturs.getAttribute('id');


// let headings =document.querySelector('h1');
// headings.style;
// headings.style.color = "red";
// headings.style.backgroundColor = "green";


//styling using s
let links = document.querySelectorAll(".list-section a");
// for(let i = 0; i<=links.length;i++){
//   links[i].style.color ="red"; 

// }
//another way
for(link of links){
  link.style.color = "green";
}


//classlist

let a = document.querySelector('img');
a.classList;
let heading = document.querySelector('h1');

heading.classList;
heading.classList.add('green');
heading.classList.remove('green');
heading.classList.contains("underline");//false

heading.classList.contains("ok");//true
heading.classList.toggle("underline");//asel tar kadhun takel ani nasel tar add karel



//navigation



