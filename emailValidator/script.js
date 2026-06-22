let email = document.querySelector("#email");
let password = document.querySelector("#passoword");
let form = document.querySelector("form");

form.addEventListener("submit" , function(dets){
    dets.preventDefault();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans) {
        document.querySelector("emailError").textContent = "Email is in correct";

    }

    if(!passwordans) {
        document.querySelector("#passwordError").textContent = "Password is in correct"
    }
})