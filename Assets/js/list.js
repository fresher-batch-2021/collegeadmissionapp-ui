let tableValues = [];
UserService.listService().then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableValues = data.rows;
    console.log("table list :", tableValues);
    displayTasks(tableValues);
}).catch(err => {
    let errorMessage = err.response.data.errorMessage;
    console.error(errorMessage);
    console.log("failed");
    alert("Error-" + errorMessage);
});

function displayTasks(tableData) {
    const resArray = tableData.sort((a, b) => {
        const nameA = a.doc.name.toLowerCase();
        const nameB = b.doc.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    console.log("Result", resArray);
    let content = "";
    for (let taskObj of resArray) {
        content =
            content +
            `<tr><td>${taskObj.doc._id}</td>
            <td>${taskObj.doc.name}</td><td>${taskObj.doc.branch}
                </td><td>${taskObj.doc.percentage}</td><td>${taskObj.doc.district}</td><td>${taskObj.doc.email}</td>
                <td>${taskObj.doc.status}</td><td><button type='button' onclick="updateStatus('${taskObj.doc._id}','ACCEPTED','${taskObj.doc.branch}')">Accept
                </button>&nbsp;&nbsp;&nbsp;<button type='button' onclick="updateStatus('${taskObj.doc._id}','REJECTED','${taskObj.doc.branch}')">Reject</button></td>
                <td><button type='button' onclick="deleteFun('${taskObj.doc._id}','${taskObj.doc._rev}')">Delete</button></td></tr>`;
        document.querySelector("#applicationTable").innerHTML = content;
    }
}

function updateStatus(id, status, branch) {
    //call backend api and update status
    //Update available Seats
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    if (status == "ACCEPTED") {
        const requestData = {
            selector: {
                branch: branch
            },
            fields: ["_id", "_rev", "degree", "branch", "totalSeats", "availableSeats"]
        };
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/_find";
        axios.post(url, requestData, { headers: { 'Authorization': basicAuth } }).then(res => {
            let data = res.data.docs[0];
            update_seats(data);
        })
    }
    console.log('Update ' + id + ',status=' + status);

    //get by id
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
function deleteFun(id, revId) {
    alert("Function Works")
    console.log('Delete' + id + " " + revId);

    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/" + id + "?rev=" + revId;
    axios.delete(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        console.log("success");
        window.location.reload();
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
        let tableDatas = tableRow[i].getElementsByTagName("td")[2];
        if (tableDatas) {
            let textValue = tableDatas.textContent || tableDatas.innerText;
            if (textValue.toUpperCase().indexOf(searchInput) > -1) {
                tableRow[i].style.display = "";
            } else {
                tableRow[i].style.display = "none";
            }
        }
    }
}

function update_seats(data) {
    let updateData = {
        'degree': data.degree,
        'branch': data.branch,
        'availableSeats': parseInt(data.availableSeats) - 1,
        'totalSeats': data.totalSeats
    }
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/";

    axios.put(url + data._id + "?rev=" + data._rev, updateData, { headers: { 'Authorization': basicAuth } }).then(res => {
        alert("Updated Success");
        window.location.reload();
    }).catch(err => {
        alert("failed to update");
    })
}


