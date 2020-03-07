const hamburger_btn = document.querySelector(".hamburger");
const hamburger_content = document.querySelector(".responsive_navbar");


hamburger_btn.addEventListener('click', e => {
    if (hamburger_content.style.display === "none") {
        hamburger_content.style.display = "grid";
    }
    else {
        hamburger_content.style.display = "none";
    }
})