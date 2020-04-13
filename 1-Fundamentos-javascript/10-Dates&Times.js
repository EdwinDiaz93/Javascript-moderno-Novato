let val;
//patrones comunes para creacion de fechas
let nacimiento=new Date('9/10/1981');
nacimiento= new Date('october 3 1999 12:12:12')
val=nacimiento;
//Devuelve la fecha de hoy
const hoy= new Date();

//obtener valores de las fechas
val=hoy.getMonth()//devuelve el numero del mes va de 0 a 11
val=hoy.getDate();//devuelve el numero de dia
val=hoy.getDay();//devuelve el dia de la semana en forma de numero 
//van del 0 al 6 empezando por domingo
val=hoy.getFullYear();//devuelve el año 
val=hoy.getHours();//devuelve las horas
val=hoy.getMinutes();//devuelve los minutos
val=hoy.getSeconds();//devuelve los segundos
val=hoy.getMilliseconds();//devuelve los milisegundos
val=hoy.getTime();//retorna la cantidad de milisegundos desde 1970/1/1

//insertar valores en las fechas usando set
nacimiento.setMonth(4);
nacimiento.setDate(12);
nacimiento.setFullYear(2010);
nacimiento.setHours(15);
nacimiento.setMinutes(45);
nacimiento.setSeconds(30);
nacimiento.setMilliseconds(300);
console.log(nacimiento);