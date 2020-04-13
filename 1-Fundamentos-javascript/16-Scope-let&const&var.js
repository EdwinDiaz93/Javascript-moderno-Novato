//Global scope-Alcance global
var a=1;
let b=2;
const c=3;

//FUNCTION SCOPE

//no importa el keyword que se use para declarar
//los valores asignados seran unicos dentro de la funcion
//si se declara la misma variable con estas keywords no afectara

// function test(){
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log('Function Scope: '+ a+ b+ c);
// }
// test();

// IF-SCOPE
//en este caso no se puede distinguir con var entre variables globales
//y variables locales, si se declara con var la misma variable, esta 
//cambiara constantemente

// if(true){
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log('Global Scope: '+ a+ b+ c);
// }

//LOOP-SCOPE
//en este caso no se puede distinguir con var entre variables globales
//y variables locales, si se declara con var la misma variable, esta 
//cambiara constantemente

// for(var a=0;a<10;a++){
//     console.log(`El Loop: ${a}`);
// }

// console.log('Global Scope: '+ a + ' '+ b +' '+ c);