// Valores de juego
// se pueden poner funciones fuera de otras porque con javascript se ejecutan primero las externas
let min=1,
    max=10,
    numGan=obtenerNumeroRandom(min,max),
    intentos=3;

//elementos de interfaz
const juego=document.querySelector('#juego'),
    numin=document.querySelector('.num-min'),
    numax=document.querySelector('.num-max'),
    numInput=document.querySelector('#num-resp'),
    respBtn=document.querySelector('#resp'),
    mensaje=document.querySelector('.mensaje');

//Asignando valores a la interfaz
numin.textContent=min;
numax.textContent=max;

//evento para jugar otra vez
/*se utiliza mousedown en vez de el evento click porque
tanto el juego(padre) como el boton (hijo) tendrian el mismo evento
esto ocasiona que al dar click en el boton cuando se esta jugando
dispare los eventos del padre y recargue la pagina al mismo tiempo
que se esta jugando*/
juego.addEventListener('mousedown',function(e){
    if(e.target.className==='jugar-otra'){    
        numInput.value='';    
        window.location.reload();
    }
})
//agregando el evento click
respBtn.addEventListener('click',function(e){
    let respuesta=parseInt(numInput.value);    

    // Validacion
    if(isNaN(respuesta)||respuesta<min||respuesta>max)
    {
        //mostrar mensaje cuando comete un error al introducir los numeros
        mostrarMensaje(`Porfavor introduce un numero entre ${min} y ${max}`,'red');
    }
    else{

        //Comprobar si gano
        if(respuesta===numGan){

            finDeJuego(true,`El numero ${numGan} es correcto, tu ganaste!`);            
        }
        else
        {
            //Se equivoco de numero
            intentos-=1;
            if(intentos===0)
            {
            //perdio el juego
            finDeJuego(false,`El juego termino, Perdiste!, el numero correcto era ${numGan}`);            
            }
            else
            {
                // El juego continua-respuesta equivocada
                //cambiar el color del borde a verde cuando el usuario pierde
                numInput.style.borderColor='red';
                //limpiar el input
                numInput.value='';
                //mostrar mensaje cuando falle
                mostrarMensaje(`El numero que digitaste no es el correcto, te quedan ${intentos} intentos`,'red');

                
            }
        }
    }
    e.preventDefault();
});

//mostrar mensaje resultado
function mostrarMensaje(msj,color){
    //cambiar el color del mensaje 
    mensaje.style.color=color;
    //poner el contenido del mensaje
    mensaje.textContent=msj;
}

function finDeJuego(gano,msj){
let color;
gano===true?color='green':color=='red';
 //inhabilitar el input
 numInput.disabled=gano;
 //cambiar el color del borde a verde cuando el usuario gana
 numInput.style.borderColor=color;
 //mostrar mensaje cuando gane o pierda
 mostrarMensaje(msj,color);
 //Jugar otra vez?
 respBtn.value='Jugar otra vez';
 respBtn.className+='jugar-otra';
 console.log(respBtn);
}
//obtener numero ganador
function obtenerNumeroRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}