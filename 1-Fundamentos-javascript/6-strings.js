const firstName='William';
const lastName='Johnson';
const age=26;
const str='hello there my name is Edwin';
const etiquetas='diseño web,desarrollo web,desarrollo movil'
let val;

val=firstName+lastName;
//Concatenacion
val=firstName + ' ' +lastName;
//Añadir mas texto a la variable
val ='Edwin '
val+='Diaz'

val='Hola mi nombre es: '+firstName+' mi edad es: '+age+' y mi apellido es: '+lastName;


//Escapado de caracteres se usa fleca invertida para el caracter o se encierra en comillas dobles
val='that\'s awesome, you\'re great'

//Metodo lenght
val=firstName.length;

//metodo concat()
val=firstName.concat(' ',lastName);

//Metodos Case
val=firstName.toUpperCase();
val=lastName.toLocaleLowerCase();

//Metodos de array
//devuelve la letra que esta ubicada en el indice 2
val=firstName[2];
val=firstName.indexOf('W');//devuelve el indice de W de izquierda a derecha
val=firstName.lastIndexOf('l');//devuelve el indice de derecha a izquierda

//charAt()
val=firstName.charAt(0);//devuelve el caracter del indice especificado
//Devuelve el ultimo caracter
val=firstName.charAt(firstName.length-1);

//subcadenas 
val=firstName.substring(0,4);
//slice() acepta numeros negativos para leer de derecha a izquierda
val=firstName.slice(-3);

//split()
val=str.split(' ');//convierte una cadena de texto en subcadenas que forman un array cada elemento del array estara dividido por el caracter que separe a las palabras ya sea un espacio o coma

val=etiquetas.split(',')

//replace()
val=str.replace('Edwin','Jose');//remplaza en la cadena de texto una palabra, toma como primer argumento la palabra a reemplazar y como segundo argumento la palabra que reemplazara 
console.log(val);