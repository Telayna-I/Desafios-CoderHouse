// *******************************************************************************
//                           CALCULAR PRECIO DE IVA
// *******************************************************************************

// function tipoIva(){
//     let iva = parseInt(prompt("Que tipo de IVA posee el producto?: " + `\n` + "1) 21%." + `\n` + "2) 27%."));
//     if(iva == 1){
//         primerIva();
//     }else if (iva == 2){
//         segundoIva();
//     }
//     else if(iva != 1 && iva != 2){
//         return false;
//     }
// }

// function primerIva(){
//     let precio = parseFloat(prompt("Ingrese el precio de costo: "));
//     let precioConIva = precio * 1.21;
//     alert(`El precio de su producto + IVA es de ${precioConIva}`);
//     return true
// }

// function segundoIva(){
//     let precio = parseFloat(prompt("Ingrese el precio de costo: "));
//     let precioConIva = precio * 1.27;
//     alert(`El precio de su producto + IVA es de ${precioConIva}`);
//     return true
// }



// while(tipoIva() == false){
//     tipoIva();
// }



// *******************************************************************************
//                            NUMERO PAR O IMPAR
// *******************************************************************************


// function parImpar(){
//     let numero = parseInt(prompt("Ingresa un numero y te dire si es par o impar: "));
//     if(numero % 2 == 0){
//         alert("El numero es Par !");
//     }else{
//         alert("El numero es Impar !");
//     }
// }

// parImpar();


// *******************************************************************************
//                            ES MULTIPLO?
// *******************************************************************************


function multiplo(){
    let numero = parseInt(prompt("Ingrese un numero: "));
    let multiplo = parseInt(prompt("Ingrese un numero para determinar si es multiplo del ingresado anteriormente: "));

    if((numero % multiplo) == 0){
        alert(`Es multiplo de ${numero} !`);
    }else{
        alert(`No es multiplo de ${numero} !`);
    }
}


multiplo();