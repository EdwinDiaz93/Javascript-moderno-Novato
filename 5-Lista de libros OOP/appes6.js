class Libro{
    constructor(titulo,autor,isbn){
        this.titulo=titulo;
        this.autor=autor;
        this.isbn=isbn;
    }    
}

class UI{
    añadirLibro(libro){
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

    limpiarCampos(){
        document.querySelector('#titulo').value='';
        document.querySelector('#autor').value='';
        document.querySelector('#isbn').value='';
    }

    mostrarAlerta(mensaje,clase){
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

    eliminarLibro(target){
        if(target.className==='delete'){        
            target.parentElement.parentElement.remove();
            this.mostrarAlerta('El libro se ha borrado correctamente','success');
            
        }
    }
}

class Almacenar{

    static obtenerLibros(){
        let libros;

        if(localStorage.getItem('libros')===null){
            libros=[];
        }
        else{
            libros=JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }

    static mostrarLibros(){
        const libros=this.obtenerLibros();
        const ui= new UI();
        libros.forEach(function(libro){
            ui.añadirLibro(libro);
        });
    }

    static almacenarLibros(libro){
        let libros=Almacenar.obtenerLibros();
        libros.push(libro);
        //hacer json string el objeto para para añadirlo al array con push
        localStorage.setItem('libros',JSON.stringify(libros));
    }

    static eliminarLibro(isbn){        
        let libros=Almacenar.obtenerLibros();
        libros.forEach(function(libro,index){
           if(libro.isbn===isbn){
            libros.splice(index,1)
           }
        });
        localStorage.setItem('libros',JSON.stringify(libros));
    }
}


//variables UI
formularioUI=document.querySelector('#formulario-libro');
listaLibrosUI=document.querySelector('#lista-libros');
//Events listeners

//evento de DOM
document.addEventListener('DOMContentLoaded',function(){
    Almacenar.mostrarLibros();
})

//evento de formulario
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
        //almacenar en local storage
        Almacenar.almacenarLibros(libro);
        //mensaje de exito
        ui.mostrarAlerta('El libro se añadio correctamente','success');     
        //limpiar campos
        ui.limpiarCampos();        
    }   
    e.preventDefault(); 
});

//evento de lista
listaLibrosUI.addEventListener('click',function(e){
    //se instancia un objeto ui
    const ui=new UI();
    //se invoca el metodo eliminar libro
    ui.eliminarLibro(e.target);  
    
    //eliminar libro de LS
    /*
    se accede al elemento a con target
    luego se accede al padre que seria th este th representa la x
    despues con previousElementSibling se accede al elemnto anterior a este th
    finalmente se accede al contenido de texto    
    */
    Almacenar.eliminarLibro(e.target.parentElement.previousElementSibling.textContent);
    //se previene el comportamiento
    e.preventDefault();
});