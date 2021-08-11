function register() {
    event.preventDefault();
    const candidatename = document.querySelector("#candidateName").value;
    const mobile = document.querySelector("#contactNumber").value;
    const dob = document.querySelector("#dob").value;
    const email = document.querySelector("#email").value;
    const userName = document.querySelector("#userName").value;
    const userPassword = document.querySelector("#userPassword").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    let url = "https://product-mock-api.herokuapp.com/collegeadmissionapp/api/v1/auth/register";
    let formData = {
        name: candidatename,
        username: userName,
        dob: dob,
        email: email,
        contactNo: mobile,
        password: userPassword,
    }

    if (candidatename == "" || candidatename == null || candidatename.trim() == "" || candidatename == undefined) {
        alert("Candidatename Cannot be Blank");
        return false;
    } else if (mobile == "" || mobile == null || mobile == undefined) {
        alert("Mobile Number Cannot be Blank");
        return false;
    } else if (dob == "") {
        alert("DOB Cannot be Blank");
        return false;
    } else if (email == "" || email == null || email == undefined) {
        alert("Email Cannot be Blank");
        return false;
    } else if (userName == "" || userName == null || userName == undefined) {
        alert("UserName Cannot be Blank");
        return false;
    } else if (userPassword == "") {
        alert("UserPassword Cannot be Blank");
        return false;
    } else if (userPassword.length < 8 || userPassword.length > 15) {
        alert("UserPassword must be greater than >8 characters & less than 15 characters ");
        return false;
    }
    else if (confirmPassword == "") {
        alert("ConfirmPassword Cannot be Blank");
        return false;
    }
    else if (confirmPassword.length < 8 || confirmPassword.length > 15) {
        alert("ConfirmPassword must be greater than >8 characters & less than 15 characters ");
        return false;
    } else if (userPassword != confirmPassword) {
        alert("Password does not match with ConfirmPassword");
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