//async hace que la funcion retorne una promesa
//await indica que se va a esperar a que la promesa se cumpla
// await equivale a un then

const getUsers= async ()=>{
    //se espera que el promise de fecth resuelva la peticion get
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    //Se coloca la respuesta en formato json dentro de la data
    const data=await response.json();
    //se retorna la promesa con los datos de la api    
    return data;
}

getUsers().then(data=>console.log(data));






