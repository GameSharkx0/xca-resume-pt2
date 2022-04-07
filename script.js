const checkpoint = 300;
const checkpoint2 = 100;
const button = document.getElementById("hamburger-circle");
const buttonX = document.getElementById("circle-x");
const buttonC = document.getElementById("circle-burger");
const sideBar = document.getElementById("side-bar")
const colors = ["#292A44", "#22277A"];
let buttonActive = false;
let colorsIndex = 0;
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".video-text").style.opacity=opacity;
    document.querySelector(".smaller").style.opacity=opacity;
});

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint2) {
        opacity = 0
    } else {
        opacity = currentScroll / checkpoint;
    }
    document.querySelector("#logo-card").style.opacity=opacity;
});

button.addEventListener("mouseover", function(event){
    button.style.backgroundColor = colors[1];
});

button.addEventListener("mouseout", function(event){
    if (!buttonActive){
        button.style.backgroundColor = colors[0];
    }
});

button.addEventListener("click", function onClick(event){
    if (colorsIndex === 0){
        colorsIndex++;
        button.style.backgroundColor = colors[colorsIndex];
        buttonC.style.display = "none";
        buttonX.style.display = "block";
        sideBar.style.translate = "-150px";
        buttonActive = true;
    } else if (colorsIndex === 1) {
        colorsIndex--;
        button.style.backgroundColor = colors[colorsIndex];
        buttonC.style.display = "block";
        buttonX.style.display = "none";
        sideBar.style.translate = "150px";
        buttonActive = false;
    }
});