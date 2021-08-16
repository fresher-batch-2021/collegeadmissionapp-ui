function admin() {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;
    let userObj = {
        "userName": userName,
        "password": password
    };
    if (userName == "" || userName == null) {
        alert("UserName Cannot be Blank");
        return false;
    } else if (password == "" || password == null || password.location < 8) {
        alert("Password contain atleast 8 Characters");
        return false;
    } else {
        console.log(userObj);
        alert("Login Successfull");
        window.location.href = "search1.html";
    }
}