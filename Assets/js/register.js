function register() {
    event.preventDefault();

    //Getting values from Forms..

    const candidateName = document.querySelector("#candidateName").value;
    const mobileNumber = document.querySelector("#contactNumber").value;
    const dob = document.querySelector("#dob").value;
    //const dob = setDate();
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
        let formData = {
            name: candidateName,
            username: userName,
            dob: dob,
            email: email,
            contactNo: mobileNumber,
            password: userPassword,
        }

        //Validate Form Fields...

        Validator.isValidString(candidateName, "Candidate Name Cannot be Blank");
        Validator.isValidString(mobileNumber, "Mobile Number Cannot be Blank");
        Validator.isValidString(dob, "Date Of Birth Cannot be Blank");
        Validator.isValidString(email, "Email Cannot be Blank");
        Validator.isValidString(userName, "UserName Cannot be Blank");
        Password.isValidPassword(userPassword, "Password must contain atleast 8 Characters");
        Password.isValidPassword(confirmPassword, "Password must contain atleast 8 Characters");

        UserService.register(formData).then(res => {
            let data = res.data;
            console.log(data);
            alert("Successffully Register");
            localStorage.setItem('registerData', JSON.stringify(registerData));
            window.location.href = "login.html";
        }).catch(err => {
            alert(err.message);
            alert("Unable to register");
        });
    } catch (err) {
        console.error(err.message);
        alert(err.message);
        alert("Unable to register");
    }
}

function setDate() {
     let previousDay = dayjs().subtract(1, 'day').toDate();
    let today = previousDay.toJSON().substr(0, 10);
    document.querySelector("#dob").setAttribute("max", today);

}
setDate();