import http from "./httpService";
import {API_URL} from '../Configs';

export function getProducts(){
    return http.get(`${API_URL}/api/products`);
}