console.log("Probando 1..2..3");

//Ejercicio 1 - Numeros Aleatorios
function generarNumAleatorio(min, max){
    return Math.floor(Math.random)
}
let numMin = document.querySelector("#num1").value;
let numMax = document.querySelector("#num2").value;

document.querySelector("#buttonSubmit").addEventListener("click", () => {
  let numMin = parseInt(document.querySelector("#num1").value);
  let numMax = parseInt(document.querySelector("#num2").value);

  let numeroAleatorio = generarNumeroAleatorio(numMin, numMax);
  document.querySelector("#numeroAleatorio").textContent = numeroAleatorio;
});

//Ejercicio 2 - String

function mayusculas(){
    let btnMayusculas = document.querySelector("#mayuscula");
}