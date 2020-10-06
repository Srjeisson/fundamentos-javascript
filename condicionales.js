/*las condicionales son reglas que aplicamis
para validar si algo es verdadero o falso*/


1. if (//condicion){
    //que va a pasar si es verdad
}

// el if debe ser verdadero o si no agregar


//else 

2. if(false){
    console.log("hola");
}else {
    console.log("soy falso")
}
 


3. var edad = 18;
if (edad === 18) {
    console.log("puedes votar");
}
else if (edad > 18) {
    console.log("puedes votar de nuevo");
}
else{
    console.log("no puedes votar");
}

//if y else en una sola linea 

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "soy un uno" : "no soy uno"





var { op1, op2, op3, resultado } = newFunction();

function newFunction() {
    var op1 = "piedra";
    var op2 = "papel";
    var op3 = "tijeras";

    var resultado = function (user, cpu) {
        if (user != cpu) {
            if (user === op1 && cpu === op3) {
                console.log("el usuario gano con " + op1);
            }
            else if (user === op2 && cpu === op1) {
                console.log("el usuario gano con " + op2);
            }
            else if (user === op3 && cpu === op2) {
                console.log("el usuario gano con " + op3);
            }
            else if (user === cpu) {
                console.log("empate");
            }
            else {
                console.log("la cpu gano");
            }
        }
    };
    return { op1, op2, op3, resultado };
}



var op1 = "piedra";
var op2 = "papel";
var op3 = "tijeras";

var resultado = function (user, cpu){
    if (user != cpu){
        if (user === op1 && cpu === op3){
            console.log("el usuario gano con " + op1)
        }else if (user === op2 && cpu === op1){
            console.log("el usuario gano con " + op2);
        }else if(user === op3 && cpu === op2){
            console.log("el usuario gano con " + op3 )
        }else if (user === cpu){
            console.log("empate")
        }else{
            console.log("la cpu gano")
        }
    }
};
