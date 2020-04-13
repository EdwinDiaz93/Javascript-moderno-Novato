//create element-crear elementos

const li=document.createElement('li');

// Añadir clase
li.className='collection-item';
//Añadir id
li.id='new-item';
//Añadir attribute
li.setAttribute('title','new item');

//crear text node
li.appendChild(document.createTextNode('hello world'));

// crear nuevo link element
const link=document.createElement('a');
// Añadir clase al link
link.className='delete-item secondary-content';
link.href='#';

// crear icon element
const i=document.createElement('i');
//añadir clase para elemnto i 
i.className='fa fa-remove';

// append i as child of a
link.appendChild(i);
// append a as child of li
li.appendChild(link);

// append li as child of ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);

