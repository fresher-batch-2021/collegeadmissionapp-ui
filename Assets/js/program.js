function func() {
    console.log("called");
    let userData = localStorage.getItem('userName');
    if (userData == null) {
        window.location.href = "login.html";
    }
    else {
        window.location.href = "personalinfo.html";
    }
}