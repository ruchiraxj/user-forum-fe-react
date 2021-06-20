import http from './httpService';
import {API_URL} from '../Configs';

export function login(email, pass){
    
    let body = { 
        email: email, 
        password: pass
    };

    return http.post(`${API_URL}/api/login`, body);
   
}

export function getToken(){
    return localStorage.getItem("token");
}