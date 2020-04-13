//conversiones 
let val;
//numero a cadena
val=String(5)
//booleano a cadena 
val=String(true);
//fecha a cadena
val=String(new Date());
//Array a cadena
val=String([1,2,3,4]);

//Metodo toString
val=(5).toString();

//de cadena a numero
// val=Number('5');
// val=Number(true);
// val=Number(false);
// val=Number(null);
// val=Number('hello');
// val=Number([1,2,3,4]);

val=parseInt('5');
val=parseFloat('50.34');

console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

//al sumar dos datos de diferente tipo solo se concatenan