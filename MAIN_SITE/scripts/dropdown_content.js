
let knives_content = document.querySelector(".knives_content")
let pistols_content = document.querySelector(".pistols_content");
let rifles_content = document.querySelector(".rifles_content");
let smgs_content = document.querySelector(".smgs_content");
let heavy_content = document.querySelector(".heavy_content");

let dd_btn1 = document.querySelector(".dd_btn1")
let ddUP_btn1 = document.querySelector(".ddUP_btn1")

let dd_btn2 = document.querySelector(".dd_btn2")
let ddUP_btn2 = document.querySelector(".ddUP_btn2")

let dd_btn3 = document.querySelector(".dd_btn3")
let ddUP_btn3 = document.querySelector(".ddUP_btn3")

let dd_btn4 = document.querySelector(".dd_btn4")
let ddUP_btn4 = document.querySelector(".ddUP_btn4")

let dd_btn5 = document.querySelector(".dd_btn5")
let ddUP_btn5 = document.querySelector(".ddUP_btn5")


dd_btn1.addEventListener('click', e => {
    rifles_content.style.display = "none";
    smgs_content.style.display = "none";
    pistols_content.style.display = "none";
    heavy_content.style.display = "none";
    dd_btn1.style.display = "none";
    ddUP_btn1.style.display = "inline-block";
    knives_content.style.display = "flex";
    e.preventDefault();
})

ddUP_btn1.addEventListener('click', e => {
    dd_btn1.style.display = "inline-block";
    ddUP_btn1.style.display = "none";
    knives_content.style.display = "none";
    e.preventDefault();
})


dd_btn2.addEventListener('click', e => {
    rifles_content.style.display = "none";
    smgs_content.style.display = "none";
    knives_content.style.display = "none";
    heavy_content.style.display = "none";
    dd_btn2.style.display = "none";
    ddUP_btn2.style.display = "inline-block";
    pistols_content.style.display = "flex";
    e.preventDefault();
})

ddUP_btn2.addEventListener('click', e => {
    dd_btn2.style.display = "inline-block";
    ddUP_btn2.style.display = "none";
    pistols_content.style.display = "none";
    e.preventDefault();
})



dd_btn3.addEventListener('click', e => {
    pistols_content.style.display = "none";
    smgs_content.style.display = "none";
    knives_content.style.display = "none";
    heavy_content.style.display = "none";
    dd_btn3.style.display = "none";
    ddUP_btn3.style.display = "inline-block";
    rifles_content.style.display = "flex";
    e.preventDefault();
})

ddUP_btn3.addEventListener('click', e => {
    dd_btn3.style.display = "inline-block";
    ddUP_btn3.style.display = "none";
    rifles_content.style.display = "none";
    e.preventDefault();
})



dd_btn4.addEventListener('click', e => {
    rifles_content.style.display = "none";
    knives_content.style.display = "none";
    pistols_content.style.display = "none";
    heavy_content.style.display = "none";
    dd_btn4.style.display = "none";
    ddUP_btn4.style.display = "inline-block";
    smgs_content.style.display = "flex";
    e.preventDefault();
})

ddUP_btn4.addEventListener('click', e => {
    dd_btn4.style.display = "inline-block";
    ddUP_btn4.style.display = "none";
    smgs_content.style.display = "none";
    e.preventDefault();
})


dd_btn5.addEventListener('click', e => {
    rifles_content.style.display = "none";
    smgs_content.style.display = "none";
    pistols_content.style.display = "none";
    knives_content.style.display = "none";
    dd_btn5.style.display = "none";
    ddUP_btn5.style.display = "inline-block";
    heavy_content.style.display = "flex";
    e.preventDefault();
})

ddUP_btn5.addEventListener('click', e => {
    dd_btn5.style.display = "inline-block";
    ddUP_btn5.style.display = "none";
    heavy_content.style.display = "none";
    e.preventDefault();
})