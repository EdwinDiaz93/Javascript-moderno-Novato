const nombre='john';
const edad=30;
const trabajo='Desarrollador web';
const ciudad='Miami';
let html;

//sin cadenas de plantilla (ecmascript 5)
//se debe concatenar cada parte del texto con las variables para finalmente insertar el resultado en el navegador 

//en linea
html='<ul><li>nombre:'+nombre+'</li><li>edad:'+edad+'</li><li>trabajo:'+trabajo+'</li><li>ciudad:'+ciudad+'</li></ul>';

//con saltos de linea
html='<ul><li>nombre:'
+nombre+'</li><li>edad:'
+edad+'</li><li>trabajo:'
+trabajo+'</li><li>ciudad:'
+ciudad+'</li></ul>';

//funcion que retorna la cadena hola
function hola(){
    return 'hola';
}

//con los template strings 
//se inserta dinamicamente expresiones a la cadena para hacerla mas dinamica 
html=`
<ul>
<li>nombre: ${nombre}</li>
<li>edad: ${edad}</li>
<li>trabajo: ${trabajo}</li>
<li>ciudad: ${ciudad}</li>
<li>${2+2}</li>
<li>${hola()}</li>
<li>${ edad > 30 ? 'Es mayor de 30':'Es menor de 30'}</li>
</ul>
`

//se inserta el valor de html en el body
document.body.innerHTML=html;