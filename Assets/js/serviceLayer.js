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
        return (axios.post(url, formData, { headers: { 'Authorization': basicAuth } }))
    }

}
