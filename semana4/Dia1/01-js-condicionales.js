/**
* Condicionales
*Ejemplo 3.3 pag. 53

let unidades = 0;
unidades = +prompt("¿cuantos productos desea comprar?")
unidades = 1000;

if (unidades >= 1000){
 console.log('Precio * producto: 0.85 centavos');   
 total = unidades *0.85;
}else {
    console.log('Precio * producto: 0.90 centavos');  
    total = unidades *0.90;
}
console.log('total a pagar: ${total}');
document.write('total a pagar: ${total}');

 let n1 = 30;
 let n2 = 5;
 let n3 = 100;
 let mayor = 0;

 if(n1 > n2) {
   if (n1> n3){
       mayor = n1;
   } else {
       mayor = n3;
   }  
 } else {
     (n2 > n3) {
         mayor = n2;
     }else {
         mayor = n3;
     }
 }
 
 document.write('El mayor es: ${mayor}')*/
 /**
  * Espacio de teorico
  * Tipos de comparadores:
  * COMPARACIONES ARITMETICOS 
  * a > b (si a es mayor que b)
  * a < b (si a es menor que b)
  * a <= b (si a es menor o igual que b)
  * a >=b (si a es mayor o igual que b)
  * a === b (si a es igual que b en valor y en tipo de dato)
  *  a == b (si a es igual que b en valor)
    a !== b (si a es diferente que b)
    a !== b (si a es diferente que b) 
  * COMPARADORES LOGICOS
  *  a && b (si a y b son verdaderas)   
  *  a // b (si a y/o b son verdaderos)
  *  !a (la negacion de a)
    
let n1 = 90, n2 = 33, n3 = 42, mayor = 0;
 if(n1>n2 && n1 > n3){
        mayor = n1;
 } else {
     if (n2 > n3 && n2 > n1){
        mayor = n2;
 } else {
         mayor = n3;
 }
}
document.write('el mayor de: ${n1} ${n2} y {n3} es: {mayor} ');

* Ejercicio: Dado el precio de un producto,
*aplicar el 15% de dscto en caso sea día "lunes" o "martes"

let precio = 1000.00;
let dia = "miercoles";

if (dia === "lunes"  || dia === "martes"){
    precio = precio * 0.85;
}
document.write('total pagar: ${precio}');
Ejercicio 3.6 pag 61


let platos = 250;
let total = 0;
if (platos < 200){
    total = platos *95;
}else{
    if (platos <= 300){
        total= platos *85;
    }else {
        total = platos * 75;
    }
    }
document.write('Cantidad de plato: ${platos} <br> Total a pagar: ${total}')
*/

let horas = 6;
let total = 0;
if (horas <= 2){
    total = horas *5;
} else {
    if (horas <= 5){
        total =(2 * 5) + (horas -2) *4;
    } else {
        if (horas <=10){
            total =(2 * 5) + (3 * 4) + (horas -5) * 3;
        }else{
           total =(2 * 5) + (3 * 4) +(5 * 3) + (horas -10) *2 ;
        }
    }
}
document.write('Horas en el estacionamiento: ${horas} <br> Total a pagar: s/ ${total}')
                                                                                               