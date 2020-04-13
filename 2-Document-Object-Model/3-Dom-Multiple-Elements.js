// //obtener elementos por nombre de clase

// //se obtienen todos los elementos que contengan la clase collection
// const items=document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color='red';
// items[3].innerText='Hello world';

// //Se obtienen todos los elementos que contengan la clase collection-item y esten dentro de ul
// const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

//obtener elementos por nombre de etiquetas
//obtiene un arreglo de elementos
let lis=document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color='red';
// lis[3].innerText='Hello world';

// Convertir de html collection a Array
lis=Array.from(lis);

// lis.reverse();

// lis.forEach(function(li,index ){
//     console.log(li);
//poner contenido al elemento
//     li.textContent=`${index} hello`
// });

//seleccionar por etiqueta y clase un arreglo de elementos
// const items=document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);
// items.forEach(function(item, index){
//         item.textContent=`${index} hello`;
//     });

// const liOdd=document.querySelectorAll('li:nth-child(odd)');
// const liEven=document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background='#ccc';
// });

// for(let i=0;i<liEven.length;i++){
//     li[i].style.background='#f8f8f8';
// }