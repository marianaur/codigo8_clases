"use strict";

console.log("Hola mundo"); //VARIABLES

/** 
 * 1.
*/
//TIPO DE DATO cadena de textos (string)

var nombre = "Jorge Luis";
var apellido = "Garnica Blanco";
nombre = "Jorge ";
console.log(nombre); //TIPO DE DATO NUMERICO(number)

var edad = 29;
var sueldo = 950.20;
sueldo = 980.00;
sueldo = sueldo + 20; // concatenar

console.log("sueldo:" + sueldo); //TiPO  DE DATO BOOLEAN(verdadero o false)

var soltero = true;
var papeletas = false;
console.log("soltero?: " + soltero); //TIPO DE DATO ARRAY

var meses = ["January", "February", "March", "April"];
console.log(meses); //para imprimir alguna posicion de los arreglos?

console.log(meses[3]);
/*
OPeraciones matematicas son iguales que en excel por ejemplo +,-,*,/ *,/
% => (módulo) es una operacion que retorna el residuo de una division entera*/

var modulo = 55 % 6;
console.log("55 % 6 = " + modulo); //Operaciones simplificadas

var likes = 2; //incrementar automaticamente en una unidad 

likes++;
console.log(likes); //incrementar autamaticamente en una unidad a la variable likes

likes += likes + 1;
console.log(likes); //incrementar en una unidad a la variable like

likes += 1;
console.log(likes);