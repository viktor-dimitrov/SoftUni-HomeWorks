import { post, get } from "./api.js";


export async function likeIt(albumId){
    post('/data/likes', albumId)
}

export async function getAllLikes(albumId){
    const count = get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
    return count;
}

export async function myLike(albumId, userId){
    const result = get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    return result;
}