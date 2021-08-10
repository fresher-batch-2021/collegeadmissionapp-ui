function register() {
    event.preventDefault();
    const name = document.querySelector("#candidateName").value;
    const mobile = document.querySelector("#contactNumber").value;
    const dob = document.querySelector("#dob").value;
    const email = document.querySelector("#email").value;
    const userName = document.querySelector("#userName").value;
    const userPassword = document.querySelector("#userPassword").value;
    const password2 = document.querySelector("#confirmPassword").value;

    let url = "https://product-mock-api.herokuapp.com/collegeadmissionapp/api/v1/auth/register";
    let formData = {
        name: name,
        username: userName,
        dob: dob,
        email: email,
        contactNo: mobile,
        password: userPassword,
        role: "ADMIN"
    }

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
    } else if (userPassword == "") {
        alert("Enter User Password");
        return false;
    } else if (password2 == "") {
        alert("Enter Confirm Password");
        return false;
    } else if (userPassword != password2) {
        alert("Invaid Password");
        return false;
    } else {
        axios.post(url, formData).then(res => {
            let data = res.data;
            console.log(data);
            alert("Successffully Register");
            window.location.href = "login.html";
        }).catch(err => {
            console.error(err);
            alert("Unable to register");
        });
    }

}