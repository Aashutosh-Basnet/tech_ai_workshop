let div1 = document.getElementById("div1");

console.log(div1);  

div1.innerText = "Hello World!";

let div2 = document.getElementById("div2");

div2.innerHTML = "<h1>Welcome to JavaScript!</h1>";

div2.style.color = "blue";
div2.style.backgroundColor = "red";


let divs = document.getElementsByClassName("divs");

console.log(divs);

let div_selector = document.querySelectorAll("div")
console.log(div_selector)