let boton1 = document.getElementById("boton1");
const noticias = [
    {titulo: "En cartelera: Spiderman no way home.", noticia:"Los Ángeles (EE.UU.), 20 dic (EFE).- Con 600 millones de dólares ingresados en todo el mundo durante su primer fin de semana, Spider-Man: No Way Home se convirtió en el tercer mejor estreno internacional de la historia, solo por detrás de Avengers: End Game (1.200 millones) y Avengers: Infinity War (640 millones).En el mercado estadounidense, el más importante para Hollywood, la película se convirtió en el segundo debut más taquillero de la historia del país, al superar los 260 millones de dólares, según la revisión de cuentas que Sony realizó el lunes.Así, Spider-Man: No Way Home no sólo es el mejor lanzamiento de toda la pandemia, sino que en EE.UU. ha conseguido superar al debut de pesos pesados como Avengers: Infinity War (257 millones en 2018) y Star Wars: The Rise of Skywalker (177 millones en 2019).Pero además, con sus 600 millones de dólares recaudados en todo el mundo, gracias a un estreno simultáneo en varios países, la última entrega del superhéroe arácnido está en camino de convertirse en el primer filme que supera los 1.000 millones de dólares desde que comenzó la pandemia hace casi 2 años.Y esa previsión omite al segundo mercado más importante, China, donde aún no se ha estrenado.La noticia supone un respiro para los cines de todo el mundo, que arrastran pérdidas millonarias desde principios de 2020.Sin embargo, tan solo la franquicia Marvel ha logrado esquivar los obstáculos del coronavirus con estrenos potentes como Black Widow y Shang-Chi en 2021, mientras que la taquilla de otras películas apenas consigue cubrir los costos de producción.Sirve como ejemplo el caso de EE.UU., donde hace una semana la nueva adaptación del musical West Side Story, dirigida por Steven Spielberg, debutó muy por debajo de las expectativas al recaudar únicamente 10,5 millones de dólares.Esta semana en el país norteamericano, el buen rendimiento de Spider-Man contrasta con el descafeinado debut de Nightmare Alley lo nuevo de Guilermo del Toro, que soló sumó 2,9 millones de dólares y quedó en quinta posición.Por delante se situaron Encanto, en segunda posición con 6,5 millones de dólares; West Side Story, en tercera con 3,4 millones, y Ghostbusters: Afterlife, en cuarta con 3,4 millones."},
    {titulo: "Keanu Reeves, más cerca de Marvel: se ha reunido con Kevin Feige y está interesado.", noticia:"El coqueteo entre Keanu Reeves y el Universo Cinematográfico de Marvel no es ningún secreto. En 2019, Kevin Feige confirmó haber mantenido conversaciones con el citado actor, pero nunca llegó a dar frutos –al menos de cara al público–, atenuando una posibilidad esperada por muchos seguidores. Con motivo del estreno de The Matrix Resurrections, no obstante, Comicbook decidió preguntarle directamente a Keanu Reeves sobre el estado de esta posibilidad. Y, sorprendentemente, parece ser una puerta que aún sigue bastante abierta. “No lo hemos hecho aún”, dijo Reeves refiriéndose a la necesidad de encontrar un personaje de Marvel que pueda interpretar. El actor dice haberse reunido con Kevin Feige, a quien valora positivamente, pero no se ha concretado nada. “No tenemos nada, tenemos que encontrar algo”, indicó."}
];




boton1.onclick = () =>{
    noticias.forEach( noticia =>{
        let contenedor = document.getElementById("contenedor");
        let news = document.createElement("div"); // creo div
        news.className = "noticia"; // le doy la clase resultados
        news.innerHTML = `<h1>${noticia.titulo}</h1> <p>${noticia.noticia}</p>`;
        contenedor.appendChild(news); // le asigno el div a contenido  
    });
    
}










