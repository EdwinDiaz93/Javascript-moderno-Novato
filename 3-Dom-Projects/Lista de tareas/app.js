//definiendo las variables de la interfaz de usuario

//formulario para añadir tareas
const form=document.querySelector('#task-form');
//lista de tareas 
const taskList=document.querySelector('.collection');
//boton que limpia todas las tareas
const clearBtn=document.querySelector('.clear-tasks');
//campo que sirve para filtrar tareas
const filter=document.querySelector('#filter');
//campo que sirva para insertar una tarea
const taskInput=document.querySelector('#task');

//cargar todos los eventos
loadEventListeners();

//funcion que carga todos los eventos
function loadEventListeners(){
    //Evento que carga el documento por primera vez para obtener las tareas de local storage
    document.addEventListener('DOMContentLoaded',getTasks);
    //Evento de formulario que sirve para enviar un formulario
    form.addEventListener('submit',addTask);
    //Evento  click que sirve para remover una tarea
    taskList.addEventListener('click',removeTask);
    //Evento click que sirve para remover todas las tareas
    clearBtn.addEventListener('click',removeAllTask);
    //evento de teclado cuando se presiona una tecla se filtra la tarea
    filter.addEventListener('keyup',filterTask);
}

//añadir tarea a local storage
function addTask(e){
    //se verifica que el campo para añadir una tarea no este vacio
    //si esta vacio se muestra una alerta
    if(taskInput.value=== ''){
        alert('add a task');
    }

    //Se crea un elemento de lista para la tarea
    const li=document.createElement('li');
    //Se añade una clase al elemento de lista
    li.className='collection-item';
    //Se crea un nodo de texto para el elemento de lista
    li.appendChild(document.createTextNode(taskInput.value));
    //Se crea un elemento link
    const link=document.createElement('a');
    //Se añade una clase al elemento link
    link.className='delete-item secondary-content';
    //Se le añade un icono con inneHtml
    link.innerHTML='<i class=" fa fa-remove"></i>'
    //Se añade al elemtno de lista un link
    li.appendChild(link);
    //Se añade el elemento de lista a la lista desordenada taskList
    taskList.appendChild(li);
    //se vuelve a dejar en blanco el campo de la tarea
    taskInput.value='';

    // Almacenar en localStorage
    storeTaskInLocalStorage(taskInput.value);

    //prevenir el comportamiento por defecto del formulario
    e.preventDefault();
}

//Borrar tarea de  local storage
function removeTask(e){
    //se comprueba si el elemento objetivo contiene en su lista de clases
    //la clase delete-item
    if(e.target.parentElement.classList.contains('delete-item')){
        //se hace una confirmacion si desea eliminar
        if(confirm('Are you sure?')){
            //se elimina el elemento objetivo del documento
            e.target.parentElement.parentElement.remove();
            //se elimina elemento del local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }    
}

//remover todas las tareas de la lista
function removeAllTask(e){
    //una forma de remover un elemento del documento    

    //taskList.innerHtml='';

    //comprueba mientras la lista de tareas tenga un primer elemento hijo
    while(taskList.firstChild){
        //se remueve el primer elemento hijo de la lista
        taskList.removeChild(taskList.firstChild);
    }


    //forma de borrar las tareas de localStorage
    localStorage.clear();
}

//filtrar tarea por coincidencia de texto
function filterTask(e){
    //se crea una variable que contendra el texto que el usario usara para filtrar
    //se pasa todo a minusculas
    const text=e.target.value.toLowerCase();

    //Se obtienen todas las tareas del documento
    const tasks=document.querySelectorAll('.collection-item');    
    //se iteran todas las tareas que se han obtenido
    tasks.forEach(function(task){
        //se obtiene el primer elemento hijo de la lista
        const item=task.firstChild.textContent.toLowerCase();
        //se verifica si las cadenas son iguales
        if(item.indexOf(text)!=-1)
        {
            //el elemento se muestra si son iguales
            task.style.display='block';
        }
        else
        {
            //el elemento no se muestra si son desiguales
            task.style.display='none';
        }
    });  
}

//persistir tarea en local storage se enviar como parametro la tarea a persistir
function storeTaskInLocalStorage(task){
    //se define una variable para almacenar tareas que vengan del storage
    let tasks;
    //comprobar si hay tareas en el storage
    if(localStorage.getItem('tasks')===null)
    {
        // sino se inicia un array vacio
        tasks=[];
    }
    else
    {
        // si hay se almancenan en una variable
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    //se añade la nueva tarea
    tasks.push(task);
    //se persiste el arreglo de tareas con la nueva traea
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
}

//obtener todas las tareas del local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
        tasks=[];
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    // se iteran las tareas y se van creando elementos html para colocarlas
    tasks.forEach(function(task){
        //Crear elemento lo
        const li=document.createElement('li');
        //añadir clase al elemento li
        li.className='collection-item';
        //crear un  textnode
        li.appendChild(document.createTextNode(task));
        //crear un link
        const link=document.createElement('a');
        //añadir una clase al link
        link.className='delete-item secondary-content';
        //añadir un icono
        link.innerHTML='<i class=" fa fa-remove"></i>'
        //añadir el link al elemento li   
        li.appendChild(link);
        //añadir li a la lista ul->listItems
        taskList.appendChild(li);
        taskInput.value='';
    })
}

// Remover tarea de local storage
function removeTaskFromLocalStorage(taskElement){
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
        tasks=[];
    }
    else
    {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    // se iteran todas la tareas que se obtienen del local storage 
    //y se compara con el elemento que se quiere eleminar
    //si es igual 
    tasks.forEach(function(task,index){
        if(taskElement.textContent===task){
            //splice elimina un elemento en el indice especificado
            //splice(indice, cantidad de elemento, valor para reemplazar)
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}