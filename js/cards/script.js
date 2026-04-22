let main = document.getElementById("main");
let arr = ["https://pngimg.com/uploads/pokemon/pokemon_PNG157.png",
           "https://pngimg.com/uploads/pokemon/pokemon_PNG154.png",
           "https://pngimg.com/uploads/pokemon/pokemon_PNG17.png",
           "https://pngimg.com/uploads/pokemon/pokemon_PNG29.png",
           "https://pngimg.com/uploads/pokemon/pokemon_PNG32.png",
           "https://pngimg.com/uploads/pokemon/pokemon_PNG77.png"];
let s = "";
for (let i = 1; i<=60; i++) {
    let r = Math.floor(Math.random()*6);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;




/**
"https://pngimg.com/uploads/pokemon/pokemon_PNG157.png",
"https://pngimg.com/uploads/pokemon/pokemon_PNG154.png",
"https://pngimg.com/uploads/pokemon/pokemon_PNG17.png",
"https://pngimg.com/uploads/pokemon/pokemon_PNG29.png",
"https://pngimg.com/uploads/pokemon/pokemon_PNG32.png",
"https://pngimg.com/uploads/pokemon/pokemon_PNG77.png"
**/