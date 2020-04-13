// var, let, const
//las cadenas pueden ir con comillas dobles o simples


//se crea una variable y se le asigna el nombre john doe
var name='john Doe';
//se imprime el contenido de la variable 
console.log(name);
//se reasigna el valor de la variable 
name='steve smith';
//se vuelve a imprimir el nombre de la variable
console.log(name);

//Se crea la variable greeting
var greeting;
/*se imprime el contenido de la variable que es
 undefined por no tener asignado ningun valor*/
console.log(greeting);
//se asigna hello world a greeting 
greeting='hello';
//se imprime el contenido de la variable greeting
console.log(greeting);


//letras, numeros, _, $
//no puede empezar con un numero

//variables con multiples palabras

var primerNombre='john';//camel case=>este es un uso estandar de programacion
var primer_nombre='sara';//underscore case
var PrimerNombre='json';// Pascal case
var primernombre='boars';//normal case

//LET
// mismo caso que var se diferencia en el alcance global y local de las funciones
let name;
let name='john Doe';
console.log(name);
name='steve smith';
console.log(name);


//CONST
// no se puede reasignar
// se le debe asignar un valor
/*en las constantes como arreglos 
y objetos literales se puede reasignar los valores del objeto o arreglo
pero no el objeto en si o el arreglos en si porque son constantes*/

const name='john doe';
console.log(name);
name='sara';
console.log(name);

const persona={
    nombre:'john doe',
    edad:25,
}
console.log(persona.nombre);

const numeros=[1,2,3,4,5];
console.log(numeros);