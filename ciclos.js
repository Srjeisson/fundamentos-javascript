los ciclos son una manera de repetir tareas
de manera automaticas


//ciclo FOR

var estudiantes = ["maria", "sergio", "daniel"];
function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}


//ciclo FOR OF

var estudiantes = ["maria", "sergio", "daniel"];
function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
 

//ciclo WILE

var estudiantes =["maria", "sergio", "rosa", "daniel"]
function saludarEstudiantes (estudiante){
    console.log(`hola, ${estudiante}`)
}

while (estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

``