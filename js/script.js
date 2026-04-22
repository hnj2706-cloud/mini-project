/**  DOM Manipulation  **/
// let y = document.querySelector("h3");
// console.log(y)

// let x = document.querySelectorAll("h1");
// console.log(x);

// let x = document.querySelectorAll(".yes");
// console.log(x);

// let y = document.querySelector("h2");
// y.style.color = "red";
// y.style.fontFamily =  "Gill sans";
// y.style.backgroundColor = "yellow";

// setTimeout(function(){
//     y.innerHTML = "Changed";
// }, 2*1000);

//** Event Listeners in DOM **/
let x = document.getElementById("ele1");
x.addEventListener("click",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
}) 
x.addEventListener("mouseleave",function(){
    x.style.color = "black";
    x.style.backgroundColor = "white";
}) 

let y = document.getElementById("ele2");
y.addEventListener("mousemove",function() {
    y.style.color = "white";
    y.style.backgroundColor = "orange";
})
y.addEventListener("mouseleave",function() {
    y.style.color = "black";
    y.style.backgroundColor = "white";
})

let z = document.getElementById("ele3");
y.addEventListener("click",function() {
    z.style.color = "white"
    z.style.backgroundColor = "purple";
})