var listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];

function invertirLista(listaDeNumeros) {
    return listaDeNumeros.reverse();
}
console.log("invertirLista([2,3,4]): ", invertirLista([2, 3, 4]));

function calcularPromedio(listaDeNumeros) {
    var sum = 0;
    for (var i = 0; i < listaDeNumeros.length; i++) {
        sum += listaDeNumeros[i];
    }
    return sum / listaDeNumeros.length;
}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2, 3, 4]));
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo));

function crearListaDeNumeros(inicio, fin) {
    var lista = [];
    for (var i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    return lista;
}
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2, 5));

function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.sort(function(a, b) {
        return b - a;
    });
}
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2, 3, 4]));
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));

function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max.apply(null, listaDeNumeros);
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2, 3, 4]));
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));

function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.sort(function(a, b) {
        return a.length - b.length;
    });
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']));

function encontrarPalabraMasCorta(listaDePalabras) {
    var shortest = listaDePalabras[0];
    for (var i = 1; i < listaDePalabras.length; i++) {
        if (listaDePalabras[i].length < shortest.length) {
            shortest = listaDePalabras[i];
        }
    }
    return shortest;
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']));

function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(function(num) {
        return num > 0;
    });
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1, -1, 0]));
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo));

function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(function(nota) {
        return nota >= 6;
    }).length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]));

function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(Boolean);
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]));

function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) {
        return "";
    } else if (listaDePalabras.length === 1) {
        return listaDePalabras[0] + ".";
    } else if (listaDePalabras.length === 2) {
        return listaDePalabras[0] + " y " + listaDePalabras[1] + ".";
    } else {
        var result = listaDePalabras.slice(0, -1).join(", ") + " y " + listaDePalabras.slice(-1) + ".";
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
}
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]));
