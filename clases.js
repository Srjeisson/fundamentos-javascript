//clase #1 Variables--------------------------------------------------------------------------------

var nombre = "jeisson"
console.log("hola" + " " + nombre);

//Clase #2 Strings --------------------------------------------------------------------------------

var nombre = 'jeisson', apellido ='rico';                    //> dos variables en una linea 
var nombreEnMayusculas = nombre.toUpperCase()                //> poner string en mayusculas 
var appellidoEnMinuscula = apellido.toLowerCase();           //> poner string en minusculas
var primeraLetraDelNombre = nombre.charAt(3)                 //> saber que letra hay en una posiciom 
var cantidadDeLetrasDelNombre = nombre.length                //> saber cantidad de letras de un string
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`   //> concatenar strings
var str = nombre.substr(2, 5)                                //> acceder a letras de un string


//clase #3 Numeros ------------------------------------------------------------------------------------

var edad = 27
edad = edad +1                                               // > incrementar en 1
edad += 1                                                    // > incrementar en 1

var peso = 75 
peso = peso - 2                                              // > disminiur en 2
peso -= 2                                                    // > disminuir en 2

var sandwich = 1
peso = peso + sandwich                                       // > sumar 
peso += sandwich                                             // > sumar

var jugarFutbol = 3
peso = peso - jugarFutbol                                    //  > restar
peso -= jugarFutbol                                          //  > restar

//operaciones con decimales 

var precioDeVino = 200.3
var total = precioDeVino * 3                                 //  > no va a daer exacto
var total = precioDeVino * 100 * 3 / 100                     //  > para que de ecxacto
var total = Math.round(precioDeVino * 100 * 3) / 100         //  > para redondear si hay mas decimales 

//clase #4 Funciones -----------------------------------------------------------------------------------

var nombre = 'jeisson' , edad = 20
function imprimirEdad () {
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad()

//Reutilizar codigo 
var nombre = 'jeisson' , edad = 20
function imprimirEdad (n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('carlos', 15)
imprimirEdad('maria', 28)
imprimirEdad('dario', 50)

//clase #5 Alcance de las funciones ----------------------------------------------------------------------

var nombre = 'jeisson';
function imprimirNombreEnMayusculas() {           //de esta manera la variable nombre se cambia
    nombre = nombre.toUpperCase()                 //para que esto no suceda debemos utilizar 
    console.log(nombre)                           //parametros, como en el siguiente ejemplo 
}                                                                      
imprimirNombreEnMayusculas()                                          
                                                                      

var nombre = 'jeisson';
function imprimirNombreEnMayusculas(n) {
    n = n.toUpperCase()
    console.log(n)
}
imprimirNombreEnMayusculas(nombre)

//clase #6 Onjetos-----------------------------------------------------------------------------------

var jeisson = {
    nombre:'jeisson',
    apellido: 'rico',
    edad: 20
}

var dario = {
    nombre:  'dario',
    apellido: 'ramirez',
    edad:  22
}

//acceder al objeto

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(jeisson.nombre)
imprimirNombreEnMayusculas(dario.nombre)

//forma mejorada #1 

function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(jeisson)
imprimirNombreEnMayusculas(dario)

//forma mejorada #2

function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jeisson)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre : 'pepito'})   //-->  se ejecuta la funcion con el nombre 'pepito'

//clase #7 Desestructurar objetos--------------------------------------------------------------------------------------

//Practica 

var persona = {
    nombre: 'jeisson',
    edad: 20
}

function imprimirNombreYEdad(persona) {
    var personas = 'hola me llamo ' + persona.nombre + ' y tengo ' + persona.edad + ' años ';
    console.log(personas);
}

imprimirNombreYEdad(persona);

//clase #8 Parámetros como referencia o como valor-------------------------------------------------------------------------

/*Los objetos se comportan de manera diferente en funciones
Si se le pasa un objeto como parámetro a una función, está forma una referencia
¿ Qué es una referencia ?
Es un conector a la misma variable, si se modifica el conector, se modifica la variable original. 
para solucionar esto se puede crear un objeto diferente.
Esto se hace colocando tres puntos antes del nombre. Ej ...persona.*/

var juan = {
    nombre: 'juan',
    apellido: 'Ponce',
    edad: 25,
}

/* 1er ejemplo

paso el objeto juan por parámetro, lo que hace es modificarme la edad dentro de la funcion y afuera */

function cumpleanios(persona){
    //persona.edad= persona.edad +1;
    persona.edad += 1;
}
cumpleanios(juan);

/* 2do ejemplo

paso solo la edad por parámetro, me modifica solamente la edad dentro de la función
(no modifica el atributo del objeto fuera de la función)*/

function cumpleanio(edad){
    edad+=1;
}
cumpleanio (juan.edad)

var juancho = function cumpleanio(persona){
    return {
    ...persona,
    edad:persona.edad + 1
    }
}
/* sacando la variable juancho, se iguala a cumpleanio y se pasa el objeto(juan) 
 var juanMasViejo=cumpleanio(juan)*/
var juanMasViejo=juancho(juan);



/*Cuando es por valor, la información de la variable se almacenan en una 
dirección de memoria diferente al recibirla en la funcion, por lo tanto si el 
valor de esa variable cambia no afecta la variable original, solo se modifica dentro del 
contexto de la función.

Cuando es por referencia, la variable que se recibe como parámetro en la función apunta 
exactamente a la misma dirección de memoria que la variable original por lo que si dentro
 de la función se modifica su valor también se modifica la variable original. */

//clase #9 Comparaciones en JavaScript-----------------------------------------------------------------------------------


/*Resumen de la Clase:

Comparaciones en JavaScript

Existen varias maneras de comparar variables u objetos dentro de javascript.

Existen cinco tipos de datos que son primitivos y es necesario comprender al momento de hacer comparaciones:*/

- Boolean
- Null
- Undefined
- Number
- String 

/* Variabñes
En el primer ejemplo le asignamos a ‘x’ un valor numérico y a ‘y’ un string.
Para poder compararlos debemos agregar dos signos de igual “==”. Esto los convierte al mismo tipo de valor y
 permite que se puedan comparar.*/


	var x = 4
	var y = '4'

	x == y    
	// true
	
/*Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo.

					*Sacha recomienda usa siempre el triple igual, pero hay controversia...    */
	x === y  
	// false

/* Objetos
Al comparar objetos JS tiene en cuenta también el nombre del objeto, 
por lo tanto se remite a comparar el nombre de las variables a demás del valor de los atributos.
Con objetos literales desglosados (otroMas en este caso), pasa lo mismo y la comparación
 da false ya que lo que se genera es un nuevo objeto a partir del desglosado. */


	var sacha = {
		nombre: 'Sacha'
	}
	var otro = {
		nombre: 'Sacha'
	}
	var otroMas = {
		...sacha
	}
	
	sacha == otro		
	// false
	
	sacha === otro 	
	// false

	sacha == otroMas	
	// false
	
	sacha === otroMas	
	// false

//Si asignamos el valor del objeto a una variable y los comparamos, el doble y el triple igual darán como resultado ‘true’ ya que en este caso las dos variables estarían refiriendo al mismo espacio en la memoria RAM.


	var otroMasTodavia = sacha

	sacha == otroMasTodavia	
	// True
	
	sacha === otroMasTodavia	
	// True

//Otra cosa a tener en cuenta es que si cambiamos el valor del atributo en la variable, automáticamente cambia el valor del objeto también, por el mismo motivo que los operadores dan ‘true’, ambos refieren al mismo espacio en la memoria RAM.


	otroMasTodavia.nombre = "Pepe"
	
	otroMasTodavia.nombre
	// "Pepe"
	
	sacha.nombre
    // "Pepe"
    

// clase #10 Condicionales --------------------------------------------------------------------------------------------------

// Resumen de la clase 

var jeisson = {                 
    nombre: 'jeisson',
    apellido: 'rico',
    edad: 20
}

/*Utilizaremos un tipo de variable con valores booleanos
'true' y 'false', por ejemplo para validar profesiones*/ 

var jeisson = {                 
    nombre: 'jeisson',
    apellido: 'rico',
    edad: 20,

    ingeniero: true,
    cociner: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero){
        console.log ('ingeniero')
    }

    if (persona.cocinero){
        console.log ('cocinero')
    }else {
        console.log('no ere cocinero')
    }
    

    if (persona.cantante){
        console.log ('cantante')
    }

    if (persona.dj){
        console.log ('dj')
    }

    if (persona.guitarrista){
        console.log ('guitarrista')
    }

    if (persona.drone){
        console.log ('drone')
    }
}

imprimirProfesiones(jeisson)

//reto imprimir si es mayor de edad 

//OPCION 1

var jeisson = {                 
    nombre: 'jeisson',
    apellido: 'rico',
    edad: 20,
}    

function imprimirSiEsMayorDeEdad (personas){
    var nombreEnMayusculas = personas.edad >= 20 ? personas.nombre + " " + 'eres mayor' : 'no soy mayor '
    console.log(nombreEnMayusculas);
}
imprimirSiEsMayorDeEdad(jeisson)


///OPCION #2

var jeisson = {                 
    nombre: 'jeisson',
    apellido: 'rico',
    edad: 20,
}    

function imprimirSiEsMayorDeEdad (personas){

    if (personas.edad >= 18){
        console.log('eres mayor de edad ')
    }else{
        console.log('no eres mayor de edad')
    } 
    
}
imprimirSiEsMayorDeEdad(jeisson)


//clase #11 Funciones que retornan valores------------------------------------------------------------------------------

//manera de deglozar las funciones en funciones mas pequeñas y retornar valores 


var juan = {
    nombre: 'juan',
    apellido: 'garcias',
    edad: 25,
}

function imprimirSiEsMayorDeEdad (personas){

    if (personas.edad >= 18){
        console.log(`${personas.nombre} ` + 'es mayor de edad ')
    }else{
        console.log(   `${personas.nombre} ` + 'no es mayor de edad')
    } 
}

imprimirSiEsMayorDeEdad(juan)


//para mejorar esta funcion lo podemos hacer asi: 

function esMayorDeEdad (personas){
    return personas.edad >= 18
}

function imprimirSiEsMayorDeEdad (personas){

    if (esMayorDeEdad(personas)){
        console.log(`${personas.nombre} ` + 'es mayor de edad ')
    }
    else{
        console.log(   `${personas.nombre} ` + 'no es mayor de edad')
    } 
}

imprimirSiEsMayorDeEdad(juan)


// clase #12 Arrow functions----------------------------------------------------------------------------------------------------

var juan = {
    nombre: 'juan',
    apellido: 'garcias',
    edad: 25,
}


const MAYORIA_DE_EDAD = 18;

//const esMayorDeEdad = (persona) =>     --->
//var esMayorDeEdad = function(persona)  ---> Funcion anonima
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
//se puede reducir aun mas el codigo


//simplificada 
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

//simplificar al maximo 
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;


function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}


//denegar acceso con una funcion 
function permitirAcceso (persona){
    if (!esMayorDeEdad(persona)) {
        console.log(`acceso denegado`)
    }
}

// clase #13 Estructuras repetitivas: FOR-------------------------------------------------------------

var jeisson = {
    nombre: 'jeisson', 
    apellido: 'rico',
    edad: 20,
    peso: 75
}


conso