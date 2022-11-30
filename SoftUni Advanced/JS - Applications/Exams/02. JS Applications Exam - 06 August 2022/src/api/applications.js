import { get, post } from "./api.js";

export async function postApply(offerId) {
      post('/data/applications', {offerId});
}

export async function getCount(offerId){
    return  get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
     
}

export async function myApply(offerId, userId){
    return get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}