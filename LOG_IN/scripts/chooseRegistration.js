let signInText = document.querySelector(".signInText");
let signUpText = document.querySelector(".signUpText");

let signinContent = document.querySelector(".signinForm");
let signupContent = document.querySelector(".signupForm");



signUpText.addEventListener("click", e => {
    signinContent.style.display = "none";
    signupContent.style.display = "flex";
    e.preventDefault();
    signInText.classList.remove("active");
    signUpText.classList.add("active");
})


signInText.addEventListener("click", e => {
    signinContent.style.display = "flex";
    signupContent.style.display = "none";
    e.preventDefault();
    signInText.classList.add("active");
    signUpText.classList.remove("active");
})

