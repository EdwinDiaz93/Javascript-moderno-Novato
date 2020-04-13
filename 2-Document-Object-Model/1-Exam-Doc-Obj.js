let val;
//es el objeto que provee de toda la informacion del documento
val=document;
//devuelve un arreglo con todos los elementos del documento 
//al ser array puede ser tratado con sus metodos
//devuelve el tamaña del array document.all
val=document.all.length;
val=document.all[1];
//devuelve el head y su informacion
val=document.head;
//devuelve el body y su informacion
val=document.body;
//devuelve el doctype y su informacion
val=document.doctype;
//devuelve el domain y su informacion
val=document.domain;
//devuelve el contentype y su informacion
val=document.contentType;

//devuelve los formularios como un arreglo
val=document.forms
//se puede acceder a los atributos del formulario seleccionado
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;

//devuelve los link como un arreglo
val=document.links;
//Se puede acceder a los atributos de los links seleccionados
val=document.links[0].id;
val=document.links[0].className;
val=document.links[0].classList[0];

//devuelve las imagenes del documento como un arreglo
val=document.images;
//devuelve los scripts  del documento como un arreglo
val=document.scripts;
val=document.scripts[2];
//se puede acceder a los atributos de un cada script
val=document.scripts[2].src;

let scripts=document.scripts;
//convertir en arreglo con el metodo Array.from()
//Se convierte el html collection en array
scriptsArray=Array.from(scripts);

//se itera el rray
scriptsArray.forEach(function(script){
    console.log(script.src);
});
