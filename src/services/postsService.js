import http from "./httpService";
import {API_URL} from '../Configs';


export function getPosts(){
    return http.get(`${API_URL}/api/posts`);
}

export function viewPost(id){
    return http.get(`${API_URL}/api/posts/${id}`);
}

export function myPosts(){
    return http.get(`${API_URL}/api/posts/created`);
}

export function createPost(post){
    return http.post(`${API_URL}/api/posts/store`, post);
}

export function deletePost(id){
    return http.delete(`${API_URL}/api/posts/${id}`);
}

export function pendingPosts(){
    return http.get(`${API_URL}/api/admin/posts/pending`);
}

export function changePostStatus(id, status){
    const stat = {status: status};
    return http.put(`${API_URL}/api/admin/posts/approve/${id}`, stat);
}

export function searchPosts(key){
    return http.get(`${API_URL}/api/posts/search?key=${key}`);
}