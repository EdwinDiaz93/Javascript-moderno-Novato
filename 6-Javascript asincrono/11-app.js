const easyHttp=new EasyHTTP();

// // se trata de asiganr a los usuarios antes de que la peticion se cumpla
// const users=easyHttp.get('https://jsonplaceholder.typicode.com/users');
// //imprime undefined
// console.log(users);

// easyHttp.get('https://jsonplaceholder.typicode.com/users')
//         .then(data=>console.log(data))
//         .catch(error=>console.log(error));

const data={
name:'John Doe',
username:'johndoe',
email:'johndoe@gmail.com'
}

// Crear usuario
// easyHttp.post('https://jsonplaceholder.typicode.com/users',data)
//         .then(data=>console.log(data))
//         .catch(error=>console.log(error));

// Actualizar usuario
// easyHttp.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

// Eliminar usuario
easyHttp.delete('https://jsonplaceholder.typicode.com/users/1')                
                .then(data=>console.log(data))
                .catch(error=>console.log(error));
