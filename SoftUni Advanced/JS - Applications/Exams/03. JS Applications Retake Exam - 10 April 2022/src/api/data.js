import { del, get, post, put } from "./api.js";



export async function getItems(){
    const data = get('/data/posts?sortBy=_createdOn%20desc');
    return data
}

export async function postItem(body){
    await post('/data/posts', body)
}

export async function getItemById(id){
    const data = get('/data/posts/' + id);
    return data;
}

export async function editItem(id, body){
    await put('/data/posts/' + id, body)
}

export async function deleteItem(id){
     del('/data/posts/' + id);
}

export async function getMyItems(userId){
    const data = get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return data;
}

export async function makeDonate(postId){
    return post('/data/donations', {postId})
}

export async function getAllDonations(postId){
    const result =  get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
    return result
}

export async function myDonation(postId, userId){
    return get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}