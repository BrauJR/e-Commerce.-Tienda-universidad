// ----------------------------- ACTIVIDAD 5 ----------------------------- 
/*
console.log("______________ ACTIVIDAD 5 ______________")
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

console.log("______________ ACTIVIDAD 6 ______________")
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


// ----------------------------- ACTIVIDAD 7 ----------------------------- 

console.log("______________ ACTIVIDAD 7 ______________")
// Punto 1
console.log("// Punto 1");
let edadAcceso = 19;
console.log("\tLa edad es: " + edadAcceso)
if (edadAcceso >= 18) {
    console.log("VÁLIDO");
} else {
    console.log("NO VÁLIDO");
}

// Punto 2
console.log("// Punto 2");
const carrito = [];

const agregarCarrito = (producto, carrito) => {
    carrito.push(producto);
    console.log("¡Producto agregado correctamente!")
}

const productos = [
    {
        id: "itp100",
        nombre: "Sudadera Garra",
        precio: 550
    },
    {
        id: "itp101",
        nombre: "Playera negra",
        precio: 250
    },
    {
        id: "itp102",
        nombre: "Playera melón",
        precio: 250
    },
    {
        id: "itp103",
        nombre: "Sudadera Negra",
        precio: 550
    }
];

console.log("\tProductos")
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

// Punto 3
console.log("// Punto 3");
console.log("Se está mostrando mediante prompt y alert")
alert("Bienvenido a CinEMTECH 🎬");
let edadEntrada = parseInt(prompt("Ingresa la opción correspondiente a tu edad: \n1. Soy menor de 18 años \n2. Soy mayor de 18 años \n3. Soy de la tercera edad"));
switch (edadEntrada) {
    case 1:
        alert("Tienes un descuento de niño del 20% 👦");
        break;
    case 2:
        alert("Tienes un descuento de adulto del 10% 🧑");
        break;
    case 3:
        alert("Tienes un descuento de la tercera edad del 50% 👵");
        break;
}





