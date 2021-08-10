function academic() {
    event.preventDefault();
    const exam = document.querySelector("#exam").value;
    const board = document.querySelector("#board").value;
    const regno = document.querySelector("#regno").value;
    const yearOfPassing = document.querySelector("#year").value;
    const group = document.querySelector("#group").value;
    const medium = document.querySelector("#medium").value;
    const hscMaxMark = document.querySelector("#mark1").value;
    const hscTotalMark = document.querySelector("#mark2").value;
    const sslcMaxMark = document.querySelector("#mark3").value;
    const sslcTotalMark = document.querySelector("#mark4").value;
    const branch = document.querySelector("#branch").value;
    if (exam == "") {
        alert("Invalid Passed Exam");
        return false;
    } else if (board == "") {
        alert("Invalid Board of Examination");
        return false;
    } else if (regno.length != 6) {
        alert("Invalid REGNO");
        return false;
    } else if (yearOfPassing == "" ) {
        alert("Invalid Year Of Passing");
        return false;
    } else if (group == null ) {
        alert("Invalid Group");
        return false;
    } else if ( medium == "") {
        alert("Invalid Medium");
        return false;
    } else if ( hscMaxMark == "") {
        alert("Invalid HSC Max Marks");
        return false;
    } else if ( hscTotalMark == "") {
        alert("Invalid HSC Total Marks");
        return false;
    } else if ( sslcMaxMark == null) {
        alert("Invalid SSLC Max Marks");
        return false;
    } else if (sslcTotalMark == "" ) {
        alert("Invalid SSLC Total Marks");
        return false;
    } else if (branch == "" ) {
        alert("Invalid Branch");
        return false;
    } else {
        let userObj = {
            "Qualified_Exam": exam,
            "Examination_Board": board,
            "YOP": yearOfPassing,
            "Register_Number": regno,
            "Group_Code": group,
            "Medium": medium,
            "HSC_Max_Marks": hscMaxMark,
            "HSC_Total_Marks": hscTotalMark,
            "SSLC_Max_Marks": sslcMaxMark,
            "SSLC_Total_Marks": sslcTotalMark,
            "Branch": branch
        }
        console.log(userObj);
        alert("Successfull");
        localStorage.setItem('regform', JSON.stringify(userObj));
        window.location.href = "preview.html";
    }
}