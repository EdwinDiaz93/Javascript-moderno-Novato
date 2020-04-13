//Creacion de algunos arreglos
const numeros1=[1,2,3,4,5,6];
const numeros2=new Array(11,22,33,44,55,66,77);
const frutas=['manzanas','peras','sandias','bananas'];
const mixed=[23,'hola',true,undefined,null,{a:1,b:2}, new Date()];

let val;
//Tamaño de un array con length
val=numeros1.length
//Verificar si es un array
val=Array.isArray(numeros1);
//obtener un valor en especifico del array
val=numeros1[5];
//modificar el array
numeros1[0]=35;
//obtener indice de un array
val=numeros1.indexOf(4);

//modificando el array

// //insertando numero al final
numeros1.push(250);
// //insertando numero al principio
numeros1.unshift(120);
// //removiendo numero del final
numeros1.pop()
// //removiendo numero al principio
numeros1.shift();
// //usando splice eleminamos elementos de un array y si es necesario se 
// //reemplazan, retorna los elemenos eliminados en otro array
val=numeros1.splice(1,2)
// //revertir el array
// //revierte los elementos del array
numeros1.reverse();
// //concatenar un array
val=numeros1.concat(numeros2);

//sorteando arrays
//sin no se colocan parametros ordena de forma ascendente tomando de base
//el primer digito o letra
//sort en frutas
frutas.sort();
//sort en numeros1
numeros1.sort();

//sort con orden ascendente
numeros1.sort(function(x,y){return x-y});
//sort con orden descendente
numeros1.sort(function(x,y){return x+y});

//find()
//retorna el valor del primer elemento que coincida con la condicion
// de otra manera se tomara como indefinido

function menor5(num){
    return num < 5;
}

val=numeros1.find(menor5);
//imprime 2 el primer numero menor a 5 en el array
console.log(numeros1);
console.log(frutas);
console.log(val);