import { post, get } from "./api.js";

export async function postLike(bookId){
    post('/data/likes', {bookId});
}

export function countLike(bookId){
    const count = get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
    return count
}

export async function myLike(bookId, userId){
    const result = get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    return result
}