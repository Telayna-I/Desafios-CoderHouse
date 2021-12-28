const elaborados = [
    {producto: "Torta cumpleaños", precio_por_kilo: 1500}, 
    {producto: "Pasta frola", precio_por_kilo: 750},
    {producto: "Postres", precio_por_kilo: 980},
    {producto: "Tarta de coco", precio_por_kilo: 850},
    {producto: "Tarta de fruta", precio_por_kilo: 850},
    {producto: "Lemon pie", precio_por_kilo: 850},
]

const encargues = [];


class Presupuesto{
    constructor(nombre,peso_requerido, precio_por_kilo, nombre_producto){
        this.nombre = nombre;
        this.peso_requerido = peso_requerido; 
        this.nombre_producto = nombre_producto;
        this.precio_por_kilo = precio_por_kilo;
    }

    presupuestar(){
        let precio_pro = document.getElementById("precio_pro");
        let titulo_resul = document.getElementById("titulo-resul");
        titulo_resul.innerHTML = `Estimad@ ${this.nombre}`;
        precio_pro.innerHTML = `El precio final por ${this.peso_requerido} kilos de ${this.nombre_producto} es de $${this.precio_por_kilo * this.peso_requerido}`;
        //return this.peso_requerido * this.precio_por_kilo;
    }

    
    // listar(){
    //     elaborados.forEach(elaborado => {
    //         console.log(`Producto: ${elaborado.producto} \n Precio: $${elaborado.precio_por_kilo} el kilo `)
    //     });
    // }           
}

class Pedido{
    constructor(nombre_producto, kilos,  fecha, nombre, telefono, nota, precio_producto){
        this.nombre_producto = nombre_producto;
        this.kilos = kilos;
        this.fecha = fecha;
        this.nombre = nombre;
        this.telefono = telefono;
        this.nota = nota;
        this.precio_producto = precio_producto;
    }

    encargar(){
        encargues.push({nombre: this.nombre, telefono: this.telefono, producto: this.nombre_producto, kilos: this.kilos, nota: this.nota, fecha: this.fecha});
        for(let index in encargues){
            encargues[index].indice = index;
            localStorage.setItem("pedidos", JSON.stringify(encargues))
        }
    }

}

const btn_calcular = document.getElementById("btn_calcular");

btn_calcular.onclick = (e) =>{
    e.preventDefault();
    presupuesto();
    nombre_pr.value = "";
    kilos_pr.value ="";
    producto_pr.value ="";
}

const btn_encargar = document.getElementById("btn_encargar");

btn_encargar.onclick = (e) =>{
    e.preventDefault();
    pedidos();
    nombre_pe.value = "";
    kilos_pe.value ="";
    producto_pe.value ="";
}

function presupuesto(){
    const nombre_pr = document.getElementById("nombre_pr").value;
    const kilos_pr = parseFloat(document.getElementById("kilos_pr").value);
    const producto_pr = parseInt(document.getElementById("producto_pr").value);
    let precio_kilo = elaborados[producto_pr-1];
    precio_kilo = precio_kilo.precio_por_kilo
    let nombre_producto = elaborados[producto_pr-1];
    nombre_producto = nombre_producto.producto;
    let presup = new Presupuesto(nombre_pr,kilos_pr,precio_kilo, nombre_producto);
    presup.presupuestar();
}

function pedidos(){
    let nombre_pe = document.getElementById("nombre_pe").value;
    let telefono_pe = document.getElementById("telefono_pe").value;
    let producto_pe = document.getElementById("producto_pe").value;
    let nombre_producto = elaborados[producto_pe-1];
    nombre_producto = nombre_producto.producto;
    let precio_producto = elaborados[producto_pe-1];
    precio_producto = precio_producto.precio_por_kilo;
    let kilos_pe = parseFloat(document.getElementById("kilos_pe")).value;
    let nota_pe = document.getElementById("nota_pe").value;
    let fecha_pe = document.getElementById("fecha_pe").value;
    
    let pedido1 = new Pedido(nombre_producto, kilos_pe,  fecha_pe, nombre_pe, telefono_pe, nota_pe, precio_producto);
    pedido1.encargar();
   
    //console.log(encargues);
    //pedido1.printOrder();
}
