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
let h1 =document.querySelector('h1');

h1.parentElement;
    let box =document.querySelector('.container');

box.children;
    let ul =document.querySelector('ul');

ul.parentElement;
ul.children

ul.children[1];
ul.children[1].previousElementSibling;
ul.children[1].nextElementSibling;
let photo = document.querySelector('img');

photo;
photo.nextElementSibling.style.Color= "red";


//adding elements on page
let newc = document.createElement('newc');
newc;
console.dir('newc');
newc.innerText = "my name is gargi";
let boxies = document.querySelector('.box');
boxies.appendChild(newc); //new line will be added to the box class div

//btn
let btn = document.createElement('btn');

console.dir(btn);

btn.innerText = "click me!";
let newone= document.querySelector('.box');
newone.appendChild(btn);
newone.append("gargii");//append
newone.prepend("pehele dikhega");//prepend


let fox = document.createElement('btn');//insert adjacentelement
console.dir(fox);
fox.innerText = "NEW BUTTON !!!";
let z =document.querySelector('.box');
z.insertAdjacentElement('beforebegin',fox);
z.insertAdjacentElement('afterbegin',fox);<btn>​NEW BUTTON !!!​</btn>​

z.insertAdjacentElement('beforeend',fox);
z.insertAdjacentElement('afterend',fox);





