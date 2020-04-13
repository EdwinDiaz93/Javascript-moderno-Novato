// //en vanilla javascript exiten dos tipos de element selectors

// //single
// //document.getElementById; selecciona el elemento por el id
// const task=document.getElementById('task-title');
// console.log(task);

// //obtener atributos de ese elemento
// console.log(task.id);
// console.log(task.className);

// //cambiar los estilos
// task.style.background='#333';
// task.style.color='#fff';
// task.style.padding='5px';
// //task.style.display='none';

// //cambiar contenido el mas usado es innerHTML

// task.textContent='Task Update';
// task.innerText='Task Re-update';
// task.innerHTML='<span> <p>Task Re-re-update</p></span>';

let newTask;
//selecciona con  queryselector  el id task-title
newTask =document.querySelector('#task-title');
//Seleccion con queryselector  la clase card-title
newTask =document.querySelector('.card-title');
//selecciona el primer h5 del documento 
newTask =document.querySelector('h5');
console.log(newTask);

//selecciona el primer elemento li del documento
document.querySelector('li').style.color='red';
//se pueden utilizar etiquetas anidadas desde body hasta le etiqueta objetivo
document.querySelector(' ul li').style.color='blue';

//se pueden modificar elementos individuales y sus estilos usando css3
document.querySelector('li:last-child').style.color='yellow';
document.querySelector('li:nth-child(3)').style.color='green';
document.querySelector('li:nth-child(4)').textContent='Hello World';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='#f4f4f4';
