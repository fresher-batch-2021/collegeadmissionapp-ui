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
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user/_find";
        const selectedData = {
            selector: {
                username: userName,
                password: password
            },
            fields: ["_id", "name", "contactNo", "email"]
        };
        axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data.docs;
            console.log(data);
            if (data.length == 0) {
                alert("Invalid Login Credentials");
            }
            else {
                const user = data[0];
                alert("Login Successful");
                localStorage.setItem('userName', JSON.stringify(userObj));
                window.location.href = "personalinfo.html";
            }
        }
        )

    } catch (err) {
        console.error(err.message);
        alert("Unable to Login");
        alert(err.message);
    }

}