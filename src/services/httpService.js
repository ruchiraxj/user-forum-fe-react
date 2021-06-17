import axios from "axios";

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("HTTP Error", error);
        alert("API Error - For More Information Check The Console");
        return false;
    }
});

const method = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete
}

export default method;