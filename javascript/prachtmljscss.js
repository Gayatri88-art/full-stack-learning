// let para1 = document.createElement('p');
// para1.innerText = "hey i am red1";
// document.querySelector('body').append(para1);
// para1.classList.add("red");

// let h3 = document.createElement('h3');
// h3.innerText = "hey i am blue!!";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2= document.createElement('p');

// h1.innerText = "i am in a div!!";
// para2.innerText = "ME TOO!!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector("body").append(div);




// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'
// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.
// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.
// Ans 1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Ans 2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Ans 3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Ans 4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

// Ans 5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);

