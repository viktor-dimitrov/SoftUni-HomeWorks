import { del, get, post, put } from "./api.js";


export async function getAllShoes(){
    return await get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function getDetails(id){
    const data = await get('/data/shoes/' + id);
    return data;

}

export async function postShoes(body){
    await post('/data/shoes', body)
}

export async function delShoes(id){
    await del('/data/shoes/' + id)
}

export async function editShoes(id, body){
    await put('/data/shoes/' + id, body)
}