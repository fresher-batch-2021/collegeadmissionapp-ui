class UserService {

    static login(userName, password) {
        const selectedData = {
            selector: {
                username: userName,
                password: password
            },
            fields: ["_id", "name", "contactNo", "email"]
        };
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user/_find";
        return (axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }));
    }

    static register(formData) {

        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user";
        return (axios.post(url, formData, { headers: { 'Authorization': basicAuth } }));
    }


    static addService(applicationData) {
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication";
        return (axios.post(url, applicationData, { headers: { 'Authorization': basicAuth } }));
    }

    static listService() {
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/_all_docs?include_docs=true";
        return (axios.get(url, { headers: { 'Authorization': basicAuth } }));
    }

    static listUser(emailId) {
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        const userData = {
            selector: {
                email: emailId
            },
            fields: ["_id", "name", "branch", "percentage", "email", "status"]
        }
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/_find";
        return (axios.post(url, userData, { headers: { 'Authorization': basicAuth } }));
    }

    static availableSeats(branchName) {
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        const availableSeatsValue = {
            selector: {
                branch: branchName
            },
            fields: ["_id", "degree", "branch", "totalSeats", "availableSeats"]
        }
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/_find";
        return (axios.post(url, availableSeatsValue, { headers: { 'Authorization': basicAuth } }));
    }

    static update(id, rev, updateFeesObj) {
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/addfees/";
        return axios.put(url + id + "?rev=" + rev, updateFeesObj, { headers: { 'Authorization': basicAuth } })
    }

}
