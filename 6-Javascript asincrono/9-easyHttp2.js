class EasyHTTP{
    //Obteniendo el resquest con GET
    get(url){
        // Se retorna una promesa para esperar que la peticion se haga al servidor
        return new Promise((resolve,reject)=>{
        fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error));
        });
        
    }

    //Enviando peticion POST

    post(url,data){
        // Se retorna una promesa para esperar que la peticion se haga al servidor
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method:'POST',
            headers:{'Content-type':' application/json'},
            body:JSON.stringify(data),
        })
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error));
        });
        
    }

    //Enviando peticion put
    put(url,data){
        // Se retorna una promesa para esperar que la peticion se haga al servidor
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method:'PUT',
            headers:{'Content-type':' application/json'},
            body:JSON.stringify(data),
        })
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error));
        });
        
    }
    //enviando peticion delete
    delete(url){
        // Se retorna una promesa para esperar que la peticion se haga al servidor
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method:'DELETE',
            headers:{'Content-type':' application/json'},            
        })
            .then(response=>response.json())
            .then(data=>resolve('Recurso eliminado'))
            .catch(error=>reject(error));
        });
        
    }
}