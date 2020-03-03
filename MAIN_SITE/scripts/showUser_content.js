let userIcon = document.querySelector(".user");
let userContent = document.querySelector(".user_content");

userIcon.addEventListener("click", e => {
    if (userContent.style.display === "none") {
        cart_content.style.display = "none";
        userContent.style.display = "flex";
    }
    else {
        userContent.style.display = "none";
    }


})




