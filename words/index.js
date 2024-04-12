const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;

const mensajeCantidad = "la cantidad es :" + cantidad;
alert(mensajeCantidad);

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();

const minMay = fraseMinusculas + " " + fraseMayusculas

console.log(minMay);