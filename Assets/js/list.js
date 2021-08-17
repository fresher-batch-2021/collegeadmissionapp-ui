let tasks = [
    {
        id: 1,
        name: "Ganesh",
        branch: "ECE",
        percentage: 78,
        address: "Salem",
        emailId: "ganesh@gmail.com",
        status: "pending"
    },
    {
        id: 2,
        name: "Rajesh",
        branch: "CSE",
        percentage: 70,
        address: "Chennai",
        emailId: "rajesh@gmail.com",
        status: "pending"
    }
];

let tableData = [];

UserService.listService().then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.rows;
    console.log("table list :", tableData);
    console.log("available list :", tasks);
    console.log("success");
    displayTasks(tableData);
}).catch(err => {
    let errorMessage = err.response.data.errorMessage;
    console.error(errorMessage);
    console.log("failed");
    alert("Error-" + errorMessage);
});

function displayTasks(tableData) {
    let content = "";
    for (let taskObj of tableData) {
        content =
            content +
            `<tr><td>${taskObj.doc._id}</td><td>${taskObj.doc.name}</td><td>${taskObj.doc.branch}
                </td><td>${taskObj.doc.percentage}</td><td>${taskObj.doc.district}</td><td>${taskObj.doc.email}</td>
                <td>${taskObj.doc.status}</td><td><button type='button' onclick="updateStatus('${taskObj.doc._id}','ACCEPT')">Accept</button>&nbsp;&nbsp;&nbsp;<button>Reject</button></td></tr>`;
        console.log(content);
        document.querySelector("#applicationTable").innerHTML = content;
    }
}

function updateStatus(id, status) {
    alert('Update ' + id + ',status=' + status);
    //call backend api and update status
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/4ceccbc5b724585de20cd9c8b64694ba"
    axios.post(url, applicationData, { headers: { 'Authorization': basicAuth } }).then(res => {
        let data = res.data;
        console.log("response : ", data);
        tableData = data.rows;
        console.log("table list :", tableData);
        console.log("success");
        displayTasks(tableData);
    }).catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log("failed");
        alert("Error-" + errorMessage);
    });
}
function searchFun() {
    let searchInput = document.getElementById("myInput").value.toUpperCase();
    let myTable = document.getElementById("myTable");
    let tableRow = myTable.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        let tableData = tableRow[i].getElementsByTagName("td")[2];
        if (tableData) {
            let textValue = tableData.textContent || tableData.innerText;
            if (textValue.toUpperCase().indexOf(searchInput) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }
}
