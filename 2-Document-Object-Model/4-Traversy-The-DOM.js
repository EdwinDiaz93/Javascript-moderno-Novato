let val;
//traversy de dom sirve para navegar entre nodos y elementos en el documento
const list=document.querySelector('ul.collection');
const listItems=document.querySelector('li.collection-item:first-child');

val=list;
val=listItems;

//obtener los child Nodes
val=list.childNodes;
// val=list.childNodes[0].nodeName;
// val=list.childNodes[0].nodeType;
// val=list.childNodes[0].nodeValue; 

/*
Depende del tipo de node
Nodetypes
1-Element 
2-Attribute
3-Text Node
8-Comment
9-Document itself
10-Doctype
*/

//obtener los children elements nodes los hijos de la etiqueta seleccionada
val=list.children;
val=list.children[1];

//children of children-Hijos de hijos obtener etiquetas dentro de etiquetas
list.children[3].children[0].id='test-link';;
val=list.children[3].children[0];

//first child primera etiqueta
val=list.firstChild;
val=list.firstElementChild;

//last child ultima etiqueta
val=list.lastChild;
val=list.lastElementChild;

// obtener parents padres de las etiquetas
val=listItems.parentNode;//devuelve el ul
val=listItems.parentElement;//devuelve el ul

// obtener parent of parent obtener al padre de la etiqueta padre
val=listItems.parentElement.parentElement;//devueve el div que encierra el ul

// obtener el next sibling obtener la siguiente etiqueta del mismo nivel
val=listItems.nextElementSibling.nextElementSibling;//va en secuencia con el siguiente hermano
val=listItems.previousElementSibling;//va en secuencia con el anterior hermano
//devuelve null porque el primero elemento li no tiene hermano anterior

val=listItems.parentElement.previousElementSibling;

console.log(val);