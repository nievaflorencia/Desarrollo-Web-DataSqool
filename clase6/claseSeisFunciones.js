/*
 BÁSICO: QUÉ SON LAS FUNCIONES?
 SINTAXIS: dEFINIMOS E INVOCAMOS FUNCIONES
 NOMBRE: CONVENCIONALES (VALIDOS E INVÁLIDOS)
 PARÁMETROS: INPUTS {ARGUMENTOS}
 RETURN: OUTPUT {RESULTADOS}
 */

//1. DEFINICIÓN DE FUNCIÓN

function imprimirSaludo(){
    console.log("Hello world!");
}
//console.log(typeof imprimirSaludo);


// 2- Invocar Funciones
//imprimirSaludo();

// 3. Nombres de Funciones 

function imprimir$aludo(){
    //console.log("Hola Mundo!"); 
}

//imprimir$aludo();

// 4. Parámetros de Funciones

function imprimirSaludar(nombre){
    console.log("Hola " +nombre);
    return nombre +" Hello!";
}
imprimirSaludar("Floki"); 
imprimirSaludar();   
imprimirSaludar("Floki ", "Dog!!"); 

//5. Return (statement - declaración)   
let result = imprimirSaludar("Floki");
console.log(result);