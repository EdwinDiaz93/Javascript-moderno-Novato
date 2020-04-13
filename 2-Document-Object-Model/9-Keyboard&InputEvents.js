const form=document.querySelector('form');
const inputTask=document.getElementById('task');
const heading=document.querySelector('h5');
const select=document.querySelector('select');
const lis=document.querySelectorAll('ul li');

inputTask.value=''
//comportamiento por defecto del formulario submit

// form.addEventListener('submit',eventHandlerForm);

//evento por defecto cuando se presiona cualquier tecla
// inputTask.addEventListener('keydown',eventHandlerInput);

//evento por defecto cuando se presiona cualquier tecla y se suelta
// inputTask.addEventListener('keyup',eventHandlerInput);

//evento por defecto cuando se presiona cualquier similiar a keydown
// inputTask.addEventListener('keypress',eventHandlerInput);

//evento por defecto cuando se coloca el cursor en un elemento input
// inputTask.addEventListener('focus',eventHandlerInput);

//evento por defecto cuando se coloca el cursor en un elemento input 
//y luego se quita de ese elemento
// inputTask.addEventListener('blur',eventHandlerInput);


//evento por defecto cuando se corta texto del elemento input
// inputTask.addEventListener('cut',eventHandlerInput);

//evento por defecto cuando se corta texto del elemento input
// inputTask.addEventListener('copy',eventHandlerInput);

//evento por defecto cuando se pega texto en el  elemento input
// inputTask.addEventListener('paste',eventHandlerInput);

//evento por defecto cuando trabaja con elementos input
// inputTask.addEventListener('input',eventHandlerInput);


//evento por defecto cuando trabaja con elementos select
//change
// select.addEventListener('change',eventHandlerInput);




// function eventHandlerForm(e){
//     console.log(`Event: ${e.type}`);
//     // console.log(inputTask.value);// se imprime el valor del input
//     //e.preventDefault previene que el atributo action redireccione
//     lis[0].textContent=inputTask.value;
//     e.preventDefault();
// }



// function eventHandlerInput(e){
//     console.log(`Event: ${e.type}`);

//     // heading.innerText=`${e.target.value}`
//     //target es el elemento actual este caso el input y su value
//     console.log(e.target.value);

//     //e.preventDefault previene que el atributo action redireccione
//     // e.preventDefault();
// }
