//switch evita tener que anidar if else
//permite tener un controlador o switch y en caso que 
//de que coincida entrara al case ejecutara la logica
//y hara un break para terminar
const color='rojo';
switch(color){
    case 'rojo':
        console.log('el color es rojo');
        break;
    case 'azul':
        console.log('el color es azul');
        break;
    default:
        console.log('el color no ni azul ni rojo');
}

let dia=new Date();

switch(dia.getDay()){
    case 0:
        console.log('Hoy es domingo')
        break;
    case 1:
        console.log('Hoy es lunes')
        break;
    case 2:
        console.log('Hoy es martes')
        break;
    case 3:
        console.log('Hoy es miercoles')
        break;
    case 4:
        console.log('Hoy es jueves')
        break;
    case 5:
        console.log('Hoy es viernes')
        break;
    case 6:
        console.log('Hoy es sabado')
        break;
}

