var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var direction = document.getElementById("direction");
direction.value="top";


function setColors() {
    body.style.background = 
    "linear-gradient(to " + "top" + ", " + 
    "rgb(90, 165, 140)" + 
    ", " + 
    "rgb(16, 4, 17)" + 
    ")";    
    css.textContent = body.style.background + ";";
}

setColors();


function getColor(){
    body.style.background = 
    "linear-gradient(to " + direction.value + ", " + 
    color1.value + 
    ", " + 
    color2.value + 
    ")";
    
    css.textContent = body.style.background + ";";
}


direction.addEventListener("input", getColor);
color1.addEventListener("input", getColor);
color2.addEventListener("input", getColor);