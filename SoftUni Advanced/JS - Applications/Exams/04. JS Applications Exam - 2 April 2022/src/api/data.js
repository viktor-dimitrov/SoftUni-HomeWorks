import { del, get, post, put } from "./api.js"

const endpoints = {
    'getAllPets': '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    'details': '/data/pets/'
   

}

export async function getAllPets(){
   const data = await get(endpoints.getAllPets);
   return data;
}

export async function getDetails(id){
    const data = await get(endpoints.details + id);
    return data;
}

export async function createPet(body){
    await post(endpoints.details, body)
}

export async function deletePet(id){
    await del(endpoints.details + id)
}

export async function editPet(id, body){
    await put(endpoints.details + id, body)
}