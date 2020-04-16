
// const sayHello= function(){
//     console.log('hola');    
// }

//con arrow function

// const sayHello=()=>{
//     console.log('hola');    
// }

//una linea no necesita llaves
// const sayHello=()=>console.log('hola');

//retorno de una linea

// const sayHello=()=>'hola';

//es lo mismo de arriba
// function sayHello(){
//     return 'hola';
// } 

// console.log(sayHello());

// retornar un objeto 
// const obj=()=>({mensaje:'mensaje'});

// console.log(obj());


//parametros 

// si es un solo parametros no se necesitan parentesis en el arrow function
// const sayHello=nombre=>console.log(`hola ${nombre}`);

// sayHello('Edwin');

//cuando ya son dos parametros o mas se necesita un parentesis
// const sayHello=(nombre,apellido)=>console.log(`Hola ${nombre} ${apellido}`);

// sayHello('Edwin','Diaz');


//arrow  functions como callbacks

const users=['nathan','jonh','william'];

//la version con function 
// const nameLength=users.map(function(nombre){
//     return nombre.length;
// });

//la version con arrow functions
// const nameLength=users.map((nombre)=>{
//     return nombre.length;
// });

//la version mas corta
// const nameLength=users.map(nombre=>(nombre.length));

//version de prueba
// const nameLength=users.map(nombre=>console.log(nombre.length));

// console.log(nameLength);


