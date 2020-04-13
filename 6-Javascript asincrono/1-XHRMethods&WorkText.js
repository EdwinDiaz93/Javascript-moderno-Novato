document.querySelector('#button').addEventListener('click',cargarDatos);

/*
Status http
    200=>ok
    403=>Forbidden
    404=>Not found

Valores ReadyState
0:Peticion no inicializada
1:Estableciendo conexion con el servidor
2:peticion recibida
3:Procesando peticion
4:Peticion finalizada la respuesta esta lista
*/
function cargarDatos(e){    
    

    //intanciar el objeto ajax
    const xhr= new XMLHttpRequest();
    
    
    //OPEN
    //metodo del objeto xhr que toma como primer parametro el tipo
    //de peticion, como segundo la url y como tercero un booleano 
    //para indicar que sera asincrona la peticion
    xhr.open('GET','1-datos.txt',true);
    
    //MIENTRAS SE PROCESA
    //opcional para spinners o cargadores
    // xhr.onprogress=function(){
    //     console.log(xhr.readyState);        
    // }

    //NUEVA FORMA
    // onload carga la peticion y se verifica si el status es 200=>ok si es asi
    // se devuelve la respues con this.response    
    xhr.onload=function(){
        if(this.status===200){
            document.querySelector('#output').innerHTML=`<h1>${this.responseText}</h1>`;
        }
        else{
            console.error(this.status);
        }
    }

    //onerror opcional para errores
    xhr.onerror=function(){
        console.error('Error con la peticion');        
    }

    // ANTIGUA FORMA

    // xhr.onreadystatechange=function(){
    //     console.log(xhr.readyState);
    //     if(this.status===200 && this.readyState==4){
    //         console.log(this.response);
            
    //     }
    // }
    
    xhr.send();
    
}