function login() {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;
    try {
        Validator.isValidString(userName, "UserName Cannot be Blank");
        Password.isValidPassword(password, "Password contain atleast 8 Characters");
        let userObj = {
            "userName": userName,
            "password": password
        };
        console.log(userObj);
        let url = "https://product-mock-api.herokuapp.com/collegeadmissionapp/api/v1/auth/login";
        let formData = {
            username: userName,
            password: password
        }
        axios.post(url, formData).then(res => {
            let data = res.data;
            console.log(data);
            alert("Login Successful");
            localStorage.setItem('userName', JSON.stringify(userObj));
            window.location.href = "personalinfo.html";
        }).catch(err => {
            let errorMessage = err.response.data.errorMessage;
            console.error(errorMessage);
            alert(errorMessage);
        });

    } catch (err) {
        console.error(err.message);
        alert(err.message);
    }

}