function personal() {
    event.preventDefault();
    const f_name = document.querySelector("#f_name").value;
    if (f_name == "" || f_name == null || f_name.trim == "") {
        alert("Invalid Name");
        return false;
    }
    const l_name = document.querySelector("#l_name").value;
    if (l_name == "" || l_name == null || l_name.trim == "") {
        alert("Invalid LastName");
        return false;
    }
    const fatherName = document.querySelector("#father_name").value;
    if (fatherName == "" || fatherName == null || fatherName.trim == "") {
        alert("Invalid Father name");
        return false;
    }
    const motherName = document.querySelector("#mother_name").value;
    if (motherName == "" || motherName == null || motherName.trim == "") {
        alert("Invalid MotherName");
        return false;
    }
    const dob = document.querySelector("#dob").value;
    if (dob == "" || dob == null) {
        alert("Invalid DateOfBirth");
        return false;
    }
    const gender = document.querySelector("#gender").value;
    if (gender == "" || gender == null) {
        alert("Invalid Gender");
        return false;
    }
    const state = document.querySelector("#state").value;
    if (state == "" || state == null) {
        alert("Invalid state");
    }
    const addr_1 = document.querySelector("#addr_1").value;
    if (addr_1 == "" || addr_1 == null || addr_1 == undefined) {
        alert("Invalid Address");
        return false;
    }
    const addr_2 = document.querySelector("#addr_2").value;
    if (addr_2 == "" || addr_2 == null || addr_2 == undefined) {
        alert("Invalid Address");
        return false;
    }
    const district = document.querySelector("#district").value;
    if (district == "" || district == null) {
        alert("Invalid District");
        return false;
    }
    const religion = document.querySelector("#religion").value;
    if (religion == "" || religion == null) {
        alert("Invalid Religion");
        return false;
    }
    const community = document.querySelector("#community").value;
    const aadhar = document.querySelector("#aadhar").value;
    if (aadhar.length != 12) {
        alert("Invalid Aadhar Number")
    }


    let userObj = {
        "FirstName": f_name,
        "LastName": l_name,
        "FatherName": fatherName,
        "MotherName": motherName,
        "DOB": dob,
        "Gender": gender,
        "State": state,
        "Communication Address": addr_1,
        "Permanent Address": addr_2,
        "District": district,
        "Religion": religion,
        "Community": community,
        "AadharNumber": aadhar
    };
    console.log(userObj);
    alert("Registration Successful");
    window.location.href = "academic.html";
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
