//Añadir datos durante la creación de un array
let arr1 = ["A", true, 2];
//console.log(arr1[0]);
//console.log(arr1[1]);
//console.log(arr1[2]);

//Añadir datos después de crear un array 
let arrayLength = 2;
let arr2 = Array(arrayLength);
arr2[0] = "Valor del indice 0";
//console.log(arr2[0]);
//console.log(arr2[1]); //No tiene valor aún


let arr3 = Array(3); //array vacío con longitud 3
arr3[2] = "Añadiendo valor";
console.log(arr3[2]);
console.log(arr3[arr3.length-1]);
console.log(arr3[0]);//ningún valor todavía
console.log(arr3[1]);//ningún valor todavía