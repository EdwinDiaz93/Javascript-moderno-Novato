//Evento submit
document.querySelector('#calpre').addEventListener('submit', function(e){
    //ocultar los resultados
    document.querySelector('#resultados').style.display='none';
    //mostrar el cargador    
    document.querySelector('#cargador').style.display='block';

    setTimeout(calcularResultado,1000);
    e.preventDefault();
});

//funcion que calcula el resultado

function calcularResultado(){
//definiendo variables de la interfaz(campos de texto)
const monto=document.querySelector('#monto');
const interes=document.querySelector('#interes');
const años=document.querySelector('#años');
const pagoMensual=document.querySelector('#pago-mensual');
const pagoTotal=document.querySelector('#pago-total');
const interesTotal=document.querySelector('#interes-total');

//definiendo variables de calculo
const principal=parseFloat(monto.value);
const interesCalculado=parseFloat(interes.value)/100/12;
const pagosCalculados=parseFloat(años.value)*12;

//realizar calculo
const x=Math.pow(1+interesCalculado,pagosCalculados);
const mensualidad=(principal*x*interesCalculado)/(x-1);

if(isFinite(mensualidad))
    {
        pagoMensual.value=mensualidad.toFixed(2);
        pagoTotal.value=(mensualidad*pagosCalculados).toFixed(2);
        interesTotal.value=((mensualidad*pagosCalculados)-principal).toFixed(2);
        //mostrar resultados
        document.querySelector('#resultados').style.display='block';
        //ocultar spinner
        document.querySelector('#cargador').style.display='none';
    }
else
    {
       mostrarErrores('Hubo un error vuelve a digitar');
    }
    monto.value='';
    interes.value='';
    años.value='';


}

function mostrarErrores(mensaje){
    //ocultar resultados
    document.querySelector('#resultados').style.display='none';
    //ocultar spinner
    document.querySelector('#cargador').style.display='none';

    //creando elemento div para el error
    const errorDiv=document.createElement('div');
    errorDiv.className='alert alert-danger';

    //añadiendo el textnode para el mensaje al elemento div
    errorDiv.appendChild(document.createTextNode(mensaje));

    //obteniendo elementos heading y card
    const card=document.querySelector('.card-body');
    const heading=document.querySelector('.heading');

    //insertando el errorDiv en el card-body antes del elemento heading    
    card.insertBefore(errorDiv,heading);

    //limpiar errores despues de 3 segundos
    //muestra un mensaje durante un tiempo determinado el segundo parametro esta en 
    //milisegundos y el primero es un callback para definir que se va a hacer
    //despues de esos 3 segundos    
    setTimeout(limpiarError,3000);

}
//elimina la alerta del navegador
function limpiarError(){
    document.querySelector('.alert').remove();
}