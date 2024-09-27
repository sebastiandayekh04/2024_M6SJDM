console.log('Calculadora');
// capturando botones
const boton1 = document.querySelector('#btn1')
console.log('boton1',boton1);
//capturamos el h1 y mirqamos el quiery selector (solo selecciona un elemento y al primero, tendria que ser el Queryslectorall para seleccionar todos como un array)
const titulo = document.querySelector("h1")
console.log ('interior del h1 ', titulo.innerHTML); // muestra el contenido
console.log ('h1', titulo); // muestra solo el texto
// cambiadno el interior del h1 cin un nuevo codigo html
titulo.innerHTML = "<em> Otro Titulo </em>"

//Escuchamos evento click del boton1
boton1.addEventListener("click", fnBoton1)
function fnBoton1(){
    console.log("Click en boton 1");
}

// lo mismo para el boton2 pero de forma resumida

document.querySelector("btn2").addEventListener
("onmousover", function(){
    console.log("Click en boton 2");
})

//evaluadno textos
const operacion = "2+3"
console.log("Operacion: ", operacion); 
console.log ("el resultado es: ", eval(operacion));




