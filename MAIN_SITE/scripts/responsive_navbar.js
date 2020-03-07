const hamburger_btn = document.querySelector(".hamburger");
let hamburger_content = document.querySelector(".responsive_navbar");
let firstC = document.querySelector(".firstC");
let secondC = document.querySelector(".secondC");

// let width = Math.max(window.screen.width, window.innerWidth);



hamburger_btn.addEventListener('click', e => {
    if (hamburger_content.style.display === "none") {
        hamburger_content.style.display = "grid";
    }
    else {
        hamburger_content.style.display = "none";
    }
})


