function personal() {
    event.preventDefault();
    const f_name = document.querySelector("#f_name").value;
    if (f_name == "" || f_name == null || f_name == undefined || f_name.trim == "") {
        alert("Invalid Name");
        return false;
    }
    const l_name = document.querySelector("#l_name").value;
    if (l_name == "" || l_name == null || l_name == undefined || l_name.trim == "") {
        alert("Invalid LastName");
        return false;
    }
    const fatherName = document.querySelector("#father_name").value;
    if (fatherName == "" || fatherName == null || fatherName == undefined || fatherName.trim == "") {
        alert("Invalid Father name");
        return false;
    }
    const motherName = document.querySelector("#mother_name").value;
    if (motherName == "" || motherName == null || motherName == undefined || motherName.trim == "") {
        alert("Invalid MotherName");
        return false;
    }
    const dob = document.querySelector("#dob").value;
    if (dob == "" || dob == null || dob == undefined ) {
        alert("Invalid DateOfBirth");
        return false;
    }
    const gender = document.querySelector("#gender").value;
    if (gender == "" || gender == null || gender == undefined) {
        alert("Invalid Gender");
        return false;
    }
    const state = document.querySelector("#state").value;
    if (state == "" || state == null || state == undefined) {
        alert("Invalid state");
    }
    const addr_1 = document.querySelector("#addr_1").value;
    if (addr_1 == "" || addr_1 == null || addr_1 == undefined ) {
        alert("Invalid Address");
        return false;
    }
    const addr_2 = document.querySelector("#addr_2").value;
    if (addr_2 == "" || addr_2 == null || addr_2 == undefined ) {
        alert("Invalid Address");
        return false;
    }
    const district = document.querySelector("#district").value;
    if (district == "" || district == null || district == undefined) {
        alert("Invalid District");
        return false;
    }
    const religion = document.querySelector("#religion").value;
    if (religion == "" || religion == null || religion == undefined) {
        alert("Invalid Religion");
        return false;
    }
    const community = document.querySelector("#community").value;
    const aadhar = document.querySelector("#aadhar").value;
    if (aadhar == "" || aadhar == null || aadhar == undefined) {
        alert("Invalid Aadhar Number");
        return false;
    }
    else {
        passenger_details()
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
    // alert("Registration Successful");
    // window.location.href = "academic.html";
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
function passenger_details() {
    event.preventDefault();
    var tableBody = document.querySelector("#passenger_tablebody");
    var row = document.createElement('tr');
    var table_data_name = document.createElement('td');
    var table_data_age = document.createElement('td');
    var table_data_gender = document.createElement('td');
    table_data_name.textContent = document.getElementById("f_name").value;
    table_data_age.textContent = document.getElementById("l_name").value;
    table_data_gender.textContent = document.getElementById("father_name").value;
    row.appendChild(table_data_name);
    row.appendChild(table_data_age);
    row.appendChild(table_data_gender);
    tableBody.append(row);

    return false;
}