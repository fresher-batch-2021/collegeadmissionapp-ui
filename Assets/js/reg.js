function register() {
    event.preventDefault();
    const candidateName = document.querySelector("#candidateName").value;
    const mobileNumber = document.querySelector("#contactNumber").value;
    const dob = document.querySelector("#dob").value;
    const email = document.querySelector("#email").value;
    const userName = document.querySelector("#userName").value;
    const userPassword = document.querySelector("#userPassword").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    let registerData = {
        "regName": candidateName,
        "regMobileNumber": mobileNumber,
        "regEmail": email
    };

    let url = "https://product-mock-api.herokuapp.com/collegeadmissionapp/api/v1/auth/register";
    let formData = {
        name: candidateName,
        username: userName,
        dob: dob,
        email: email,
        contactNo: mobileNumber,
        password: userPassword,
    }

    if (candidateName == "" || candidateName == null || candidateName.trim() == "") {
        alert("Candidatename Cannot be Blank");
        return false;
    } else if (mobileNumber == "" || mobileNumber == null || mobileNumber.length != 10) {
        alert("Mobile Number Cannot be Blank");
        return false;
    } else if (dob == "") {
        alert("DOB Cannot be Blank");
        return false;
    } else if (email == "" || email == null) {
        alert("Email Cannot be Blank");
        return false;
    } else if (userName == "" || userName == null) {
        alert("UserName Cannot be Blank");
        return false;
    } else if (userPassword == "" || userPassword.length < 8 || userPassword.length > 15) {
        alert("UserPassword contain atleast 8 Characters");
        return false;
    }
    else if (confirmPassword == "" || confirmPassword.length < 8 || confirmPassword.length > 15) {
        alert("ConfirmPassword contain atleast 8 Characters");
        return false;
    }
    else if (userPassword != confirmPassword) {
        alert("Password does not match with ConfirmPassword");
        return false;
    } else {

        axios.post(url, formData).then(res => {
            let data = res.data;
            console.log(data);
            alert("Successffully Register");
            localStorage.setItem('registerData', JSON.stringify(registerData));
            window.location.href = "login.html";
        }).catch(err => {
            console.error(err);
            alert("Unable to register");
        });
    }

}