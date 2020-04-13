//los objetos se identifican creandolos con llaves
//existen atributos de objetos que pueden ser arreglos, funciones
//u otros objetos
const persona={
    primerNombre:'Edwin',
    apellido:'Diaz',
    edad:24,
    hobbies:['Videojuegos','Ver peliculas'],
    direccion:{
        departamento:'San Salvador',
        codigo:'SS',        
    },    
    //La palabra this se utiliza para hacer referencia a atributos de un
    //mismo objeto
    obtenerFechaNacimiento:function(){return 2020-this.edad},
}
let val;
val=persona;
//obteniendo valores del objeto
val=persona.primerNombre;//forma recomendada
val=persona['apellido'];//forma no recomendada
val=persona.hobbies[1];
val=persona.direccion.departamento;
val=persona.direccion['codigo'];
val=persona.edad;
val=persona.obtenerFechaNacimiento();
console.log(val);

//se puede tener arreglos de objetos 
const gente=[
    {nombre:'Edwin',edad:26},
    {nombre:'Json',edad:24},
    {nombre:'Aster',edad:36}
];
//bucle para iterar arreglos
for(let i=0;i<gente.length;i++){
    console.log(gente[i].nombre);
}