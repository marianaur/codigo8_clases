

/**
 * Ciclo for
 * Ejercicio :leer 4 notas y obtener el promedio de ellas

let suma = 0;
for (let i= 0; i< 4; i++){
    suma = suma + +prompt("Ingrese la nota: ${i + 1}");
    console.log(suma);
}
 */
/**
 * Ejercicio: dado 2 numeros 
 * a y b 
 * Calcular la multiplicacion de ambos sin hacer uso del
 * simbolo *(asterisco), solo se pueden usar sumas sucesivas.
 

let a =8;
let b =5;
let total = 0;
for (let i=0; i<b; i++){
    total += a;
}
    console.log(`${a}* ${b} = ${total}`);
 

 * Ejercicio
 * de un numero x
 * Hacer la tabla ir del 0 al 12
 
for(let i=0; i<12; i++){
 resultado= i*12;

}
 */
/**
console.log(${i}* ${12} es ${total})
/** 
 * Mejora el ejercicio anterior, para mostrar la
 * la tabla de los N primero numero naturales
 * cada numero debe mostrar su tabla del 0 al 12
 * desde 0 hasta N

//revisar ejercicio
let n=5;
for (let i=o; i<n; i++) {
    console.log(////`TABLA DEL ${i}////`)
 for (let c= o; c < 13; c++) {
        console.log(`${i} x ${c} = ${i *c}`);
    }
    console.log(`////FIN TABLA DEL ${i}/////`);


    resultado= (i=0  )
}
*/
/**
 * RECORRIENDO ARREGLOS
 * 
 */ver ejercicio otra vez
let edades = [35, 45, 68, 80, 74, 20, 15, 95, 65, 45];
/**
 * arreglo.lenght => devuelve la cantidad de elemntos de un arreglo}
 */
console.log(`Elementos del arreglo: ${edades.lenght}`)
console.log(`Primer elemento de un arreglo: ${edades[0]}`);
console.log(`ultimo elemento de un arreglo: ${edades[edades.length -1]}`);

for(let i = 0; i < edades.length; i++){


    if(edades[i] >= 60) {
        console.log(`Apto con edad de: $edades[i]} años`);
    }

    }
