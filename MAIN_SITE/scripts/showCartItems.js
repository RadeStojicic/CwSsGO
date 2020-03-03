let cart_icon = document.querySelector(".cart");
let cart_content = document.querySelector(".cart_content");


cart_icon.addEventListener("click", e => {
    if (cart_content.style.display === "none") {
        userContent.style.display = "none";
        cart_content.style.display = "flex";
    }
    else {
        cart_content.style.display = "none";
    }

})