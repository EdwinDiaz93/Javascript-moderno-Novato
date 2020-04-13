const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card');
const heading=document.querySelector('h5');

// click-se obtiene al hacer click
// clearBtn.addEventListener('click',eventHandler);

//doble click se obtiene al hacer doble click
// clearBtn.addEventListener('dblclick',eventHandler);

//mousedown ocurre cuando se mantiene presionado el boton del mouse
// clearBtn.addEventListener('mousedown',eventHandler);

//mouseup ocurre cuando se mantiene presionado el boton del mouse y se suelta rapido
// clearBtn.addEventListener('mouseup',eventHandler);

// //mouseenter ocurre cuando se posiciona el cursor dentro del elemento
// clearBtn.addEventListener('mouseenter',eventHandler);
// card.addEventListener('mouseenter',eventHandler);

// //mouse leave ocurre cuando el cursor se posiciona fuera del elemento 
// card.addEventListener('mouseleave',eventHandler);

// // mouseover ocurre cuando el cursor se posiciona dentro de cualquier elemento elemento
// card.addEventListener('mouseover',eventHandler);

// // mouseout ocurre cuando el cursor se posiciona fuera de cualquier elemento
// card.addEventListener('mouseout',eventHandler);

// mousemove 
card.addEventListener('mousemove',eventHandler);

function eventHandler(e){
    console.log(`Evento ${e.type}`);
    //posiciones dinamicas relativas al elemento card
    heading.textContent=`posicionY:${e.offsetY}, posicionX:${e.offsetX}`;
    //colores dinamicos relativos al elemento body
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${20})`;

}