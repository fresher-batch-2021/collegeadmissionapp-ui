function personal() {
    event.preventDefault();
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const fatherName = document.querySelector("#fatherName").value;
    const motherName = document.querySelector("#motherName").value;
    const gender = document.querySelector("#gender").value;
    const dob = document.querySelector("#dob").value;
    const state = document.querySelector("#state").value;
    const communicationAddress = document.querySelector("#communicationAddress").value;
    const permanentAddress = document.querySelector("#permanentAddress").value;
    const district = document.querySelector("#district").value;
    const religion = document.querySelector("#religion").value;
    const community = document.querySelector("#community").value;
    const aadhar = document.querySelector("#aadhar").value;

    if (firstName == "" || firstName.trim() == "") {
        alert("FirstName cannot be blank");
        return false;
    } else if (lastName == "" || lastName.trim() == "") {
        alert("LastName cannot be blank");
        return false;
    } else if (fatherName == "") {
        alert("Fathername cannot be blank");
        return false;
    } else if (motherName == "") {
        alert("MotherName cannot be blank");
        return false;
    } else if (dob == "") {
        alert("DateOfBirth cannot be blank");
        return false;
    } else if (gender == "") {
        alert("Gender cannot be blank");
        return false;
    } else if (state == "") {
        alert("State cannot be blank");
    } else if (communicationAddress == "") {
        alert("Communication Address cannot be blank");
        return false;
    } else if (permanentAddress == "") {
        alert("Permanent Address cannot be blank");
        return false;
    } else if (district == "") {
        alert("District cannot be blank");
        return false;
    } else if (religion == "") {
        alert("Religion cannot be blank");
        return false;
    } else if (aadhar.length != 12) {
        alert("Aadhar number contain 12digit numbers");
        return false;
    } else {
        alert("Registration Successful");
        const userObj = {
            "firstName": firstName,
            "lastName": lastName,
            "fatherName": fatherName,
            "motherName": motherName,
            "DOB": dob,
            "gender": gender,
            "state": state,
            "communicationAddress": communicationAddress,
            "permanentAddress": permanentAddress,
            "district": district,
            "religion": religion,
            "community": community,
            "aadharNumber": aadhar
        };
        console.log(userObj);
        localStorage.setItem('userData', JSON.stringify(userObj));
        window.location.href = "academic.html";
    }
}

function address() {
    const permanentaddress1 = document.getElementById("communicationAddress").value;
    document.getElementById("permanentAddress").innerHTML = permanentaddress1;
}


