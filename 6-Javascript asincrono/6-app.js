const posts=[
    {title:'Post uno',body:'Post Uno'},
    {title:'Post dos',body:'Post Dos'},
];

/*las promesas reemplazaron a los callbacks y sirven para hacer operaciones asincronas
se pasan como argumentos resolve y reject se usa resolve cuando todo en la funcion
va como esperamos y reject cuando algo sale mal 
*/
function crearPost(post,callback){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);    
            let error=false;
            if(!error){
                resolve();
            }else{
                reject('Error algo salio mal');
            }
        },2000);
    })
    
}

function obtenerPost(){
    setTimeout(function(){
        let output=``;
        posts.forEach(function(post) {
            output+=`
            <li>${post.title}</li>
            <li>${post.body}</li>
            `;
        });
        document.body.innerHTML=output;
    },1000);
}

/*-Se invoca la funcion que retorna el promise y para verificar si retorno la promesa se
usa .then luego se envia la funcion que se quiere ejecfutar una vez terminado el promise
que en este caso es obtener post si se da el resolve se mostraran en el navegador sino 
se usa .catch para manejar el error
-catch recive una funcion que como parametro recibe el error que se especifica en reject */
crearPost({title:'Post tres',body:'Post Tres'}).then(obtenerPost).catch(function(error){
    console.log(error);      
});