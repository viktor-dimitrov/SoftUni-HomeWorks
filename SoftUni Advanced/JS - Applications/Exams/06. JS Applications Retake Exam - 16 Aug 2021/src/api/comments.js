import { del, get, post, put } from "./api.js";


export function getAllComments(gameId){
    const comments = get(`/data/comments?where=gameId%3D%22${gameId}%22`);
    return comments;
}

export async function addComment(body){
     post('/data/comments', body)
}