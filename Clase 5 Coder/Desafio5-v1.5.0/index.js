class Presupuesto{
    constructor(peso){
        this.peso= peso;
    }

    tortaCumpleanios(){
        return "El precio final es de: $" + this.peso * 1500;
    }

    postre(){
        return "El precio final es de: $" + this.peso * 980;
    }

    dreepCake(){
        return "El precio final es de: $" + this.peso * 1200;
    }
    
}





const tipo =  parseInt(prompt(`Que precio desea calcular?:` + `\n` + `1) Torta de cumpleaños.` + `\n` + `2) Postre.` + `\n` + `3) Dreep Cake.`));

const peso = parseFloat(prompt("Cuantos kilos de torta desea?: "));
let presupuesto = new Presupuesto(peso);

if(tipo === 1){
    console.log(presupuesto.tortaCumpleanios());

}else if(tipo === 2){
    console.log(presupuesto.postre());

}else if(tipo === 3){
    console.log(presupuesto.dreepCake());
}


