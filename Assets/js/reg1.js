function register() {
    event.preventDefault();
    const candidateName = document.querySelector("#candidateName").value;
    const mobileNumber = document.querySelector("#contactNumber").value;
    const dob = document.querySelector("#dob").value;
    const email = document.querySelector("#email").value;
    const userName = document.querySelector("#userName").value;
    const userPassword = document.querySelector("#userPassword").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    try {

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

        Validator.isValidString(candidateName, "Candidatename Cannot be Blank");
        Validator.isValidString(mobileNumber, "Mobile Number Cannot be Blank");
        Validator.isValidString(dob, "DOB Cannot be Blank");
        Validator.isValidString(email, "Email Cannot be Blank");
        Validator.isValidString(username, "UserName Cannot be Blank");
        Password.isValidPassword(userPassword, "UserPassword contain atleast 8 Characters");
        Password.isValidPassword(confirmPassword, "ConfirmPassword contain atleast 8 Characters");
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
    } catch (err) {
        console.error(err.message);
        alert(err.message);
    }


}