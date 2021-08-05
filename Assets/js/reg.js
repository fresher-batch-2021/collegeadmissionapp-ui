function register() {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    if (name == "" || name == null || name.trim == "" || name == undefined) {
        alert("Invalid Name");
        return false;
    }
    const mobile = document.querySelector("#contact").value;
    if (mobile == "" || mobile == null || mobile == undefined) {
        alert("Invalid Contact Number");
        return false;
    }
    const dob = document.querySelector("#dob").value;
    if (dob == "") {
        alert("Invalid DOB");
        return false;
    }
    const email = document.querySelector("#email").value;
    if (email == "" || email == null || email == undefined) {
        alert("Invalid Email Address");
        return false;
    }
    const userName = document.querySelector("#user").value;
    if (userName == "" || userName == null || userName == undefined) {
        alert("Invalid UserName");
        return false;
    }
    const password1 = document.querySelector("#pass1").value;
    if (password1 == "") {
        alert("Enter Password");
        return false;
    }
    const password2 = document.querySelector("#pass2").value;
    if (password1 == "") {
        alert("Enter Password");
        return false;
    }
    if (password1 != password2) {
        alert("Invaid Password");
        return false;
    }
   
    let userObj = {

        "Name": name,
        "Contact NO": mobile,
        "DOB": dob,
        "Email": email,
        "UserName": userName,
        "Password1": password1
    };
    console.log(userObj);
    alert("Registration Successful");
    window.location.href = "login.html";
}