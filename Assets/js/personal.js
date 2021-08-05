function personal() {
    event.preventDefault();
    const f_name = document.querySelector("#f_name").value;
    const l_name = document.querySelector("#l_name").value;
    const fatherName = document.querySelector("#father_name").value;
    const motherName = document.querySelector("#mother_name").value;
    const dob = document.querySelector("#dob").value;
    const gender = document.querySelector("#gender").value;
    const state = document.querySelector("#state").value;
    const addr_1 = document.querySelector("#addr_1").value;
    const addr_2 = document.querySelector("#addr_2").value;
    const district = document.querySelector("#district").value;
    const religion = document.querySelector("#religion").value;
    const community = document.querySelector("#community").value;
    const aadhar = document.querySelector("#aadhar").value;

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