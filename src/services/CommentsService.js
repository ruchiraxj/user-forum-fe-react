import http from "./httpService";
import {API_URL} from '../Configs';

export function getComments(id){
    return http.get(`${API_URL}/api/comments/by-post/${id}`);
}

export function saveComments(post){
    return http.post(`${API_URL}/api/comments/store`, post);
}