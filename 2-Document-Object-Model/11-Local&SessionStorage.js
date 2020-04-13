//insertar un item en localstorage
// localStorage.setItem('nombre','john');
// localStorage.setItem('edad','27');

//insertar un item en session storage
// sessionStorage.setItem('nombre','Alex');

//remover un item de local storage
// localStorage.removeItem('nombre');

//Limpiar el local storage
// localStorage.clear();

//obtener de  local storage
// const nombre=localStorage.getItem('nombre');
// const edad=localStorage.getItem('edad');

// console.log(nombre, edad);

//se obtiene el formulario a trabajar y se le añade el evento submit
document.querySelector('form').addEventListener('submit',function(e){
//se obtiene el elemento input a traves de su id y se obtiene su valor
task=document.getElementById('task').value;

//se crear una variable tasks que contendra el arreglo de tareas
let tasks;
//Verficiar si existe la variable en local storage
if(localStorage.getItem('tasks')===null){
    //sino existe la variable en local storage se crea como un arreglo vacio
    tasks=[];
}
else{
    //si existe transforma en objeto javascript la cadena json en local storage
    tasks=JSON.parse(localStorage.getItem('tasks'));
    
}
// se le añade la nueva tarea traida del input al arreglo de tareas
tasks.push(task);

//Se inserta el nuevo arreglo en formato string de json para que se guarde
localStorage.setItem('tasks',JSON.stringify(tasks));
//se muestra un mensaje de que se añadio la tarea
alert(`${task} ha sido añadido como task`);
//se evita que el navegador ejecute el action por defecto
e.preventDefault()
});

// const tasks=JSON.parse(localStorage.getItem('tasks'));

// //se itera todas las variables en el local storage
// tasks.forEach(function(task){
// console.log(task);
// });