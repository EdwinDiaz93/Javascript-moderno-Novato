/*se puede escribir constructores de esta manera y no cambia el modo en que se 
 ejecuta detras de  escena en javascript, las functiones prototypes 
 se pueden crear como funciones dentro de las clases 
 esto sin usar la palabra function*/
class Persona{
    //en el constructor se definen los atributos de cada objeto
    constructor(primerNombre,apellido,fdn){
        this.primerNombre=primerNombre;
        this.apellido=apellido;
        this.fechaNacimiento=new Date(fdn);
    }
    //se pueden crear funciones que seran prototipos sin necesidad de usar la 
    //palabra prototype
    saludo(){
        return `Hola como estas ${this.primerNombre} ${this.apellido}`;
    }

    calcularEdad(){
        const diferencia=Date.now() - this.fechaNacimiento.getTime();
        const fechaEdad=new Date(diferencia);
        return Math.abs(fechaEdad.getUTCFullYear()-1970);
    }

    nuevoApellido(nuevoApellido){
        this.apellido=nuevoApellido;
    }

    //se pueden crear metodos estaticos para poder usarlos sin necesidad
    // de que se creen objetos se utiliza poniendo el nombre de la clase y llamando al 
    //metodo Clase.metodo()
    static numeros(x,y){
        return x+y;
    }
}

//instanciacion de objetos e impresion
const mary=new Persona('Mary','Williams','11/12/1993');
mary.nuevoApellido('thompson');
console.log(mary.saludo());
console.log(Persona.numeros(1,1));