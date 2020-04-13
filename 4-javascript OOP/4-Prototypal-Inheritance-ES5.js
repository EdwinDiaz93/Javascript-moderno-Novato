//constructor de persona
//se crea un constructor para crear personas
function Persona(primerNombre,apellido){
    this.primerNombre=primerNombre;
    this.apellido=apellido;
}
//Esta funcion pertenecera al constructor de persona 
Persona.prototype.saludo=function(){
    return `Hola como estas ${this.primerNombre} ${this.apellido}`;
}
//se crea un objetos persona
const persona1=new Persona('Edwin','Diaz');
// console.log(persona1.saludo());

//constructor de cliente
//se crear un constructor para crear clientes
function Cliente(primerNombreC,apellidoC,telefono,membresia){
//se llama al constructor persona y se le pasa la instancia actual con dos de sus atributos
    Persona.call(this,primerNombreC,apellidoC);    
    this.telefono=telefono;
    this.membresia=membresia;
}

//heredando los prototipos de de persona 
//crea los prototipos que tiene persona para el objeto cliente
Cliente.prototype=Object.create(Persona);

//hace un prototype que retorna un cliente
Cliente.prototype.constructor=Cliente;

//se puede sobreescribir los prototipos de los padres
Cliente.prototype.saludo=function(){
    return `Hola como estas ${this.primerNombre} ${this.apellido} bienvenido a la compañia`;
}

//creando cliente
const cliente1=new Cliente('Edwin','Diaz','7119-6969','Estandar');

console.log(cliente1.saludo());