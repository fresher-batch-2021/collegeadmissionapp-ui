function login() {
    event.preventDefault();
    const email = "manikandandeva22@gmail.com";
    const passCode = "Manidev17*";
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;

    if (userName == "" || userName == null || userName.trim() == "" || userName == undefined) {
        alert("Invalid Username");
        return false;
    } else if (password == "" || password == null || password.trim() == "" || password == undefined) {
        alert("Invalid Password");
        return false;
    } else if (email != userName || passCode != password) {
        alert("Registration failed && Invalid Details");
        return false;
    } else {
        alert("Login Successful");
        let userObj = {

            "userName": userName,
            "password": password
        };
        console.log(userObj);
        window.location.href = "personalinfo.html";
    }
}