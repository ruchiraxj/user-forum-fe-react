import http from "./httpService";
import {API_URL} from '../Configs';

export function UserLogin(email, pass){
    
    let body = { 
        email: email, 
        password: pass
    };

    return http.post(`${API_URL}/api/login`, body);
}

export function UserRegister(name, email, pass, pass_confirm){
    
    let body = { 
        name: name, 
        email: email, 
        password: pass,
        password_confirmation: pass_confirm
    };

    return http.post(`${API_URL}/api/register`, body);
}
