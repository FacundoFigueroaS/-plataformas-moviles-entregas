var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.sort((a, b) => {
        return a.apellido.localeCompare(b.apellido);
    });
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

function promedioEdades(listaDePersonas) {
    const totalEdades = listaDePersonas.reduce((total, persona) => total + persona.edad, 0);
    return totalEdades / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

function laPersonaMayor(listaDePersonas) {
    return listaDePersonas.reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), listaDePersonas[0]);
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));
