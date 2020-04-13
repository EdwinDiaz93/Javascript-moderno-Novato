//se obetiene la clase del boton y se le agrega un evento
//el primer parametro de la funcion es el tipo de evento en este caso es un click
//el segundo parametro es una funcion anonima que funciona como un callback
//para poder controlar lo que hace el boton
//la funcion recibe un parametro e el cual maneja los eventos

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('hello world');

//     //previene el comportamiento del boton como es enlace previene que redireccione    
//     e.preventDefault();
// });

//alternativo a eso se puede nombrar una funcion y pasar aparte
document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    let val;
    //previene el comportamiento del boton como es enlace previene que redireccione    
    // e.preventDefault();

    //Elemento target del evento
    // val=e;
    val=e.target.id;
    val=e.target.className;
    val=e.target.classList;
    // e.target.innerText='hello';

    //el tipo de evento
    val=e.type;

    //timestamp
    val=e.timeStamp

    //coordenadas relativas a la pantalla del navegador
    val=e.clientY;//pixeles que se relacionan con la altura de la ventana del navegador
    val=e.clientX;//pixeles que se relacionan con el ancho de la ventana del navegador

    // Coordenadas relativas al elemento seleccionado 
    val=e.offsetY;//pixeles que se relacionan con la altura del elemento en este caso boton
    val=e.offsetY;//pixeles que se relacionan con el ancho del elemento en este caso boton
    
    console.log(val);
}

