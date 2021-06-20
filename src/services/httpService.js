import axios from "axios";
import {toast} from "react-toastify";
import {getToken} from "./authService";

axios.defaults.headers.common["Authorization"] = "Bearer " + getToken();

axios.interceptors.response.use(null, error => {

    if(error.response && error.response.status === 401){
        window.location = "/logout";
    }

    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        console.log("HTTP Error", error);
        toast.error("API Error");

    }

    return Promise.reject(error);
});

const method = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default method;