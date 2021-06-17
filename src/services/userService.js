import http from "./httpService";

export function UserLogin(email, pass){
    
    let body = { 
        email: email, 
        password: pass
    };

    return http.post('http://localhost/personal/user-forum-be-laravel/public/index.php/api/login', body);
}

export function UserRegister(name, email, pass, pass_confirm){
    
    let body = { 
        name: name, 
        email: email, 
        password: pass,
        password_confirmation: pass_confirm
    };

    return http.post('http://localhost/personal/user-forum-be-laravel/public/index.php/api/register', body);
}
