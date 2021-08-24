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
        UserService.login(userName, password).then(res => {
            let data = res.data.docs;
            console.log(data);
            if (data.length == 0) {
                alert("Invalid Login Credentials");
            }
            else {
                const user = data[0];
                alert("Login Successful");
                localStorage.setItem('userName', JSON.stringify(user));
                window.location.href = "index.html";
            }
        }
        )

    } catch (err) {
        console.error(err.message);
        alert("Unable to Login");
        alert(err.message);
    }

}