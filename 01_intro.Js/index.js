
//Es un comentario de una sola linea

/*esto es un comentario de varias lineas de ejemplo*/


//Variables: un espacio en la memoria de la ram para el uso del programa
let nombre = 'beni'

//let: palabra reservada para declarar variables

//funcion para imprimir en consola
console.log(nombre);

//Funciones: bloques de codigo que se pueden reutilizar
function name(params) {
    
}

// 1. Funcion nativa de JavaScript
function arquero(guantes, ropa){
    //todo lo que el arquero hace va acá
    console.log('El arquero se pone los guantes');
    console.log('Mi nombre es + nombre');   
}

//se ejecuta la funcion cuando la llamamos
arquero();

// 2. Funcion con parámetros
// variables
let numeroUno = 50;
let numeroDos = 30;

function calcular(a, b) {

    // creamos una variable llamada suma
    let suma = a + b;

    // imprimimos el resultado en consola
    console.log('El resultado de la suma es: ' + suma);

    return suma; // opcional, devuelve el resultado de la funcion
    
}

// ejecutamos la funcion calcular
calcular(numeroUno, numeroDos);

//3. Funciones de ventanas

//3.1 Funcion de Alerta
alert("Tenes que pagar el GAS que se te venció")

// 3.2 Funcion de Confirmacion
confirm("¿Estas seguro de que queres continuar?")

//3.3 Promp: introduce datos por teclado
prompt("¿Cual es tu edad?");