//se obtienen los botones de la interfaz
const button1=document.querySelector('#button1');
const button2=document.querySelector('#button2');
//se añade eventos click a los botones de la interfaz
button1.addEventListener('click',cargarCliente);
button2.addEventListener('click',cargarClientes);

//funcion cargar cliente
function cargarCliente(e){

    const xhr=new XMLHttpRequest();

    //Open-Abrir conexion
    xhr.open('GET','2-cliente.json',true);

    //Cargar datos del archivo local cliente.json
    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
            const cliente=JSON.parse(this.responseText);
            const output=`
            <ul>
                <li>ID:${cliente.id}</li>
                <li>Nombre:${cliente.nombre}</li>
                <li>Compañia:${cliente.compañia}</li>
                <li>Telefono:${cliente.telefono}</li>
            </ul>
            `;    
            
            document.querySelector('.cliente').innerHTML=output;
        }
    }

    //Send-Enviar la respuesta
    xhr.send();
}

//cargar los clientes del archivo
function cargarClientes(e){

    const xhr=new XMLHttpRequest();

    //Open abrir la conexion con los archivos locales
    xhr.open('GET','2-clientes.json',true);
    // Cargar datos del archivo local cliente.json
    xhr.onload=function(){
        let output=''
        if(this.status===200){
            // console.log(this.responseText);
            //transformar a objetos javascript
            const clientes=JSON.parse(this.responseText);
            //recorrer los clientes y añadirlos al output
            clientes.forEach(function(cliente){
                output+=`
                    <ul>
                        <li>ID:${cliente.id}</li>
                        <li>Nombre:${cliente.nombre}</li>
                        <li>Compañia:${cliente.compañia}</li>
                        <li>Telefono:${cliente.telefono}</li>
                    </ul>
                `;    
            });
            //insertar los clientes en el navegador            
            document.querySelector('.clientes').innerHTML=output;
        }
    }

    //Send-Enviar respuesta
    xhr.send();    
}