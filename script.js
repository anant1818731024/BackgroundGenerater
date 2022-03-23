var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];
var h1 = document.getElementsByTagName("h1")[0];
var h3 = document.querySelector("h3");
var randomPicker1 = document.querySelector("#picker1");
var randomPicker2 = document.querySelector("#picker2");


body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
h3.innerHTML = body.style.background;

function changeBackground(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background;
}
color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

function createRandomColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
    return "#" + randomColor;
}

function changeRandomColor1(){
    color1.value = createRandomColor();
    changeBackground();
}
function changeRandomColor2(){
    color2.value = createRandomColor();
    changeBackground();
}
randomPicker1.addEventListener("click",changeRandomColor1);
randomPicker2.addEventListener("click",changeRandomColor2);