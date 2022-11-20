
const host = "http://localhost:3030";

 

export async function request(method, url, data){
    const user = JSON.parse(sessionStorage.getItem('user'))

    const options = {
        method,
        headers:{}
    };
    if(data !== undefined){
        options.headers["Content-type"] = "application/json";
        options.body = JSON.stringify(data)
    }
    if(user){
      
        options.headers["X-Authorization"] = user.accessToken;
    }

    try{
        const response = await fetch(host + url, options)
     
        if(response.status == 204){
            return response
        }
        const data = await response.json();
        

        if (response.ok == false){
            if(response.status == 403){
                sessionStorage.removeItem('user');
            }
            throw new Error(data.message);
        }

        return data;

    } catch(error){
        alert(error);
        throw error;

    }

}

export const get = request.bind(null,"GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");