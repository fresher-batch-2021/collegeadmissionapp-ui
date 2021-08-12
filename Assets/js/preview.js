//Get values from Personal Information File
let userData = JSON.parse(localStorage.getItem('userData'));
console.log(userData);
document.querySelector("#firstName").innerHTML = userData.firstName;
document.querySelector("#lastName").innerHTML = userData.lastName;
document.querySelector("#fatherName").innerHTML = userData.fatherName;
document.querySelector("#motherName").innerHTML = userData.motherName;
document.querySelector("#dateOfBirth").innerHTML = userData.DOB;
document.querySelector("#gender").innerHTML = userData.gender;
document.querySelector("#communicationAddress").innerHTML = userData.communicationAddress;
document.querySelector("#permanentAddress").innerHTML = userData.permanentAddress;
document.querySelector("#state").innerHTML = userData.state;
document.querySelector("#district").innerHTML = userData.district;
document.querySelector("#religion").innerHTML = userData.religion;
document.querySelector("#community").innerHTML = userData.community;
document.querySelector("#aadharNumber").innerHTML = userData.aadharNumber;

//Get Values from Academic Information File
let reg = JSON.parse(localStorage.getItem('regform'));
console.log(reg);
document.querySelector("#qualifiedExam").innerHTML = reg.qualifiedExam;
document.querySelector("#examinationBoard").innerHTML = reg.examinationBoard;
document.querySelector("#yop").innerHTML = reg.yearofPassing;
document.querySelector("#registerNumber").innerHTML = reg.registerNumber;
document.querySelector("#groupCode").innerHTML = reg.groupCode;
document.querySelector("#medium").innerHTML = reg.medium;
document.querySelector("#hscMaxMark").innerHTML = reg.hscMaxMark;
document.querySelector("#hscTotalMark").innerHTML = reg.hscTotalMark;
document.querySelector("#sslcMaxMark").innerHTML = reg.sslcMaxMark;
document.querySelector("#sslcTotalMark").innerHTML = reg.sslcTotalMark;
document.querySelector("#branch").innerHTML = reg.branch;

//Get Values from Edit option
let formDetails = JSON.parse(localStorage.getItem('editform'));

document.querySelector("#firstName").innerHTML = formDetails.firstName
document.querySelector("#lastName").innerHTML = formDetails.lastName
document.querySelector("#fatherName").innerHTML = formDetails.fatherName;
document.querySelector("#motherName").innerHTML = formDetails.motherName;
document.querySelector("#dateOfBirth").innerHTML = formDetails.DOB;
document.querySelector("#gender").innerHTML = formDetails.gender;
document.querySelector("#communicationAddress").innerHTML = formDetails.communicationAddress;
document.querySelector("#permanentAddress").innerHTML = formDetails.permanentAddress;
document.querySelector("#state").innerHTML = formDetails.state;
document.querySelector("#district").innerHTML = formDetails.district;
document.querySelector("#religion").innerHTML = formDetails.religion;
document.querySelector("#community").innerHTML = formDetails.community;
document.querySelector("#aadharNumber").innerHTML = formDetails.aadharNumber;
document.querySelector("#qualifiedExam").innerHTML = formDetails.qualifiedExam;
document.querySelector("#examinationBoard").innerHTML = formDetails.examinationBoard;
document.querySelector("#yop").innerHTML = formDetails.yearofPassing;
document.querySelector("#registerNumber").innerHTML = formDetails.registerNumber;
document.querySelector("#groupCode").innerHTML = formDetails.groupCode;
document.querySelector("#medium").innerHTML = formDetails.medium;
document.querySelector("#hscMaxMark").innerHTML = formDetails.hscMaxMark;
document.querySelector("#hscTotalMark").innerHTML = formDetails.hscTotalMark;
document.querySelector("#sslcMaxMark").innerHTML = formDetails.sslcMaxMark;
document.querySelector("#sslcTotalMark").innerHTML = formDetails.sslcTotalMark;
document.querySelector("#branch").innerHTML = formDetails.branch;

let formObj = {
    "PersonalInformation": {
        "firstName": formDetails.firstName,
        "lastName": formDetails.lastName,
        "fatherName": formDetails.fatherName,
        "motherName": formDetails.motherName,
        "dateOfBirth": formDetails.DOB,
        "gender": formDetails.gender,
        "religion": formDetails.religion,
        "community": formDetails.community,
        "aadharNumber": formDetails.aadharNumber,
    },
    "address": {
        "communicationAddress": formDetails.communicationAddress,
        "permanentAddress": formDetails.communicationAddress,
        "state": formDetails.state,
        "district": formDetails.district,
    },
    "academicDetails": {
        "qualification": formDetails.qualifiedExam,
        "examinationBoard": formDetails.examinationBoard,
        "yearOfPassing": formDetails.yearOfPassing,
        "registerNumber": formDetails.registerNumber,
        "groupCode": formDetails.groupCode,
        "medium": formDetails.medium,
        "hscMaxMark": formDetails.hscMaxMark,
        "hscTotalMark": formDetails.hscTotalMark,
        "sslcMaxMark": formDetails.sslcMaxMark,
        "sslcTotalMark": formDetails.sslcTotalMark,
        "branch": formDetails.branch
    }

}
console.log(formObj);