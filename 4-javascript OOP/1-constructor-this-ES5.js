//constructor de persona 

function Persona(nombre,nacimiento){
    //la palabra this hace referencia al objeto actual 
    //en este caso this hace referencia al objeto persona y a sus variables
    this.nombre=nombre;
    // this.edad=edad;
    this.nacimiento= new Date(nacimiento);
    //metodo para calcular edad
    this.obtenerEdad=function(){
        const diferencia=Date.now()-this.nacimiento.getTime();
        const edad=new Date(diferencia);
        return Math.abs(edad.getUTCFullYear()-1970);
    }
}

// console.log(this); hace referencia al objeto actual que seria window
//la palabra new sirve para crear objetos
const persona=new Persona('Edwin','11/12/1993');
console.log(persona.obtenerEdad());