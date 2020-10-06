/*esn una estructura de datos que guarda valores

como se crea un array ?*/

var frutas = ["mango", "manzana", "banana", "fresa"];
 console.log(frutas.lenght); = imprime la cantidad de objetos 
 console.log(frutas[0]); = accedemos a los datos del Array
 
 //agregar nuevo valor al final del array */

 var masFrutas = frutas.push("pera");

 //quitar elementos*/

 var ultimo = frutas.pop("peras")

 //agre un nuevo valor al principio del array*/

 var nuevaLongitud = frutas.unshift("uvas");

 //eliminar el valor que este en el inicio*/

 var borrarFruta = frutas.shift("mango");

 //saber la posicion del valor en el array*/

 var posicion = frutas.indexOf("pera")