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
        alert("Invalid Name");
        return false;
    } else if (lastName == "" || lastName.trim() == "") {
        alert("Invalid LastName");
        return false;
    } else if (fatherName == "") {
        alert("Invalid Father name");
        return false;
    } else if (motherName == "") {
        alert("Invalid MotherName");
        return false;
    } else if (dob == "") {
        alert("Invalid DateOfBirth");
        return false;
    } else if (gender == "") {
        alert("Invalid Gender");
        return false;
    } else if (state == "") {
        alert("Invalid state");
    } else if (communicationAddress == "") {
        alert("Invalid Communication Address");
        return false;
    } else if (permanentAddress == "") {
        alert("Invalid Permanent Address");
        return false;
    } else if (district == "") {
        alert("Invalid District");
        return false;
    } else if (religion == "") {
        alert("Invalid Religion");
        return false;
    } else if (aadhar.length != 12) {
        alert("Invalid Aadhar Number");
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

function show1() {
    document.getElementById('div1').style.display = 'none';
}
function show2() {
    document.getElementById('div1').style.display = 'block';
}
function show3() {
    document.getElementById('div2').style.display = 'none';
}
function show4() {
    document.getElementById('div2').style.display = 'block';
}

