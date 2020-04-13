// Pasos 
/*
-declara el constructor de libros y uis con sus atributos
-obtener el formulario y añadir el evento submit
-obtener los valores del formulario
-construir un objetos con los valores obtenidos del formulario
-crear un prototype al constructor UI y llamarlo para añadir el libro pasandolo como argumento
crear los elementos html que pintaran la tabla y mandar el objeto
-añadir prototype para limpiar campos y ejecutarlo despues de añadir el libro a la tabla
-crear el mensaje de alerta como funcion dentro de el se creara el div se le añadiran clases
 las cuales vendran como parametros en  funcion luego un nuevo textnode que tambien vendra 
 como parametro en la funcion
 -despues se obtendra el padra del formulario para insertar la alerta antes del formulario
-para eliminar un libro se usa event delegation que consiste en obtener el padre de los objetos
a eliminar luego se verifica si los hijos tienen x clases con un if
-es necesario usar traversy the dom para navegar del link <a></a> a <th></th> y luego
a <tr></tr> que es lo que se quiere eliminar con remove
*/

//Contructor de libro
function Libro(titulo,autor,isbn){
    this.titulo=titulo;
    this.autor=autor;
    this.isbn=isbn;
}

//UI constructor
function UI(){}
//prototype de añadir libro
UI.prototype.añadirLibro=function(libro){
const listaLibros=document.querySelector('#lista-libros');
const row=document.createElement('tr');
row.innerHTML=`
        <th>${libro.titulo}</th>
        <th>${libro.autor}</th>
        <th>${libro.isbn}</th>
        <th><a href="#" class="delete">X</a></th>`
        ;
listaLibros.appendChild(row);
}

//prototype de limpiar campos
UI.prototype.limpiarCampos=function(){
    document.querySelector('#titulo').value='';
    document.querySelector('#autor').value='';
    document.querySelector('#isbn').value='';
}
//prototype de mostrar alerta
UI.prototype.mostrarAlerta=function(mensaje,clase){
    //creado elmento div
    const div=document.createElement('div');
    //añadir una clase al elemento
    div.className=`alert ${clase}`;
    //añadir texto al mensaje
    div.appendChild(document.createTextNode(mensaje));
    //obteniedo el padre
    const container=document.querySelector('.container');
    // obteniendo el hijo que ira despues del elemento a insertar
    const formulario=document.querySelector('#formulario-libro');
    //insertar antes del formulario
    container.insertBefore(div,formulario);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);

}
//prototype de eliminar
UI.prototype.eliminarLibro=function(target){
    if(target.className==='delete'){        
        target.parentElement.parentElement.remove();
        this.mostrarAlerta('El libro se ha borrado correctamente','success');
        
    }
}


//variables UI
formularioUI=document.querySelector('#formulario-libro');
listaLibrosUI=document.querySelector('#lista-libros');
//Events listeners
formularioUI.addEventListener('submit',function(e){
    //obteniendo los valores del formulario
    const titulo=document.querySelector('#titulo').value,
          autor=document.querySelector('#autor').value,
          isbn=document.querySelector('#isbn').value;
          
    // Instanciando libro
    const libro=new Libro(titulo,autor,isbn);
    //instanciando el objeto ui
    const ui=new UI();

    if(titulo===''||autor===''||isbn===''){
        //alerta de error
        ui.mostrarAlerta('debes llenar todos los campos','error');
        //limpia los campos
        ui.limpiarCampos();
    }else{
        //añadir el libro a la lista
        ui.añadirLibro(libro);        
        //mensaje de exito
        ui.mostrarAlerta('El libro se añadio correctamente','success');
        //limpiar campos
        ui.limpiarCampos();        
    }   
    e.preventDefault(); 
});

listaLibrosUI.addEventListener('click',function(e){
    //se instancia un objeto ui
    const ui=new UI();
    //se invoca el metodo eliminar libro
    ui.eliminarLibro(e.target);    
    //se previene el comportamiento
    e.preventDefault();
});

