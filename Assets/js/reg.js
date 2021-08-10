function register() {
    event.preventDefault();
    const name = document.querySelector("#candidateName").value;
    const mobile = document.querySelector("#contactNumber").value;
    const dob = document.querySelector("#dob").value;
    const email = document.querySelector("#email").value;
    const userName = document.querySelector("#userName").value;
    const password1 = document.querySelector("#userPassword").value;
    const password2 = document.querySelector("#confirmPassword").value;

    if (name == "" || name == null || name.trim() == "" || name == undefined) {
        alert("Invalid Name");
        return false;
    } else if (mobile == "" || mobile == null || mobile == undefined) {
        alert("Invalid Contact Number");
        return false;
    } else if (dob == "") {
        alert("Invalid DOB");
        return false;
    } else if (email == "" || email == null || email == undefined) {
        alert("Invalid Email Address");
        return false;
    } else if (userName == "" || userName == null || userName == undefined) {
        alert("Invalid UserName");
        return false;
    } else if (password1 == "") {
        alert("Enter User Password");
        return false;
    } else if (password2 == "") {
        alert("Enter Confirm Password");
        return false;
    } else if (password1 != password2) {
        alert("Invaid Password");
        return false;
    } else {
        let userObj = {

            "name": name,
            "contactNumber": mobile,
            "dateOfBirth": dob,
            "email": email,
            "userName": userName,
            "password": password1
        };
        console.log(userObj);
        alert("Registration Successful");
        window.location.href = "login.html";
    }
}
