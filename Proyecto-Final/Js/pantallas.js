// estando en pedidos click en el slide para pasar de clientes a administrador y viceversa.
$('#boton_e_a').on('click', () => { 
    if ($('#boton_e_a').hasClass('desactivado')){
        $('#boton_e_a').removeClass('desactivado');
        $('#boton_e_a').addClass('activo');
        $('#tabla').removeClass('ocultar');
        $('#pedidos').addClass('ocultar');
        $('#se_borra1').addClass('ocultar');
        $('#se_borra2').addClass('ocultar');
        $('#se_borra3').addClass('ocultar');
    }else if($('#boton_e_a').hasClass('activo')){
        $('#boton_e_a').removeClass('activo');
        $('#boton_e_a').addClass('desactivado');
        $('#se_borra1').removeClass('ocultar');
        $('#se_borra2').removeClass('ocultar');
        $('#se_borra3').removeClass('ocultar');
        $('#tabla').addClass('ocultar');
        $('#pedidos').removeClass('ocultar');
    }
    $('#presupuesto').addClass('ocultar');
    $('#inicio').addClass('ocultar');
});




// click en inicio en el nav y te lleva a inicio ocultando presupuesto, pedidos,tabla y el slide
$('#section1').on('click', () => {
    $('#inicio').removeClass('ocultar');
    $('#presupuesto').addClass('ocultar');
    $('#pedidos').addClass('ocultar');
    $('#tabla').addClass('ocultar');
    $('#slide').addClass('ocultar');
})

// click en el + y te lleva a pedidos ocultando presupuesto, incio,tabla.
$('#ped').on('click', (e) => {
    e.preventDefault();
    $('#pedidos').removeClass('ocultar');
    $('#slide').removeClass('ocultar');
    $('#presupuesto').addClass('ocultar');
    $('#inicio').addClass('ocultar');
    $('#tabla').addClass('ocultar');
})

// click en el + y te lleva a presupuestos ocultando inicio, pedidos,tabla y el slide
$('#pr').on('click', (e) => {
    e.preventDefault();
    $('#presupuesto').removeClass('ocultar');
    $('#inicio').addClass('ocultar');
    $('#pedidos').addClass('ocultar');
    $('#tabla').addClass('ocultar');
})

// click en presupuesto en el nav y te lleva a presupuesto ocultando inicio, pedidos,tabla y el slide
$('#section2').on('click', () => {
    $('#presupuesto').removeClass('ocultar');
    $('#inicio').addClass('ocultar');
    $('#pedidos').addClass('ocultar');
    $('#tabla').addClass('ocultar');
    $('#slide').addClass('ocultar');
})

// click en pedidos en el nav y te lleva a pedidos ocultando presupuesto, inicio,tabla.
$('#section3').on('click', () => {
    $('#pedidos').removeClass('ocultar');
    $('#slide').removeClass('ocultar');
    $('#presupuesto').addClass('ocultar');
    $('#inicio').addClass('ocultar');
    $('#tabla').addClass('ocultar');
})

