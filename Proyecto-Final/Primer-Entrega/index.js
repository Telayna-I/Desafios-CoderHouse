const elaborados = [
    {producto: "Torta cumpleaños", precio_por_kilo: 1500, id: 1}, 
    {producto: "Pasta frola", precio_por_kilo: 750, id: 2},
    {producto: "Postres", precio_por_kilo: 980, id: 3},
    {producto: "Tarta de coco", precio_por_kilo: 850, id: 4},
    {producto: "Tarta de fruta", precio_por_kilo: 850, id: 5},
    {producto: "Lemon pie", precio_por_kilo: 850, id: 6},
]

class Presupuesto{
    constructor(peso_requerido, id, precio_por_kilo){
        this.peso_requerido = peso_requerido; 
        this.id = id;
        this.precio_por_kilo = precio_por_kilo;
    }


    presupuestar(){
        return this.peso_requerido * this.precio_por_kilo;
    }

    listar(){
        elaborados.forEach(elaborado => {
            console.log(`Producto: ${elaborado.producto} \n Precio: $${elaborado.precio_por_kilo} el kilo `)
        });
    }



}

const pregunta = parseInt(prompt(`Que precio desea calcular?: \n\n 1) Torta de cumpleaños. \n 2) Pasta frola. \n 3) Postres. \n 4) Tarta de coco. \n 5) Tarta de fruta. \n 6) Lemon pie.`));

const peso = parseFloat(prompt("Ingrese el peso que desea calcular: "));
filtro(pregunta);

function filtro(pregunta){
    let precio_kilo = elaborados[pregunta-1];
    precio_kilo = precio_kilo.precio_por_kilo
    let nombre_producto = elaborados[pregunta-1];
    nombre_producto = nombre_producto.producto;
    let presup1 = new Presupuesto(peso,pregunta,precio_kilo);
    console.log(`El precio final por ${peso} kilos de ${nombre_producto} es de $` + presup1.presupuestar());
    let extra = prompt(`Desea Conocer la lista de precios? \n 1) Si. \n 2)No.`)
    if (extra == 1){
        presup1.listar();
        alert("Gracias por su consulta !")
    }else{
        alert("Gracias por su consulta !")
    }
}
