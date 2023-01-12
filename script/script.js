// ----------------------------- ACTIVIDAD 5 ----------------------------- 
/*
let numero = 15;
let cadenaDeTexto = "Hola!!! Feliz Año Nuevo"
let verdaderoBoolean = true;
let indefinido = undefined;
let nada = null;

const curp = "EMTE0923RLP093";

console.warn("..........Variables..........");
console.log("number: " + numero);
console.log("String: " + cadenaDeTexto);
console.log("boolean: " + verdaderoBoolean);
console.log("undefined: " + indefinido);
console.log("null: " + nada);

console.warn("..........Constante..........");
console.log("CURP: " + curp)

var saludo = "Que onda";
var nombre = "Jorge";

console.warn("..........Concatenación..........");
console.log(saludo + " " + nombre)

console.warn("..........Interpolación..........");
console.log(`${saludo} ${nombre}`);

var numero1 = 90;
var numero2 = 23;

console.warn("..........Suma..........");
var suma = numero1 + numero2;
console.log(`${numero1} + ${numero2} = ${suma}`);

console.warn("..........Comparación..........");
var comparacion = numero1 === numero2;
console.log(`${numero1} === ${numero2} es ${comparacion}`)
*/

// ----------------------------- ACTIVIDAD 6 ----------------------------- 
// Punto 1
console.log("\t****** FUNCIÓN SUMA ****** ");
function suma(x, y, z) {
    let resulado = x + y + z;
    console.log(`El resultado de ${x} + ${y} + ${z} es igual a ${resulado}`);
}
suma(10, 20, 30);

// Punto 2
console.log("\t****** FUNCIÓN COMPARACIÓN ****** ");
function comparacion(num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        console.log("Los números son iguales");
    }
}
comparacion(90, 700);

// Punto 3
console.log("\t****** FUNCIÓN FLECHA SUMA ****** ");
let sumaFlecha = (x, y, z) => console.log(`El resultado de ${x} + ${y} + ${z} es igual a ${x + y + z}`);
sumaFlecha(30, 20, 10);

console.log("\t****** FUNCIÓN FLECHA COMPARACIÓN ****** ");
let comparacionFlecha = (num1, num2) => {
    if(num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        console.log("Los números son iguales");
    }
}
comparacionFlecha(900, 700);

// Punto 4
console.log("\t****** OBJETO ESTUDIANTE ****** ");
estudiante = {
    id: "1890POITP",
    nombre: "Julian",
    carrera: "Sistemas",
    edad: 24,
    nacionalidad: "Mexicana",
    materias: ["Programación Web", "Algoritmos", "Big Data"]
};
let {id, nombre, carrera, edad} = estudiante;
console.log("El alumno " + nombre + " con matrícula " + id + " tiene " + edad + " años y estudia " + carrera)

// Punto 5
console.log("\t****** ARREGLO ****** ");
let arreglo = ["Hola!!!", 11, 2023, [true, false]];
const [saludo, dia, año] = arreglo;
console.log(saludo);
console.log("Hoy es el día " + dia + " de enero");
console.log("Del año " + año);






