const elaborados = [
    {producto: "Torta cumpleaños", precio_por_kilo: 1500}, 
    {producto: "Pasta frola", precio_por_kilo: 750},
    {producto: "Postres", precio_por_kilo: 980},
    {producto: "Tarta de coco", precio_por_kilo: 850},
    {producto: "Tarta de fruta", precio_por_kilo: 850},
    {producto: "Lemon pie", precio_por_kilo: 850},
]


// SI SE REFRESCA LA PAGINA EL ARRAY SE VACIA PERO EL LOCAL STORAGE SE MANTIENE Y PUEDO SEGUIR VISUALIZANDO LOS PEDIDOS.
let encargues = JSON.parse(localStorage.getItem("pedidos")) || [];
if(encargues.length > 0) listarPedido();


class Presupuesto{
    constructor(nombre,peso_requerido, precio_por_kilo, nombre_producto){
        this.nombre = nombre;
        this.peso_requerido = peso_requerido; 
        this.nombre_producto = nombre_producto;
        this.precio_por_kilo = precio_por_kilo;
    }

    // TOMA LOS DATOS INGRESADOS, HACE LOS CALCULOS ACCEDIENDO AL ARRAY DE PRODUCTOS Y POSTERIORMENTE MUESTRA EN PANTALLA LOS RESULTADOS
    presupuestar(){
        $('#titulo-resul').text(`Estimad@ ${this.nombre}`);
        $('#precio_pro').text(`El precio final por ${this.peso_requerido} kilos de ${this.nombre_producto} es de $${this.precio_por_kilo * this.peso_requerido}`);
    }
}

class Pedido{
    constructor(nombre,telefono,nombre_producto,kilos,nota,fecha,precio_producto,status_pe){
        this.nombre_producto = nombre_producto;
        this.kilos = kilos;
        this.fecha = fecha;
        this.nombre = nombre;
        this.telefono = telefono;
        this.nota = nota;
        this.precio_producto = precio_producto;
        this.status_pe = status_pe;
    }

    // RECIBE LOS PARAMETROS Y LOS GUARDA EN UN ARRAY QUE LUEGO SE RECORRE PARA OBTENER UNA COPIA EN EL LOCALSTORAGE
    encargar(){
        encargues.push({nombre: this.nombre, telefono: this.telefono, producto: this.nombre_producto, kilos: this.kilos, nota: this.nota, fecha: this.fecha, status: this.status_pe});
        for(let index in encargues){
            localStorage.setItem("pedidos", JSON.stringify(encargues))
        }
    }

}


// CAPUTRO EVENTOS EN EL BOTON DE PRESUPUESTO, UTILIZO LA FUNCION PRESUPUESTAR Y VACIO EL FORMULARIO
$('#btn_calcular').on('click', (e) =>{
    e.preventDefault();
    presupuesto();
    nombre_pr.value = "";
    kilos_pr.value ="";
    producto_pr.value ="";
});

// CAPUTRO EVENTOS EN EL BOTON DE PEDIDOS, UTILIZO LA FUNCION PEDIDOS Y LA FUNCION LISTARPEDIDO PARA IMPRIMIR EN LA TABLA LOS PEDIDOS NUEVOS Y VACIO EL FORMULARIO
$('#btn_encargar').on('click', (e) => {
    e.preventDefault();
    pedidos();
    listarPedido();
    nombre_pe.value = "";
    kilos_pe.value ="";
    producto_pe.value ="";
    telefono_pe.value ="";
    fecha_pe.value ="";
    nota_pe.value ="";
});

// deje esto aca porque estoy intentando agregar un toast despues de tomar un pedido pero no me sale la notificacion en el lugar que quiero.

// btn_encarga.onclick = () =>{
//     let myToast = document.querySelector(".toast");
//     let bsAlert = new bootstrap.Toast(myToast);
//     bsAlert.show();
// }


// SE DETECTA EL CLICK EN EL BASURERO PARA ELIMINAR DEL LOCAL STORAGE UN PEDIDO 
deleteClick = (i) =>{
    encargues.splice(i, 1);
    localStorage.setItem("pedidos",JSON.stringify(encargues));
    listarPedido();
}
// SE DETECTA EL CLICK EN EL CHECK PARA MOSTRAR EN VERDE QUE EL PEDIDO YA ESTA LISTO 
checkClick = (i) =>{
    encargues[i].status = true;
    localStorage.setItem("pedidos",JSON.stringify(encargues));
    listarPedido();
}

// CAPTURO LOS DATOS INGRESADOS EN EL FORMULARIO DE PRESUPUESTO, LOS INGRESO COMO UN NUEVO OBJETO Y HAGO USO DE LA FUNCION PRESUPUESTAR
function presupuesto(){
    const nombre_pr = $('#nombre_pr').val();
    const kilos_pr = parseFloat($('#kilos_pr').val());
    const producto_pr = parseInt($('#producto_pr').val());
    let precio_kilo = elaborados[producto_pr-1];
    precio_kilo = precio_kilo.precio_por_kilo
    let nombre_producto = elaborados[producto_pr-1];
    nombre_producto = nombre_producto.producto;
    let presup = new Presupuesto(nombre_pr,kilos_pr,precio_kilo, nombre_producto);
    presup.presupuestar();
}
// CAPTURO LOS DATOS INGRESADOS EN EL FORMULARIO DE PEDIDOS, LOS INGRESO COMO UN NUEVO OBJETO Y HAGO USO DE LA FUNCION ENCARGAR
function pedidos(){
    let nombre_pe = $('#nombre_pe').val();
    let telefono_pe = $('#telefono_pe').val();
    let producto_pe = $('#producto_pe').val();
    let nombre_producto = elaborados[producto_pe-1];
    nombre_producto = nombre_producto.producto;
    let precio_producto = elaborados[producto_pe-1];
    precio_producto = precio_producto.precio_por_kilo;
    let kilos_pe = parseFloat($('#kilos_pe').val());
    let nota_pe = $('#nota_pe').val();
    let fecha_pe = $('#fecha_pe').val();;
    let status_pe = false;
    let pedido1 = new Pedido(nombre_pe, telefono_pe, nombre_producto, kilos_pe, nota_pe,fecha_pe, precio_producto, status_pe);
    pedido1.encargar();
}



// CON LOS DATOS RECOPILADOS DE LOS PEDIDOS CREO UNA NUEVA ROW EN LA TABLA CON LA INFORMACION PERTINENTE.


function listarPedido(){ 

    $('#tablaPedidos').text('');
    let tr;
    encargues.forEach((element,i) =>{
        tr = $(`<tr></tr>`);
        tr.attr("id", i);
        $('#tablaPedidos').append(tr);
        if(element.status === true){
            tr.attr("class", 'listo')
        }
        $(`#${i}`).append(` <td>${element.nombre}</td>
                    <td>${element.telefono}</td>
                    <td>${element.producto}</td>
                    <td>${element.kilos}</td>
                    <td>${element.nota}</td>
                    <td>${element.fecha}</td>
                    <td>
                        <i class="far fa-check-circle pointer" onClick="checkClick(${i})"></i>
                        <i class="fas fa-trash pointer" onClick="deleteClick(${i})"></i>
                    </td>`);
    })
}