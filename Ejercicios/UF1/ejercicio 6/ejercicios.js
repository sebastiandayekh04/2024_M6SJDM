//Exercici 1 - Valor absolut

function ValorAbsolut(num){
     return Math.abs(num);
}

console.log(valorAbsolut(-5)); // Retorna 5
console.log(valorAbsolut(3));  // Retorna 3

//Ejercicio 2 - Firmar un número

function determinarSigne(num) {
    const signo = Math.sign(num);
    if (signo === 1){
        return "El numero es positivo"
    }else if (signo === -1){
        return "el numro es negativo"
    } else {
        return "eñ numero es cero"
    }
}
console.log(determinarSigne(-10)); // Retorna "El número és negatiu."
console.log(determinarSigne(0));   // Retorna "El número és zero."
console.log(determinarSigne(7));   // Retorna "El número és positiu."
//Ejercicio 3 - Máxima de tres números
function trobarMaxim(a, b, c) {
    return Math.max(a,b,c);
}


console.log(trobarMaxim(5, 10, 3)); // Retorna 10

// Ejercicio 4 - Mínimos de una matriz

function trobarMinim(arrayNumeros) {
    return Math.min (arrayNumeros);
}


var numeros = [3, 7, 2, 9, 4];
console.log(trobarMinim(numeros)); // Retorna 2

// Exercici 5 - Arrel quadrada
function calcularArrelQuadrada(num) {
    if (num < 0) {
        return "No es posible calcular una raiz negativa"
    }
    return  Math.sqrt(num);
}

console.log(calcularArrelQuadrada(16)); // Retorna 4
console.log(calcularArrelQuadrada(-9)); // Retorna "No es pot calcular l'arrel quadrada d'un número negatiu."

// Exercici 6 - Arrodonir un número a l'enter més proper

function arrodonirNumero(num) {
    return Math.round(num);
}


console.log(arrodonirNumero(4.6)); // Retorna 5
console.log(arrodonirNumero(4.3)); // Retorna 4

//Exercici 7 - Arrodonir cap amunt

function arrodonirCapAmunt(num) {
    return Math.ceil(num);
}


console.log(arrodonirCapAmunt(3.1)); // Retorna 4
console.log(arrodonirCapAmunt(7.9)); // Retorna 8

//Exercici 8 - Arrodonir cap avall

function arrodonirCapAvall(num) {
    return Math.floor(num);
}


console.log(arrodonirCapAvall(5.8)); // Retorna 5
console.log(arrodonirCapAvall(2.2)); // Retorna 2

//Exercici 9 - Eliminar la part decimal d'un número

function truncarNumero(num) {
    return Math.trunc(num);
}

console.log(truncarNumero(6.7));   // Retorna 6
console.log(truncarNumero(-6.7));  // Retorna -6

// Exercici 10 - Calcular el sinus d'un angle
function calcularSinus(angleGraus) {
    const radian = angleGraus * (Math.PI / 180); 
    return Math.sin(radian);
}

console.log(calcularSinus(30)); // Retorna 0.5
console.log(calcularSinus(90)); // Retorna 1
// String
// Exercici 1 - Interpolació de variables amb cometes obertes

function interpolarVariables(nom, edat) {
   return 'El meu nom és ${nom} i tinc ${anys} anys';
}
console.log(interpolarVariables("Joan", 25)); // Retorna "El meu nom és Joan i tinc 25 anys."
//Ejercicio 2 -charAt
function obtenirCaracter(cadena, posicio) {
    return cadena.charAt(posicio);
}
console.log(obtenirCaracter("Hola", 1)); // Retorna "o"

//Ejercicio 3 -indexOf
function trobarPosicio(cadena, subcadena) {
    return cadena.indexOf(subcadena); 
}

console.log(trobarPosicio("JavaScript és genial", "genial")); // Retorna 13

//Ejercicio 4 -repeat

function repetirCadena(cadena, vegades) {
    return cadena.repeat(vegades);
}

console.log(repetirCadena("Hola", 3)); // Retorna "HolaHolaHola"

//Ejercicio 5 -substring

function obtenirSubstring(cadena, inici, fi) {
    return cadena.substring(inici, fi);
}

console.log(obtenirSubstring("JavaScript", 0, 4)); // Retorna "Java"

//Ejercicio 6 -substr
function obtenirSubstr(cadena, inici, longitud) {
    return cadena.substr(inici, longitud);
}

console.log(obtenirSubstr("JavaScript", 4, 6)); // Retorna "Script"

//Ejercicio 7 -split
function dividirCadena(cadena, separador) {
    return cadena.split(separador);
}


console.log(dividirCadena("poma,pera,plàtan", ",")); // Retorna ["poma", "pera", "plàtan"]

//Ejercicio 8 -startsWith

function comencaAmb(cadena, subcadena) {
    return cadena.startsWith(subcadena);
}

// Exemple d'ús:
console.log(comencaAmb("JavaScript", "Java")); // Retorna true

//Ejercicio 9 -endsWith
function acabaAmb(cadena, subcadena) {
    return cadena.endsWith(subcadena);
}

// Exemple d'ús:
console.log(acabaAmb("JavaScript", "Script")); // Retorna true

//Ejercicio 10 -includes
function contéSubcadena(cadena, subcadena) {
    return cadena.includes(subcadena);
}

// Exemple d'ús:
console.log(contéSubcadena("JavaScript és genial", "genial")); // Retorna true

//Ejercicio 11 -search
function cercarCadena(cadena, subcadena) {
    return cadena.search(subcadena);
}

// Exemple d'ús:
console.log(cercarCadena("JavaScript és genial", "genial")); // Retorna 13

//Ejercicio 12 -match

function buscarCoincidencies(cadena, patró) {
    return cadena.match(patró);
}

console.log(buscarCoincidencies("Hola 123, adéu 456", /\d+/g)); // Retorna ["123", "456"]

//Ejercicio 13 -replace

function substituirCadena(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replace(vellSubcadena, nouSubcadena);
}

// Exemple d'ús:
console.log(substituirCadena("Hola món", "món", "JavaScript")); // Retorna "Hola JavaScript"

//Ejercicio 14 -replaceAll
function substituirTotes(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replaceAll(vellSubcadena, nouSubcadena);
}

// Exemple d'ús:
console.log(substituirTotes("Hola món, món", "món", "JavaScript")); // Retorna "Hola JavaScript, JavaScript"

//Strings II
//Ejercicio 1 -toLowerCase
function convertirMinuscules(cadena) {
    return cadena.toLowerCase;
}

// Exemple d'ús:
console.log(convertirMinuscules("Hola Món")); // Retorna "hola món"

//Ejercicio 2 -toUpperCase
function convertirMajuscules(cadena) {
    return cadena.toUpperCase;
}

// Exemple d'ús:
console.log(convertirMajuscules("Hola Món")); // Retorna "HOLA MÓN"

//Ejercicio 3 -trimStart
function eliminarEspaisInicials(cadena) {
    return cadena.trimStart;
}

// Exemple d'ús:
console.log(eliminarEspaisInicials("   Hola Món")); // Retorna "Hola Món"

//Ejercicio 4 -trimEnd
function eliminarEspaisFinals(cadena) {
    return cadena.trimEnd;
}

// Exemple d'ús:
console.log(eliminarEspaisFinals("Hola Món   ")); // Retorna "Hola Món"

//Ejercicio 5 -trim
function eliminarEspaisExtrems(cadena) {
    return cadena.trim;
}

// Exemple d'ús:
console.log(eliminarEspaisExtrems("   Hola Món   ")); // Retorna "Hola Món"