import { del, get, post, put } from "./api.js";


export async function getItems(){
    const items = await get('/data/offers?sortBy=_createdOn%20desc');
    return items
};


export async function createItem(body) {
       await post('/data/offers', body);
}

export async function getItemById(id){
     const item = await get('/data/offers/' + id);
     return item;
}

export async function deleteItem(id){
    await del('/data/offers/' + id);
}

export async function editItem(id, body) {
    await put('/data/offers/' + id, body);
}