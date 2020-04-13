//El navegador es el entorno de desarrollo
//metodos , objetos y propiedades de window

// El objeto window contiene toda la informacion necesacia para operar js

//Alert utilizado para mostrar una ventana emergente
//alert('Hola mundo');

//prompt utilizado para obtener una entrada en el navegado un input
// const input=prompt('escribe algo');
// alert(input);

//confirm utilizado para confirmar acciones devuelve true 
//si se da click en ok
// if(confirm('¿Estas seguro?')){
//     console.log('si estas seguro');
// }
// else{
//     console.log('no estas seguro');
// }

// Dimensiones del navegador

let val;
//val=window.outerHeight;//obtiene la altura en pixeles de toda la ventana
 //del navegador. Representa el alto de toda la ventana,
 // incluyendo la barra de notificaciones (si se encuentra)
 // y los bordes.

//val=window.outerWidth;//obtiene el ancho en pixeles de toda la ventana
//del navegador. Representa el ancho de toda la ventana,
// incluyendo la barra de notificaciones (si se encuentra)
// y los bordes.

//val=window.innerHeight;// nos retornara un valor de tipo entero,
// que representara (en pixeles) la altura del viewport.

//val=window.innerWidth;// nos retornara un valor de tipo entero,
// que representara (en pixeles) el ancho del viewport.

//val=window.scrollY;//Retorna el número de píxeles que
// han sido desplazados en el documento mediante el scroll vertical.

//val=window.scrollX;//Retorna el número de píxeles que
// han sido desplazados en el documento mediante el scroll horizontal.


//Object Location-Objeto de localizacion
//contiene informacion del servidor 
//protocolos,puertos, y los host
// val=window.location.hostname;
// val=window.location.host;
// val=window.location.href;
// val=window.location.pathname;


// Redirrecionar y recargar
//se puede redireccionar y cargar la pagina
//cambiar atributo href y rediccionar a google
//window.location.href='http://google.com';
//recargar la pagina indefinidamente
//window.location.reload();

// Objeto History-Historial

// objeto utilizado para navegar entre paginas
// window.history.go(); recibe 2 tipos de paramtros
//si se quiere regresar son negativos y si se quiere avanzar son positivos
// val=window.history.length; devuelve un numero que simbolizan la
//cantidad de paginas visitadas


//navigator object-navegador objeto
//imprime toda la informacion del navegador 
//en especial la geolocalizacion
val=window.navigator;
console.log(val);
