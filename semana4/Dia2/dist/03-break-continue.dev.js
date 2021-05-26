"use strict";

/**
 * Sentencia break vs continue
 * break =>interrumpir todas las interacciones que quedan
 * por darse en una estructura repetitiva
 * continue => interrumpir la interaccion actual, y salta
 *  automaticamente..?
 */
var numeros = [3, 2, -1, 30, 90, 4, 0, 16, 15];
/**
 * Ejercicio: imprimir los numeros positivos hasta encontrar un numeros
 * negativo
 */

for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0) {
    console.log(numeros[i]);
  } else {
    break;
  }
}
/**
 * Ejercicio: si un numero es impar imprimirlo, y en caso 
 * contrario saltar a la siguiente iteracion.
 */


for (var _i = 0; _i < numeros.length; _i++) {
  if (numeros[_i] % 2 === 0) {
    continue;
  }

  console.log(numeros[_i]);
}