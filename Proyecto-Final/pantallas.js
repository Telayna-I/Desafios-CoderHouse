

// Secciones del nav
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");


// secciones de la pagina
const inicio = document.getElementById("inicio");
const presupuesto_v = document.getElementById("presupuesto");
const pedidos_v = document.getElementById("pedidos");
const tabla = document.getElementById("tabla");
const pr = document.getElementById("pr");
const ped = document.getElementById("ped");
const boton_e_a = document.getElementById("boton_e_a");
const manager = document.getElementById("manager");
const slide = document.getElementById("slide");


// estando en pedidos click en el slide para pasar de clientes a administrador y viceversa.
boton_e_a.onclick = () =>{
    if(boton_e_a.className == "desactivado"){
        boton_e_a.className = "activo";
        tabla.classList.remove("ocultar");
        pedidos_v.classList.add("ocultar")
    
        let se_borra1 = document.getElementById("se_borra1");
        let se_borra2 = document.getElementById("se_borra2");
        let se_borra3 = document.getElementById("se_borra3");
        se_borra1.classList.add("ocultar");
        se_borra2.classList.add("ocultar");
        se_borra3.classList.add("ocultar");
    }else if (boton_e_a.classList == "activo"){
        boton_e_a.className = "desactivado";
        se_borra1.classList.remove("ocultar");
        se_borra2.classList.remove("ocultar");
        se_borra3.classList.remove("ocultar");
        tabla.classList.add("ocultar");
        pedidos_v.classList.remove("ocultar");
    }
    presupuesto_v.classList.add("ocultar");
    inicio.classList.add("ocultar");
}



// click en inicio en el nav y te lleva a inicio ocultando presupuesto, pedidos,tabla y el slide
section1.onclick = () =>{
    inicio.classList.remove("ocultar");
    presupuesto_v.classList.add("ocultar");   
    pedidos_v.classList.add("ocultar");
    tabla.classList.add("ocultar");
    slide.classList.add("ocultar");
    
}

// click en el + y te lleva a pedidos ocultando presupuesto, incio,tabla.
ped.onclick = (e) =>{
    e.preventDefault();
    pedidos_v.classList.remove("ocultar");
    presupuesto_v.classList.add("ocultar");
    inicio.classList.add("ocultar");
    tabla.classList.add("ocultar");
    slide.classList.remove("ocultar");
    
}

// click en el + y te lleva a presupuestos ocultando inicio, pedidos,tabla y el slide

pr.onclick = (e) =>{
    e.preventDefault();
    presupuesto_v.classList.remove("ocultar");
    inicio.classList.add("ocultar");
    pedidos_v.classList.add("ocultar");
    tabla.classList.add("ocultar");
    
}

// click en presupuesto en el nav y te lleva a presupuesto ocultando inicio, pedidos,tabla y el slide
section2.onclick = () =>{
    presupuesto_v.classList.remove("ocultar");
    inicio.classList.add("ocultar");
    pedidos_v.classList.add("ocultar");
    tabla.classList.add("ocultar");
    slide.classList.add("ocultar");
    
}

// click en pedidos en el nav y te lleva a pedidos ocultando presupuesto, inicio,tabla.
section3.onclick = () =>{
    pedidos_v.classList.remove("ocultar");
    slide.classList.remove("ocultar");
    presupuesto_v.classList.add("ocultar");
    inicio.classList.add("ocultar");
    tabla.classList.add("ocultar");
    
}

