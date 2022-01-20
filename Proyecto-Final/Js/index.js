const elaborados = [
    {producto: "Torta cumpleaños", precio_por_kilo: 1500}, 
    {producto: "Pasta frola", precio_por_kilo: 750},
    {producto: "Postres", precio_por_kilo: 980},
    {producto: "Tarta de coco", precio_por_kilo: 850},
    {producto: "Tarta de fruta", precio_por_kilo: 850},
    {producto: "Lemon pie", precio_por_kilo: 850},
]

const comunion = [
    {image: '<img src="Assets/comunion1.jfif" alt="torta-comunion">'},
    {image: '<img src="Assets/comunion2.jfif" alt="torta-comunion">'},
    {image: '<img src="Assets/comunion3.jfif" alt="torta-comunion">'},
    {image: '<img src="Assets/comunion4.jfif" alt="torta-comunion">'},
    {image: '<img src="Assets/comunion5.jfif" alt="torta-comunion">'},
    {image: '<img src="Assets/comunion6.jfif" alt="torta-comunion">'},
    {image: '<img src="Assets/comunion7.jfif" alt="torta-comunion">'},
    {image: '<img src="Assets/comunion8.jfif" alt="torta-comunion">'},
]
const infantiles = [
    {image: '<img src="Assets/infantiles1.jfif" alt="tortas-infantiles">'},
    {image: '<img src="Assets/infantiles2.jfif" alt="tortas-infantiles">'},
    {image: '<img src="Assets/infantiles3.jfif" alt="tortas-infantiles">'},
    {image: '<img src="Assets/infantiles4.jfif" alt="tortas-infantiles">'},
    {image: '<img src="Assets/infantiles5.jfif" alt="tortas-infantiles">'},
    {image: '<img src="Assets/infantiles6.jfif" alt="tortas-infantiles">'},
    {image: '<img src="Assets/infantiles7.jfif" alt="tortas-infantiles">'},
    {image: '<img src="Assets/infantiles8.jfif" alt="tortas-infantiles">'},
]
const casamiento = [
    {image: '<img src="Assets/casamiento1.jfif" alt="torta-casamiento">'},
    {image: '<img src="Assets/casamiento2.jfif" alt="torta-casamiento">'},
    {image: '<img src="Assets/casamiento3.jfif" alt="torta-casamiento">'},
    {image: '<img src="Assets/casamiento4.jfif" alt="torta-casamiento">'},
    {image: '<img src="Assets/casamiento5.jfif" alt="torta-casamiento">'},
    {image: '<img src="Assets/casamiento6.jfif" alt="torta-casamiento">'},
    {image: '<img src="Assets/casamiento7.jfif" alt="torta-casamiento">'},
    {image: '<img src="Assets/casamiento8.jfif" alt="torta-casamiento">'},
]

function listarFotos(modelo,categoria){
    vaciarGaleria();
    let div;
    modelo.forEach((element,i) =>{
        div = $(`<div class = "img-gal"></div>`);
        div.attr("id", i);
        $('#container-fotos').append(div);
        if(categoria == "comunion"){
            $(`#${i}`).append(`${element.image}`)
        }else if(categoria == "infantiles"){
            $(`#${i}`).append(`${element.image}`)
        }else if(categoria == "casamiento") {
            $(`#${i}`).append(`${element.image}`)
        }
    })
}

function vaciarGaleria(){
    $('#container-fotos').remove();
    let containerFotos = $('<div></div>')
    containerFotos.attr('id','container-fotos');
    containerFotos.attr('class','container-fotos');
    $('#galeria').append(containerFotos);
}

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
    constructor(nombre,telefono,nombre_producto,kilos,nota,fecha,precio_producto,senia,total,status_pe){
        this.nombre_producto = nombre_producto;
        this.kilos = kilos;
        this.fecha = fecha;
        this.nombre = nombre;
        this.telefono = telefono;
        this.nota = nota;
        this.precio_producto = precio_producto;
        this.senia = senia;
        this.total = total;
        this.status_pe = status_pe;
    }

    // RECIBE LOS PARAMETROS Y LOS GUARDA EN UN ARRAY QUE LUEGO SE RECORRE PARA OBTENER UNA COPIA EN EL LOCALSTORAGE
    encargar(){
        encargues.push({nombre: this.nombre, telefono: this.telefono, producto: this.nombre_producto, kilos: this.kilos, nota: this.nota, fecha: this.fecha, senia: this.senia, precio: this.precio_producto, total: this.total, status: this.status_pe});
        for(let index in encargues){
            localStorage.setItem("pedidos", JSON.stringify(encargues))
        }
    }

}


// CAPUTRO EVENTOS EN EL BOTON DE PRESUPUESTO, UTILIZO LA FUNCION PRESUPUESTAR Y VACIO EL FORMULARIO
$('#btn_calcular').on('click', (e) =>{
    e.preventDefault();
    if(nombre_pr.value == "" || kilos_pr.value == "" || producto_pr.value == "" ){
        alertaForm();
    }else{
        presupuesto();
        nombre_pr.value = "";
        kilos_pr.value ="";
        producto_pr.value ="";

    }
});

