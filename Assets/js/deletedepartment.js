let branch = [];

function displayBranch() {
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/_all_docs?include_docs=true";
    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        let data = res.data;
        console.log("response : ", data);
        branch = data.rows;
        console.log("table list :", branch);
        displayTable(branch);

    }).catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log("failed");
        alert("Error-" + errorMessage);
    });
}

function displayTable(branchValue) {
    let content = "";
    for (let branchObj of branchValue) {
        content =
            content +
            `<tr><td>${branchObj.doc.degree}</td>
            <td>${branchObj.doc.branch}</td>
            <td>${branchObj.doc.totalSeats}</td>
            <td>${branchObj.doc.availableSeats}</td>
            <td><button type='button' onclick="deleteDepartment('${branchObj.doc._id}','${branchObj.doc._rev}')">Delete</button></td></tr>`;
        document.querySelector("#programme").innerHTML = content;
    }
}

function deleteDepartment(id, revId) {
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/" + id + "?rev=" + revId;
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

displayBranch();