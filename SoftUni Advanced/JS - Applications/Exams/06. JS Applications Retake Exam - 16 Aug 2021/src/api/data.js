import { del, get, post, put } from "./api.js";


export async function getAllItems(){
    const items = get('/data/games?sortBy=_createdOn%20desc');
    return items;
}

export async function getLatestItems(){
    const items = get('/data/games?sortBy=_createdOn%20desc&distinct=category');
    return items;
}

export async function getItemById(id){
    const item = get('/data/games/' + id);
    return item;
}

export async function createItem(body){
    post('/data/games/', body);
    
}

export async function deleteItem(id){
    del('/data/games/' + id)
}

export async function editItem(id, body){
    put('/data/games/' + id, body);
}