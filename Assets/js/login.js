function login() {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;

    if (userName == "" || userName == null || userName.trim() == "" || userName == undefined) {
        alert("Invalid Username");
        return false;
    } else if (password == "" || password == null || password.trim() == "" || password == undefined) {
        alert("Invalid Password");
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
        console.log("mani bro");
        axios.post(url, formData).then(res => {
            let data = res.data;
            console.log(data);
            console.log("mani-2 bro");
            alert("Login Successful");
            window.location.href = "personalinfo.html";
        }).catch(err => {
            let errorMessage = err.response.data.errorMessage;
            console.error(errorMessage);
            alert("Error-" + errorMessage);
        });

    }
}