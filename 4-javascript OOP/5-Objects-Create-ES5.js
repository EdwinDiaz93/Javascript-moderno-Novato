// se declara un objeto que tiene funciones, este funciona como el prototype
const personaPrototype={
    saludo:function(){
        return `Hola como estas ${this.primerNombre}  ${this.apellido}`;
    },
    apellidoCivil:function(nuevoApellido){
        this.apellido=nuevoApellido;
    }
}

// const mary=Object.create(personaPrototype);

// mary.primerNombre='mary';
// mary.apellido='Williams';
// mary.edad=23;
// mary.apellidoCivil('Thompson');
// console.log(mary.saludo());

//alternativa para colorcar valores de atributos con object.create
// para crear objetos
const Edwin=Object.create(personaPrototype,{
    primerNombre:{value:'Edwin'},
    apellido:{value:'Diaz'},
    edad:{value:27}
});

console.log(Edwin.saludo());