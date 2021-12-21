let boton1 = document.getElementById("boton1");

boton1.onclick = () =>{
    let contenedor = document.getElementById("contenedor");
    let nombre = prompt("Ingrese el nombre: "); // pido nombre
    let sueldo = parseInt(prompt("Ingrese el sueldo: ")); // pido sueldo
    let card = document.createElement("div"); // creo div
    card.className = "resultados"; // le doy la clase resultados
    card.innerHTML = `<h3>Nombre: ${nombre}</h3> <h4>Sueldo: ${sueldo}</h4>`;
    contenedor.appendChild(card); // le asigno el div a contenedo  
}











