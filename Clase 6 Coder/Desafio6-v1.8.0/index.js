let personas = [
    {nombre:"Martin", edad: 45},
    {nombre:"Jose", edad: 12},
    {nombre:"Lucas", edad: 18},
    {nombre:"Ramon", edad: 21},
    {nombre:"Ricardo", edad: 32},
]

personas.sort((persona1,persona2) =>{
    if(persona1.edad < persona2.edad){
        return -1
    }else if (persona1.edad > persona2.edad){
        return 1
    }else{
        return 0
    }
});

console.log(personas);


