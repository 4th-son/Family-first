<<<<<<< HEAD
particlesJS.load('particles-js', 'particles.json');
let barcontainer = document.getElementById("bar-container");
let bars = document.getElementById("bars");
let menu = document.getElementById("menu");
const mq = window.matchMedia("max-width: 760px");
mq.addEventListener("change", event => {
    if (event.matches){
        menu.style.display = "none";
        barcontainer.style.display = "block";
    } 
    else{
        menu.style.display = "block";
        barcontainer.style.dislay = "none";
    }
});

barcontainer.addEventListener("click",()=>{
    if (menu.style.display === "none"){
        menu.style.display = "flex";
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-times");
    }
    else {
        menu.style.display = "none";
        bars.classList.remove("fa-times");
        bars.classList.add("fa-bars");
    }
=======
particlesJS.load('particles-js', 'particles.json');
let barcontainer = document.getElementById("bar-container");
let bars = document.getElementById("bars");
let menu = document.getElementById("menu");
const mq = window.matchMedia("max-width: 760px");
mq.addEventListener("change", event => {
    if (event.matches){
        menu.style.display = "none";
        barcontainer.style.display = "block";
    } 
    else{
        menu.style.display = "block";
        barcontainer.style.dislay = "none";
    }
});

barcontainer.addEventListener("click",()=>{
    if (menu.style.display === "none"){
        menu.style.display = "flex";
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-times");
    }
    else {
        menu.style.display = "none";
        bars.classList.remove("fa-times");
        bars.classList.add("fa-bars");
    }
>>>>>>> 0151cabe37f6991ca438618f7c121790d97d6d43
});