const show = document.querySelector(".eye");
const hide = document.querySelector(".eye-slash");
const pw = document.querySelector(".passwordInput")


show.addEventListener("click", e => {
    pw.setAttribute("type", "text");
    hide.style.visibility = "visible";
    show.style.visibility = "hidden";
})

hide.addEventListener("click", e => {
    pw.setAttribute("type", "password");
    hide.style.visibility = "hidden";
    show.style.visibility = "visible";
})


const repeatPasswordInput = document.querySelector(".repeatPasswordInput");
const show3 = document.querySelector(".eye3");
const hide3 = document.querySelector(".eye-slash3")


show3.addEventListener("click", e => {
    repeatPasswordInput.setAttribute("type", "text");
    hide3.style.visibility = "visible";
    show3.style.visibility = "hidden";
})

hide3.addEventListener("click", e => {
    repeatPasswordInput.setAttribute("type", "password");
    hide3.style.visibility = "hidden";
    show3.style.visibility = "visible";
})



const passwordInput2 = document.querySelector(".passwordInput2");
const show2 = document.querySelector(".eye2");
const hide2 = document.querySelector(".eye-slash2");


show2.addEventListener("click", e => {
    passwordInput2.setAttribute("type", "text");
    hide2.style.visibility = "visible";
    show2.style.visibility = "hidden";
})

hide2.addEventListener("click", e => {
    passwordInput2.setAttribute("type", "password");
    hide2.style.visibility = "hidden";
    show2.style.visibility = "visible";
})