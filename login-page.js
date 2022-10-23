var lname;
var lpass;

localStorage.setItem(lname, "user01");
const uname01 = localStorage.getItem(lname);
console.log(uname01);
localStorage.setItem(lpass, "pass01");
const pass01 = localStorage.getItem(lpass);
console.log(pass01);
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === uname01 && password === pass01) {
        location.replace("./Resume.html");
        alert("You have successfully logged in.");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
