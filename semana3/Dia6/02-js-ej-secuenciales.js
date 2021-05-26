/**
 * 1. Algoritmo para sumar 4 notas
 * e imprimir el promedio de los 4
 */
let  c1 =0, c2=0, c3 = 0, c4 =0, promedio= 0, suma = 0;
/** 
 * typeof[variable] devuelvo un string con el tipo de dato de un elemento;
 * 
*/

console.log(typeof c1);
c1 = +prompt ("Ingrese la primera nota");

console.log (typeof c1);
console.log(c1);
/** 
*OJO: Anteponer el simbolo "*" a una instruccion o variable la primera
convierte automaticamente en un numero */
c1 = +prompt("Ingrese la primera nota")
c2 = +prompt("Ingrese la segunda nota")
c3 = +prompt("Ingrese la tercera nota")
c4= +prompt("Ingrese la cuarta nota")
//¿Como mostrar el tipo de dato de una variable?
console.log(typeof c1);

suma= c1+ c2+ c3+ c4;
promedio = suma/4;

console.log("El promedio es: +promedio");
console.log('El promedio es : ${promedio}');
