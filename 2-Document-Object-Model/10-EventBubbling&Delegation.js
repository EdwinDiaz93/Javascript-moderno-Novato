//Evetn bubbling
//cuando se añade un evento a un elemento html y ademas los padres de este elemento
// utilizan el mismo evento si el elemento hijo dispara el evento los padres los haran 
//automaticamente

// document.querySelector('.card-title').addEventListener('click',runEvent);
// document.querySelector('.card-content').addEventListener('click',runEvent);
// document.querySelector('.card').addEventListener('click',runEvent);
// document.querySelector('.col').addEventListener('click',runEvent);

// function runEvent(e){
// console.log(e.target.className);
// }

//Event Delegation

// consiste en añadir un evento a un elemento que seria el padre de los elementos
//con los que se quiere trabajar luego se deben usar condicionales para poder 
//interactuar con los elementos objetivos

// const delItem=document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);

// function deleteItem(e){
//     if(e.target.parentElement.className==='delete-item secondary-content'){
//         console.log('delete-item');
//     }
// }

//se pone de objetivo al body para poder trabajar con sus elmentos hijos
document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    //se crea una condicional para verificar si el elemento a trabajar tiene
    //dicha clase
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('list item');
        //operacion  que elimina el elemento seleccionado 
        e.target.parentElement.parentElement.remove();
    }
}

