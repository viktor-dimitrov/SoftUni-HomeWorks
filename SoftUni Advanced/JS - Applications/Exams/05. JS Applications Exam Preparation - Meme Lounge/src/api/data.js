import { del, get, post, put } from "./api.js";


export async function getAllItems(){
    const items = get('/data/memes?sortBy=_createdOn%20desc');
    return items;
}

export async function getItemById(id){
    const item = get('/data/memes/' + id);
    return item;
}

export async function createItem(body){
    post('/data/memes', body);
}

export async function editItem(id, body){
    put('/data/memes/' + id, body)
}

export async function deleteItem(id){
   await del(`/data/memes/${id}`)
}

export async function getMyItems(userId){
    const items = await get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    return items;
}