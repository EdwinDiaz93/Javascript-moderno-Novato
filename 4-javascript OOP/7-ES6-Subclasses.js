//creacion de la clase persona
class Persona{
    constructor(primerNombre,apellido){
        this.primerNombre=primerNombre;
        this.apellido=apellido;
    }

    saludo(){
        return `Hola como estas ${this.primerNombre}  ${this.apellido}`;
    }
}
//la palabrea extends indica que se heredara de la clase person
class Cliente extends Persona{
    // Se define el constructor para los objetos
    constructor(primerNombre,apellido,telefono,membresia){
        //la palabra super llama al constructor de la clase padre
        //y envia los parametros ademas llama a todas las funciones
        // de la clase padre de modo que en cliente puede usarse tambien
        super(primerNombre,apellido);
        this.telefono=telefono;
        this.membresia=membresia;
    }
    //se puede definir metodos estaticos en la clase cliente
    //para usarse despues pero estos no pueden ser invocados por la clase padre
    static obtenerCostoMembresia(){
        return 500;
    }
}

const cliente1=new Cliente('Edwin','Diaz','7119-6969','Estandar');
console.log(cliente1.saludo());
console.log(Cliente.obtenerCostoMembresia());
