function login() {
    event.preventDefault();
    const email = "Moudhisaran";
    const pass = "Manidev17*";
    const userName = document.querySelector("#userName").value;
    if (userName == "" || userName == null || userName.trim == "" || userName == undefined) {
        alert("Invalid Username");
        return false;
    }
    const password = document.querySelector("#password").value;
    if (password == "" || password == null || password.trim == "" || password == undefined) {
        alert("Invalid Password");
        return false;
    }
    if (email == userName && pass == password) {
        alert("Registration Successful");
    } else {
        alert("Registration failed && Invalid Details")
    }
    let userObj = {

        "User_Name": userName,
        "Password": password
    };
    console.log(userObj);
    window.location.href = "personalinfo.html";
}