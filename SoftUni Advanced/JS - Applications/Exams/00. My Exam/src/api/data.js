import { del, get, post, put } from "./api.js";

export async function getAllItems(){
    const items = get('/data/albums?sortBy=_createdOn%20desc');
    return items;
}

export async function getItemById(id){
    const item = get('/data/albums/' + id);
    return item;
}

export async function createItem(body){
    post('/data/albums', body);
}

export async function deleteItem(id){
    del('/data/albums/' + id);
}

export async function editItem(id, body){
    put('/data/albums/' + id, body)
}