
/*
En escencia los callbacks son funciones que se ejecutan dentro de otras funciones
 antes de que se termine de ejecutar el bloque de codigo en este caso la funcion 
obtener post renderiza los dos posts luego se crea un post con crearPost
dentro de esta funcion se pasa el callback obtenerPost para que cuando cree
el nuevo post vuelva a llamar a obtenerPost y pintarlos en el navegador
*/
const posts=[
    {title:'Post uno',body:'Post Uno'},
    {title:'Post dos',body:'Post Dos'},
];

// function crearPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     },2000)
// }

// function obtenerPost(){
//     setTimeout(function(){
//         let output='';
//         posts.forEach(function(post) {
//             ouput+=`
//             <li>${post.title}</li>
//             <li>${post.body}</li>
//             `;
//         });
//         document.body.innerHTML=output;
//     },1000);
// }

// crearPost({title:'Post tres',body:'Post tres'});//se ejecutara despues de obtener los post
// //porque dura 2 segundos
// obtenerPost()//se ejecutara primero porque dura 1 segundo
// //el tercer post no se creara porque obtenerPost se ejecuta primero

function crearPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000)
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

crearPost({title:'Post tres',body:'Post Tres'},obtenerPost);