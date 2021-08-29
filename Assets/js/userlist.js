
let tableData = [];
let userData = JSON.parse(localStorage.getItem('userName'));
console.log("userdata :", userData);
let emailId = userData.email;
console.log(emailId);
UserService.listUser(emailId).then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.docs;
    console.log("table list :", tableData);
    displayTasks(tableData);
}).catch(err => {
    alert("List Failed");
});

function displayTasks(formValues) {
    console.log(formValues);
    let content = "";
    for (let taskObj of formValues) {
        content =
            content +
            `<tr><td>${taskObj._id}</td>
            <td>${taskObj.name}</td><td>${taskObj.branch}
                </td><td>${taskObj.percentage}</td><td>${taskObj.email}</td>
                <td>${taskObj.status}</td>
                <td><button type='button' onclick="withdraw('${taskObj._id}','WITHDRAWED','${taskObj.branch}')">Withdraw
                </button></td></tr>`;
    }
    document.querySelector("#applicationTable").innerHTML = content;

}

function withdraw(id, status, branch) {
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    if (status == "WITHDRAWED") {
        const withdrawList = {
            selector: {
                branch: branch
            },
            fields: ["_id", "_rev", "degree", "branch", "totalSeats", "availableSeats"]
        };
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/_find";
        axios.post(url, withdrawList, { headers: { 'Authorization': basicAuth } }).then(res => {
            let seats = res.data.docs[0];
            addSeats(seats);
        })

    }


    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/" + id;
    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(result => {
        const applicationObj = result.data;

        applicationObj.status = status;

        //update status api
        const updateURL = url + "?rev=" + applicationObj._rev;
        console.log(updateURL);
        axios.put(updateURL, applicationObj, { headers: { 'Authorization': basicAuth } }).then(result => {
            console.log("Update row", result.data);
            alert("Updated");
            window.location.reload();

        });

    }).catch(err => {
        let errorMessage = err.response.data;
        console.error(errorMessage);
        console.log("failed");
        alert("Error-" + errorMessage);
    });
}
function addSeats(seats) {
    let updatedData = {
        'degree': seats.degree,
        'branch': seats.branch,
        'availableSeats': parseInt(seats.availableSeats) + 1,
        'totalSeats': seats.totalSeats
    }

    console.log(updatedData);
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/";

    axios.put(url + seats._id + "?rev=" + seats._rev, updatedData, { headers: { 'Authorization': basicAuth } }).then(res => {
        alert("Updated Success");
        window.location.reload();
    }).catch(err => {
        alert("failed to update");
    })
}
