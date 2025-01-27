console.dir(document.getElementById("gayuu"));
console.dir(document.getElementsByClassName("container"));
console.dir(document.getElementsByTagName("p")[1].innerText="new content");
console.dir(document.querySelector('p'));
console.dir(document.querySelector('.second'));


console.dir(document.querySelectorall("div a"));

console.dir(document.querySelectorall("div a"));
console.dir(document.querySelectorall("div a"));
console.dir(document.querySelectorall("div a"));

let para = document.querySelector('p');
console.log(para);
console.log(para.innerText);//it shows all content which showing on the screen
console.log(para.innerHTML);//it shows all content with all tags
console.log(para.textContent);//it shows all content as per the html file
console.log(para.innertext = "abcd"); //now it will visible on the screen.


let heading =document.querySelector('h1');
heading.innerText;
heading.innerHTML = "<u>Welcome to My Webpage </u>";



let picturs = document.querySelector('img');
picturs;
picturs.getAttribute('id');
picturs.setAttribute('id','dharal');
picturs.getAttribute('id');
