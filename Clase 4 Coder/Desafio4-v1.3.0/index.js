// *****************************************************************************
//                          SIMULADOR DE PRECIO DE TORTA
// *****************************************************************************


function opciones(){
    let opciones = parseInt(prompt(`Que precio desea calcular?:` + `\n` + `1) Torta de cumpleaños.` + `\n` + `2) Postre.` + `\n` + `3) Dreep Cake.`));

    if(opciones === 1){
        tortaCumpleanios();

    }else if(opciones === 2){
        postre();

    }
    else if(opciones === 3){
        dreepCake();

    }else if(opciones != 1 && opciones != 2 && opciones != 3 ){
        return false;
    }
}

function tortaCumpleanios(){
    const peso = parseFloat(prompt("Cuantos kilos de torta desea?: "));
    let presupuesto = peso * 1500;
    alert(`El costo por ${peso} kilos de torta es de: $ ${presupuesto}`);
    alert(`El precio es aproximado, el peso puede variar al prepararla e influir sobre el precio final`);
    return true;
}

function postre(){
    const peso = parseFloat(prompt("Cuantos kilos de postre desea?: "));
    let presupuesto = peso * 980;
    alert(`El costo por ${peso} kilos de postre es de: $ ${presupuesto}`);
    alert(`El precio es aproximado, el peso puede variar al prepararla e influira sobre el precio final`);
    return true;
}

function dreepCake(){
    const peso = parseFloat(prompt("Cuantos kilos de Dreep Cake desea?: "));
    let presupuesto = peso * 1200;
    alert(`El costo por ${peso} kilos de Dreep Cake es de: $ ${presupuesto}`);
    alert(`El precio es aproximado, el peso puede variar al prepararla e influira sobre el precio final`);
    return true;
}



while(opciones() == false){
    opciones();
    //document.write("Opcion incorrecta, refresque la pagina para volver a comenzar.")
}


