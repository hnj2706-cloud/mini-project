// fisrt box effect on hover : change number randomly
let s1 = document.getElementById("square1");
s1.addEventListener("mouseenter", function() {
    let x = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${x} </h1>`;
})
s1.addEventListener("mouseleave", function() {
    s1.innerHTML = `<h1>1</h1>`;
})


// box 2 effect on hover : change background color in sequence (red, green, blue)
let s2 = document.getElementById("square2");
let clr = "red";
s2.addEventListener("mouseenter", function() {
    if (clr==="red") {
        s2.style.backgroundColor = "red";
        clr = "green";
    }
    else if (clr === "green") {
        s2.style.backgroundColor = "green";
        clr = "blue";
    }
    else {
        s2.style.backgroundColor = "blue";
        clr = "red";
    }
})
s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
})


// box 3 effect on hover : change backround color randomly 
let s3 = document.getElementById("square3");
s3.addEventListener("mouseenter",function() {
    let r = Math.floor(Math.random()*256);        
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
s3.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
})


// box 4 effect on click : change the shade of background color of box 1, 2 & 3
let s4 = document.getElementById("square4")
s4.addEventListener("click", function() {
    let r = Math.floor(Math.random()*256);        
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r}, 255, 255)`;
    s2.style.backgroundColor = `rgb(255, ${g}, 255)`;
    s3.style.backgroundColor = `rgb(255, 255, ${b})`;
})
s4.addEventListener("mouseleave", function() {
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";    
})


//cursor creaation
let mn = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove", function(details) {
    crsr.style.left = details.x + "px"
    crsr.style.top = details.y + "px"
})