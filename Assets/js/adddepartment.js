function addDepartment() {
    event.preventDefault();
    const degree = document.querySelector("#degree").value;
    const branch = document.querySelector("#branch").value;
    const totalSeats = document.querySelector("#seats").value;
    console.log(degree);
    console.log(branch);
    console.log(totalSeats);
    try {
        alert("FUnction Works");
        let departmentData = {
            degree: degree,
            branch: branch,
            totalSeats: totalSeats
        }
        console.log(departmentData);
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments";
        axios.post(url, departmentData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data;
            console.log(data);
            alert("Department Added Successfully");
        }).catch(err => {
            alert(err.message);
            alert("Unable to register");
        });
    } catch (err) {
        console.error(err.message);
        alert(err.message);
        alert("Unable to register");
    }
}