function login() {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;

    if (userName == "" || userName == null) {
        alert("Username cannot be blank");
        return false;
    } else if (password == "" || password == null || password.trim() == "") {
        alert("Password cannot be blank");
        return false;
    } else {
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
            window.location.href = "personalinfo.html";
        }).catch(err => {
            let errorMessage = err.response.data.errorMessage;
            console.error(errorMessage);
            alert("Error-" + errorMessage);
        });

    }
}