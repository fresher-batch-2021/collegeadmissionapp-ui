//editFees(id);
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const rev = urlParams.get('rev');
console.log(id);
const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
const dbPassword = "163671d490ddeef138fc61e470881715";
const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/addfees/" + id;
axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
    console.log(res.data)
    const details = res.data
    document.querySelector("#admissionFees").value = details.admissionFees;
    document.querySelector("#tutionFees").value = details.tutionFees;
    document.querySelector("#examFees").value = details.examFees;
    document.querySelector("#hostelFees").value = details.hostelFees;
    let copntent = `<button onclick="updateFees('${id}','${rev}')">update</button> `;
    document.querySelector("#btn").innerHTML = copntent;
})
    .catch(err => console.error(err))

function updateFees(id, rev) {
    event.preventDefault();
    //alert("hi");
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    //const id = urlParams.get('id');
    //const rev = urlParams.get('rev')
    console.log(rev);
    console.log(id);

    let admissionFeesValue = document.querySelector("#admissionFees").value;
    let tutionFeesValue = document.querySelector("#tutionFees").value;
    let examFeesValue = document.querySelector("#examFees").value;
    let hostelFeesValue = document.querySelector("#hostelFees").value;

    // alert("hiiiiii");
    let updateFeesObj = {
        "admissionFees": admissionFeesValue,
        "tutionFees": tutionFeesValue,
        "examFees": examFeesValue,
        "hostelFees": hostelFeesValue
    }
    console.log("Obj", updateFeesObj);
    alert("sucess");
    UserService.update(id, rev, updateFeesObj).then(res => {
        console.log(res.data);
        alert("successfull");
        window.location.href = "listfees.html";
    }).catch(err => alert("error ")

    )
}
