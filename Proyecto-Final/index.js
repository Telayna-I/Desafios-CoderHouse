const elaborados = [
    {producto: "Torta cumpleaños", precio_por_kilo: 1500}, 
    {producto: "Pasta frola", precio_por_kilo: 750},
    {producto: "Postres", precio_por_kilo: 980},
    {producto: "Tarta de coco", precio_por_kilo: 850},
    {producto: "Tarta de fruta", precio_por_kilo: 850},
    {producto: "Lemon pie", precio_por_kilo: 850},
];

const encargues = [];

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

class Pedido{
    constructor(nombre_producto, kilos,  fecha, nombre, senia, telefono, nota, precio_producto){
        this.nombre_producto = nombre_producto;
        this.kilos = kilos;
        this.fecha = fecha;
        this.nombre = nombre;
        this.senia = senia;
        this.telefono = telefono;
        this.nota = nota;
        this.precio_producto = precio_producto;
    }

    encargar(){
        encargues.push({nombre: this.nombre, telefono: this.telefono, modelo: this.nombre_producto, kilos: this.kilos, nota: this.nota, senia: this.senia, fecha: this.fecha});
    }

    printOrder(){
        console.log(`
        Nombre:${encargues[0].nombre}
        Telefono: ${encargues[0].telefono}
        Modelo: ${encargues[0].modelo}
        Kilos: ${encargues[0].kilos}
        Nota: ${encargues[0].nota}
        Seña: ${encargues[0].senia}
        Fecha: ${encargues[0].fecha}
        Precio aproximado: ${this.kilos * this.precio_producto}`)
    }

}

function presupuesto(){
    const pregunta = parseInt(prompt(`Que precio desea calcular?: \n\n 1) Torta de cumpleaños. \n 2) Pasta frola. \n 3) Postres. \n 4) Tarta de coco. \n 5) Tarta de fruta. \n 6) Lemon pie.`));
    const peso = parseFloat(prompt("Ingrese el peso que desea calcular: "));
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

function pedidos(){
    let nombre = prompt("Ingrese nombre y apellido: ");
    let telefono = prompt("Ingrese su Telefono: ");
    let objeto = parseInt(prompt(`Que Desea encargar?: \n\n 1) Torta de cumpleaños. \n 2) Pasta frola. \n 3) Postres. \n 4) Tarta de coco. \n 5) Tarta de fruta. \n 6) Lemon pie.`));
    let nombre_producto = elaborados[objeto-1];
    nombre_producto = nombre_producto.producto;
    let precio_producto = elaborados[objeto-1];
    precio_producto = precio_producto.precio_por_kilo;
    let kilos = parseFloat(prompt("Ingrese la cantidad de kilos: "));
    let nota = prompt("Ingrese detalles del pedido: ");
    let senia = parseFloat(prompt("Cuanto deja de seña?: "));
    let fecha = prompt("Para que dia lo quiere?: ");
    
    let pedido1 = new Pedido(nombre_producto, kilos,  fecha, nombre, senia, telefono, nota, precio_producto);
    pedido1.encargar();
    pedido1.printOrder();
}

// const desicion = parseInt(prompt("Que operacion desea realizar?:\n 1) Pesupuesto. \n 2) Encargue."))
// if(desicion == 1){
//     presupuesto();
// }else{
//     pedidos();

// }