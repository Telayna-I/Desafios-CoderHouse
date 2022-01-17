const URLGET = 'http://hp-api.herokuapp.com/api/characters';


$('body').append('<button id="btn">Traer personajes</button>');

$('#btn').on('click', ()=>{
    $.get(URLGET, function(respuesta,estado){
        if(estado==='success'){
            let personajes = respuesta;
            for(const personaje of personajes){
                $('.container').append(
                    `<div class="card">
                        <div class="image">
                            <img src="${personaje.image}" alt="">
                        </div>
                        <h4>${personaje.name}</h4>
                        <p>
                            Especie:${personaje.species}
                            Casa:${personaje.house}<br>
                            Genero:${personaje.gender}<br>
                            Estudiante (?: ${personaje.hogwartsStudent}<br>
                            Cumpleanios:${personaje.dateOfBirth}<br>
                        </p>
                    </div>`
                );
            }
        }
    })
});