$('#modelo').on('change', function () {
    if ($('#modelo').val() == 1){
        let categoria = "comunion";
        listarFotos(comunion,categoria)
    }else if($('#modelo').val() == 2) {
        let categoria = "infantiles";
        listarFotos(infantiles,categoria)
    }else if($('#modelo').val() == 3) {
        let categoria = "casamiento";
        listarFotos(casamiento,categoria)
    }
});

function alertaForm(){
    Swal.fire({
        title:'¡ ERROR !',
        text: 'Debes completar todos los campos.',
        icon:'error',
        confirmButtonText:'Cerrar',
        footer: 'Esta informacion es importante !',
        confirmButtonColor:'#545454',
        allowOutsideClick:false,
        allowEscapeKey:false,
        allowEnterKey:false,
    })
}

function toast(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: '28%',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: '👌 El pedido se genero con exito.'
    })
}

function pagar(seniaMercado){
    let carro = [];
    let producto ={
        title: "Seña",
        description: "prueba",
        picture_url: "img",
        category_id: 1,
        quantity: Number(1),
        currency_id:"ARS",
        unit_price: Number(seniaMercado),
    };
    carro.push(producto);


    $.ajax({
        type: "POST",
        url: "https://api.mercadopago.com/checkout/preferences",
        data: JSON.stringify(carro),
        headers:{
            Authorization: "Bearer TEST-7552246970994987-012020-b87ccda58d82d7e2069fc3e59c2ba43c-1008272387",
        },
        data: JSON.stringify({
            items:carro,
        }),
        success: function (response) {
            const data = response;
        
            window.open(data.init_point,"_blank")
        }
    });
}

function seniar(seniaMercado){
    setTimeout(()=>{
        Swal.fire({
            title: 'Desea abonar la seña online?',
            showDenyButton: true,
            confirmButtonText: 'Abonar online',
            denyButtonText: `No, en el comercio`,
        }).then((result) => {
            if (result.isConfirmed) {
                pagar(seniaMercado);
            }
        });
    },3000)
    
}



function resetEncargar(){
    nombre_pe.value = "";
    kilos_pe.value ="";
    producto_pe.value ="";
    telefono_pe.value ="";
    fecha_pe.value ="";
    senia.value ="";
    nota_pe.value ="";
}
// CAPUTRO EVENTOS EN EL BOTON DE PEDIDOS, UTILIZO LA FUNCION PEDIDOS Y LA FUNCION LISTARPEDIDO PARA IMPRIMIR EN LA TABLA LOS PEDIDOS NUEVOS Y VACIO EL FORMULARIO
$('#btn_encargar').on('click', (e) => {
    e.preventDefault();
    if(nombre_pe.value == "" || kilos_pe.value == "" || producto_pe.value == "" || telefono_pe.value == "" || fecha_pe.value == ""){
        alertaForm();
    }else{
        pedidos();
        listarPedido();
        toast();
        if ($('#senia').val() !="" || $('#senia').val() !=0){
            seniaMercado = $('#senia').val();
            seniar(seniaMercado);
        }
        resetEncargar();
    }
});

function alertaBorrar(i) {
    Swal.fire({
        title: '¡ ATENCION !',
        text: 'Si elimina el pedido ya no podra recuperarlo.',
        icon:'warning',
        iconColor:'#ffdf00',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        confirmButtonColor: '#eb4242',
        denyButtonText: `Conservar`,
        denyButtonColor: `#545454`,
        allowOutsideClick:false,
        allowEscapeKey:false,
        allowEnterKey:false,
    }).then((result) => {
        if (result.isConfirmed) {
            encargues.splice(i, 1);
            localStorage.setItem("pedidos",JSON.stringify(encargues));
            listarPedido();
        }
    });
}


// SE DETECTA EL CLICK EN EL BASURERO PARA ELIMINAR DEL LOCAL STORAGE UN PEDIDO 
deleteClick = (i) =>{
    alertaBorrar(i);
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
    let fecha_pe = $('#fecha_pe').val();
    let senia = $('#senia').val();
    if (senia == ""){
        senia = 0;
        parseFloat(senia);
    }else{
        parseFloat(senia)
    }
    let total = (kilos_pe * precio_producto) - senia;
    let status_pe = false;
    let pedido1 = new Pedido(nombre_pe, telefono_pe, nombre_producto, kilos_pe, nota_pe,fecha_pe, precio_producto, senia, total, status_pe);
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
                    <td>${element.senia}</td>
                    <td>${element.total}</td>
                    <td>
                        <i class="far fa-check-circle pointer" onClick="checkClick(${i})"></i>
                        <i class="fas fa-trash pointer" onClick="deleteClick(${i})"></i>
                    </td>`);
    })
}