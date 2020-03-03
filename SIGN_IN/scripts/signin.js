const submit_signIn = document.querySelector("#submit_signIn");

const email = document.querySelector("#email");
const password = document.querySelector("#pw");

let signinForm = document.querySelector(".signinForm");
let content = document.querySelector(".content");


let showHideDiv = document.querySelector(".showHide")
let emailValue = document.querySelector(".emailInput");
let passwordValue = document.querySelector(".passwordInput");

async function addToServer() {

    const inputs = {
        email: email.value,
        password: password.value
    }
    // if (email.value && password.value == true) {
    const res = await axios.post("https://signin-358b9.firebaseio.com/TEST/TEST.json", inputs);
    console.log(res);
    // }
    // else {
    //     if (email.value == null) {
    //         email.style.outline = "2px  rgb(185, 0, 0) solid";

    //     }
    //     else {
    //         password.style.outline = "2px  rgb(185, 0, 0) solid";

    //     }
    // }

}
submit_signIn.addEventListener("click", e => {
    if (emailValue.value == "") {
        emailValue.style.border = "1px red solid";
    }
    else {
        emailValue.style.border = "1px  #2CAC49 solid";
    }
    if (passwordValue.value == "" || passwordValue.value.lenght < 6) {
        passwordValue.style.borderLeft = "1px red solid";
        passwordValue.style.borderTop = "1px red solid";
        passwordValue.style.borderBottom = "1px red solid";
        showHideDiv.style.borderRight = "1px red solid";
        showHideDiv.style.borderTop = "1px red solid";
        showHideDiv.style.borderBottom = "1px red solid";

    }
    else {
        passwordValue.style.borderLeft = "1px #2CAC49 solid";
        passwordValue.style.borderTop = "1px #2CAC49 solid";
        passwordValue.style.borderBottom = "1px #2CAC49 solid";
        showHideDiv.style.borderRight = "1px #2CAC49 solid";
        showHideDiv.style.borderTop = "1px #2CAC49 solid";
        showHideDiv.style.borderBottom = "1px #2CAC49 solid";
    }


    // addToServer();
    // showContent();
    e.preventDefault();

});

function showContent() {

    signinForm.style.display = "none";
    content.innerHTML = "You have successfully signed !"

}





