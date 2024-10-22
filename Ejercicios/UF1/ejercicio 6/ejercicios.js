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

}
