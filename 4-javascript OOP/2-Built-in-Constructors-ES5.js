/*el objeto string
la desventaja de usar objetos como datos primitivos es que a la hora de comparar
hay problemas 
*/
const nombre1='Edwin';
const nombre2= new String('Edwin');

// Se le pueden añadir mas priopiedades a un objeto
// nombre2.foo='bar'
// console.log(typeof nombre2);Devuelve un object no un string

// if(nombre2==='Edwin'){
//     console.log('si');
// }
// else{
//     console.log('no');
// }

// De igual forma sucede con los numeros , booleans , funciones, objetos

// // Numero
// const num1=5;
// const num2= new Number(5);

// // Boolean
// const bool1=true;
// const bool2=new Boolean(true);

// //Functiones
// const obtenerSuma=function(x,y){
//     return x+y;
// }

// const obtenerSuma=new Function('x','y','return x+y');
// console.log(obtenerSuma(1,1));

//Object

// const john1={nombre:'john'};
// const john2=new Object({nombre:'john'});

// //Array
// const array1=[1,2,3,4,5];
// const array2=new Array(1,2,3,4,5);
// console.log(array2);

// //Expresiones regulares
// const re1=/\w+/;
// const re2=new RegExp('\\w+');
// console.log(re2);