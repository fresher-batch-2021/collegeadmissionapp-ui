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

        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user";
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
        Validator.isValidString(userName, "UserName Cannot be Blank");
        Password.isValidPassword(userPassword, "UserPassword contain atleast 8 Characters");
        Password.isValidPassword(confirmPassword, "ConfirmPassword contain atleast 8 Characters");
        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data;
            console.log(data);
            alert("Successffully Register");
            localStorage.setItem('registerData', JSON.stringify(registerData));
            window.location.href = "login.html";
        })
    } catch (err) {
        console.error(err.message);
        alert(err.message);
        alert("Unable to register");
    }


}