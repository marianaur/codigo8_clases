"use strict";

/**
* Ejercicio:
* Dados dos arreglos (castellano e inglés):
* El usuario escribirá 1 ó 2:
* 1. para traducir una palabra del castellano al inglés
* 2. para traducir una palabra del inglés al castellano
* En ambos casos el usuario deberá ingresar primero la opción y
* luego la palabra a traducir
* El sistema deberá mostrar la palabra traducida ó en su defecto
* un error que indique que no se encuentra la palabra en la BD
*/
var castellano = ["hola", "bien", "adios", "mañana", "comer", "cantar"];
var ingles = ["hello", "good", "bye", "tomorrow", "eat", "sing"];
var opcion = +prompt("Ingrese opcion 1: C-I, 2: I-C");
var palabra = +prompt("Ingrese la palabra ");

if (opcion === 1) {
  for (var i = 0; i < castellano.length; i++) {
    if (palabra === castellano[i]) {
      console.log("Palabra encontrada");
      console.log("".concat(palabra, " traducido al ingles: ").concat(ingles[i]));
    }
  }
} else {
  for (var _i = 0; _i < ingles.length; _i++) {
    if (palabra === ingles[_i]) {
      console.log("Palabra encontrada");
      console.log("".concat(palabra, " traducido al castellano: ").concat(castellano[_i]));
    }
  }
}