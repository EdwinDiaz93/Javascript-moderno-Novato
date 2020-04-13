//Bucle FOR se utiliza cuando se sabe hasta donde llega el bucle
//itera hasta que una condicion especifica se cumpla
//en el caso siguiente empieza en cero y a medida que pasan
//los bucles se incrementa hasta llegar a 9 porque la condicion
//10<10 no se cumple

// for(let i=0;i<10;i++ ){
//     console.log(`Numero ${i}`);
// }

// for(let i=0;i<10;i++){
//     if(i===2){
//         console.log(`El numero ${i} es mi favorito`); 
//         //al llegar a la clausula continue se detiene el bucle por un
//         //momento y continua con la iteracion 3  
//         continue;     
//     }
    
//     if(i===5){        
//         console.log(`El bucle se detiene en ${i} totalmente`);
//         // break es utilizado para detener un bucle totalmente
//         break;
//     }
//     console.log(`numero: ${i}`);
// }

//bucle WHILE se utiliza cuando no se sabe hasta donde llega el bucle
// let i=0;
// while(i<10){
//     console.log(`numero ${i}`);
//     i++;
// }

//bucle DO WHILE entra almenos una vez al bucle sin importar la condicion
// let i=0;
// do{
//     console.log(`numero ${i}`);
//     i++;
// }
// while(i<10)

//bucle a traves de array
const carros=['Ford','Chevy','Honda','Toyota'];

// for(let i=0;i<carros.length;i++){
//     console.log(carros[i]);
// }

//FOREACH itera sobre un arreglo se le pasa un callback que lleva como 
//parametro cada uno de los objetos a iterar
//tiene tres parametros el obj el indice y el propio arreglo
// carros.forEach(function(carro,index){
//     console.log(`${index}:${carro}`);
// })

// MAP toma un arreglo se le pasa un callback
//y puede retornar un nuevo arreglo de los atributos de cada objeto
// const usuarios=[
//     {id:1,nombre:'john'},
//     {id:2,nombre:'Doe'},
//     {id:3,nombre:'Sara'},
//     {id:4,nombre:'Karen'},
// ];

// const ids=usuarios.map(function(usuario){
//     return usuario.id;
// })

// console.log(ids);

//bucle for in

const usuario={
    primerNombre:'Edwin',
    apellido:'Diaz',
    edad:26,
}
//itera un objeto y las claves son los atributos del objeto
//el valor es el objeto a iterar entre corchetes sus claves
for(let u in usuario){
    console.log(`${u}:${usuario[u]}`);
}
