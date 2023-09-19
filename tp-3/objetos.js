var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

function crearPersona(paramNombre, apellido, edad, documento) {
    let personaNueva = {
        "nombre": paramNombre,
        apellido: apellido,
        edad,
        documento,
    };
    return personaNueva;
}
console.log("crearPersona()", crearPersona("Juan", "Pérez", 20, 123456));

function nombreCompletoDePersona(persona) {
    return persona.apellido + ", " + persona.nombre;
}
console.log("nombreCompletoDePersona()", nombreCompletoDePersona(personaEjemplo));

function felizCumpleaños(persona) {
    persona.edad++;
    return persona;
}
console.log("felizCumpleaños()", felizCumpleaños(personaEjemplo));

function sinDocumento(persona) {
    delete persona.documento;
    return persona;
}
console.log("sinDocumento()", sinDocumento(personaEjemplo));
