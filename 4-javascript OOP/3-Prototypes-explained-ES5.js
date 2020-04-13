//Object.prototype
//Persona.Prototype
//los prototipos o prototypes son las funciones que se definen en una clase
//cuando una clase es creada puede usar los prototipos de la clase object de la cual hereda
//tambien se definen para no tener funciones como atributos
function Persona(primerNombre,apellido,nacimiento){
    //la palabra this hace referencia al objeto actual 
    //en este caso this hace referencia al objeto persona y a sus variables
    this.primerNombre=primerNombre;
    // this.edad=edad;
    this.apellido=apellido
    this.nacimiento= new Date(nacimiento);
    //metodo para calcular edad
    // this.obtenerEdad=function(){
    //     const diferencia=Date.now()-this.nacimiento.getTime();
    //     const edad=new Date(diferencia);
    //     return Math.abs(edad.getUTCFullYear()-1970);
    // }
}
//obtener edad
Persona.prototype.obtenerEdad=function(){
    const diferencia=Date.now()-this.nacimiento.getTime();
    const edad=new Date(diferencia);
    return Math.abs(edad.getUTCFullYear()-1970);
}
//obtener nombre completo
Persona.prototype.obtenerNombreCompleto=function(){
    return`${this.primerNombre}  ${this.apellido}`;
}

//Cambiar apellido
Persona.prototype.cambiarApellido=function(nuevoApellido){
this.apellido=nuevoApellido;
}
const john=new Persona('john','Doe','12/11/1993');
const maria=new Persona('maria','coto','10/1/1997');
maria.cambiarApellido('smith');


console.log(john);
console.log(maria.obtenerEdad);
console.log(maria);
// hasOwnProperty verifica si un objeto tiene ciertos atributos
//devuelve false sino los tiene y solo funciona con los atributos
//no con los metodos que se definen en los prototypes
console.log(maria.hasOwnProperty('apellido'));