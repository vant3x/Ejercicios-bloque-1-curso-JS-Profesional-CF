// // 1 Tomando como entrada un número entero, imprimir si es par o impar.

// código simple -----
// let numero = prompt();
// numero = parseInt(numero);
//
// if(numero%2 == 0){
//     alert("El número es par ")
// }else{
//     alert("El numero es impar")
// }
// ------------


// código con ciclo while

while(numero = prompt("Ingresa un número")){
    numero = parseInt(numero);

    if(numero%2 == 0){
        alert("El número es par. \n Si lo divides en 2 da: " + numero/2 )
    }else{
        alert("El numero es impar. \n Si lo divides en 2 da:"  + numero/2)
    }

}
