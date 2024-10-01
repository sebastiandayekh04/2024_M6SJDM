console.log("tengo hambre");

let preguntas = [
    {
        // Pregunta sobre los títulos de la Champions
        pregunta: "¿Cuál es el club con más títulos de la Champions League?",
        opciones: ["AC Milan", "Real Madrid", "Liverpool", "Barcelona"],
        correcta: 1 // La respuesta correcta es Real Madrid 
    },
    {
        // Máximo goleador de la Champions
        pregunta: "¿Quién es el máximo goleador histórico de la Champions League?",
        opciones: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Robert Lewandowski"],
        correcta: 0 // Cristiano Ronaldo
    },
    {
        // Ganador de la Champions 2022-2023
        pregunta: "¿Qué equipo ganó la Champions League en la temporada 2022-2023?",
        opciones: ["Manchester City", "Real Madrid", "Inter de Milán", "Chelsea"],
        correcta: 0 // Manchester City
    },
    {
        // Año de establecimiento de la Champions
        pregunta: "¿En qué año se estableció la nueva Champions League?",
        opciones: ["1992", "1986", "1999", "2000"],
        correcta: 0 // 1992
    },
    {
        // Mejor jugador en finales
        pregunta: "¿Qué jugador ha sido nombrado mejor jugador de la final de la Champions League más veces?",
        opciones: ["Cristiano Ronaldo", "Lionel Messi", "Franco Baresi", "Paolo Maldini"],
        correcta: 0 // Cristiano Ronaldo
    }
];

// Variable para guardar la pregunta actual
let preguntaActual; 

// Función que muestra la pregunta
function generarPregunta() {
    // Selecciona una pregunta al azar
    const numeroAleatorio = Math.floor(Math.random() * preguntas.length); 
    console.log("Número aleatorio generado: ", numeroAleatorio); // Log para ver qué pregunta se selecciona
    preguntaActual = preguntas[numeroAleatorio]; 

    console.log("Pregunta seleccionada: ", preguntaActual.pregunta); // Log de la pregunta actual

    // Muestra la pregunta en el HTML
    document.querySelector('#question').textContent = preguntaActual.pregunta;

    // Limpia respuestas anteriores
    const contenedorRespuestas = document.querySelector('#answers'); 
    contenedorRespuestas.innerHTML = ''; 

    // Genera los botones de respuesta
    let botones = '';
    for (let i = 0; i < preguntaActual.opciones.length; i++) { 
        botones += `
        <button class="btn btn-primary" id="answer${i}">${preguntaActual.opciones[i]}</button>
        `;
    }
    contenedorRespuestas.innerHTML = botones; 
    console.log("Opciones de respuesta generadas:", preguntaActual.opciones); // Log de las opciones

    // Oculta el resultado (correcto o incorrecto)
    const resultado = document.querySelector('#result'); 
    resultado.style.display = "none"; 

    // Añade el evento para comprobar si la respuesta es correcta
    const botonesRespuestas = document.querySelectorAll('#answers button'); 
    for (let i = 0; i < botonesRespuestas.length; i++) {
        botonesRespuestas[i].addEventListener('click', function() { 
            // Muestra el resultado
            resultado.style.display = "block"; 

            console.log("Respuesta seleccionada: ", preguntaActual.opciones[i]); // Log de la respuesta seleccionada

            // Verifica si la respuesta es correcta
            if (i === preguntaActual.correcta) { 
                console.log("¡Respuesta correcta!"); // Log si la respuesta es correcta
                resultado.className = 'alert alert-success'; 
                resultado.textContent = "¡Respuesta Correcta!";
            } else {
                console.log("Respuesta incorrecta"); // Log si la respuesta es incorrecta
                resultado.className = 'alert alert-danger'; 
                resultado.textContent = "Respuesta Incorrecta";
            }
        });
    }
}

// Llama a la función para mostrar la primera pregunta
generarPregunta();

// Evento para mostrar la siguiente pregunta
document.querySelector('#next-question').addEventListener('click', function() {
    console.log("Mostrando la siguiente pregunta..."); // Log para saber cuándo se cambia de pregunta
    generarPregunta(); 
});
