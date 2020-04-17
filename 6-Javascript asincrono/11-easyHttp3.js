class EasyHTTP{
    
    //Obteniendo el resquest con GET
    async get(url){
        const response=await fetch(url);        
        const resData=await response.json()
        return resData;
    }

    //Enviando peticion POST
    async post(url,data){
        const response= await fetch(url,{
            method:'POST',
            headers:{'Content-type':' application/json'},
            body:JSON.stringify(data),
             })
        const resData=await response.json();
        return resData;
    }

    //Enviando peticion put
    async put(url,data){
        const response=await fetch(url,{
            method:'PUT',
            headers:{'Content-type':' application/json'},
            body:JSON.stringify(data),
        });
       const resData=await response.json();
        return resData;
    }

    //enviando peticion delete
    async delete(url){
        const response =await fetch(url,{
            method:'DELETE',
            headers:{'Content-type':' application/json'},            
        });
        const resData=await 'Recurso eliminado';
        return resData;

    }
}