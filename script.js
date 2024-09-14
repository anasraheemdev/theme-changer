const grey = document.getElementById("gry");
grey.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#808080";
    document.querySelector("nav").style.backgroundColor = "#808090";
    document.querySelector("p").style.color = "white";
    document.getElementById("heding").style.color = "white";
    alert("Congratulations Your Background Color Has Changed to Grey");

})

let white = document.getElementById("wht");
white.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("nav").style.backgroundColor = "white";
    document.querySelector("p").style.color = "black";
    document.getElementById("heding").style.color = "black";
    alert("Congratulations Your Background Color Has Changed to White");
})

let blue = document.getElementById("blu");
blue.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector("nav").style.backgroundColor = "lightblue";
    document.querySelector("p").style.color = "white";
    document.getElementById("heding").style.color = "white";
    alert("Congratulations Your Background Color Has Changed to Blue");
})

let yellow = document.getElementById("ylw");
yellow.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector("nav").style.backgroundColor = "#F4CD35"
    document.querySelector("p").style.color = "black";
    document.getElementById("heding").style.color = "black";
    alert("Congratulations Your Background Color Has Changed to Yellow");
})