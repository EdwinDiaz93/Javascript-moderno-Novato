//reemplazar elementos

// crear elementos
const newHeading=document.createElement('h2');
//añadir id
newHeading.id='task-title';
//añadir contenido al elemento
newHeading.append(document.createTextNode('Task List'));

//obtener el viejo elemento heading por medio del id
const oldHeading=document.getElementById('task-title');

//obtener al padre de ambos elementos
cardAction=document.querySelector('.card-action');

cardAction.replaceChild(newHeading,oldHeading);
// console.log(newHeading);


//remover elementos html

const lis=document.querySelectorAll('li');
const list=document.querySelector('ul');

// removiendo elementos individuales 
lis[0].remove();
//removiendo hijos
list.removeChild(lis[3]);

//clases 
//obtener el primer  li
const firstLi=document.querySelector('li:first-child');
// obtener el primer hijo de li
const link=firstLi.children[0];
let val;
//obtener el nombre de la clase
val=link.className;
//obtener el primer elemento del arreglo que devielve classlist
val=link.classList[0];
//añadir y remover a classlist sus respectivas classes
link.classList.add('John-Doe');
link.classList.remove('John-Doe');
val=link.classList;

// attributos
//obtener atributo
val=link.getAttribute('href');
//establecer atributo
val=link.setAttribute('href','http://google.com');
//establecer nuevo atributo con el nombre title y valor Google
val=link.setAttribute('title','Google');
//Verificar si contiene el atributo haref el link
val=link.hasAttribute('href');
//remover el atributo title
val=link.removeAttribute('title');
val=link;
console.log(val);