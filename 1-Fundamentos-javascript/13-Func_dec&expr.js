//declaracion de funciones
//se pueden crear funciones y usarse donde sea
//todos los tipos de funciones aceptan paramtros
//se pueden colocar valores por defecto en los parametros
//generalmente se returna un valor

//Funciones decoradores-Function decorators
function saludo(primerNombre='Edwin',apellido='Diaz'){
    return `hola ${primerNombre} ${apellido}`;
}

//console.log(saludo());

//Expresion de funcion-Function expresssion
//consiste en asignar la funcion como si de una variable se tratara
//debe declararse antes de invocarse
const cuadrado=function(x=2){
return Math.pow(x,2);
}
console.log(cuadrado(8));

//expresion de funciones invocables inmediatamente
//inmeditly invokable function expresion
// tipo de funcion que declara primero la funcion 
//y luego los parametros a enviar en la funcion
//el segundo parantesis recibe los parametros y ejecuta la funcion a la vez
//(funcion)(paramtros)

// (function(){
//     console.log('IIFE`s ejecutando...');
// })();

// (function(nombre){
//     console.log(`hola ${nombre}`);
// })('Edwin');

// Propiedades de metodos
// se pueden crear objetos cuyos atributos tengan funciones
const toDo={
    crear:function(){
        console.log('creada toDo');
    },
    editar:function(id){
        console.log(`editado el toDo ${id}`);
    }
}

//se pueden crear funciones fuera de un objeto 
toDo.borrar=function(id){
    console.log(`Eliminado el toDo ${id}`);
}

toDo.crear();
toDo.editar(22);

toDo.borrar(1);