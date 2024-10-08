// Preguntas del quiz
let preguntas = [
    {
        pregunta: "¿Cuál es el club con más títulos de la Champions League?",
        opciones: ["AC Milan", "Real Madrid", "Liverpool", "Barcelona"],
        correcta: 1 // La respuesta correcta es Real Madrid
    },
    {
        pregunta: "¿Quién es el máximo goleador histórico de la Champions League?",
        opciones: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Robert Lewandowski"],
        correcta: 0 // Cristiano Ronaldo
    },
    {
        pregunta: "¿Qué equipo ganó la Champions League en la temporada 2022-2023?",
        opciones: ["Manchester City", "Real Madrid", "Inter de Milán", "Chelsea"],
        correcta: 0 // Manchester City
    },
    {
        pregunta: "¿En qué año se estableció la nueva Champions League?",
        opciones: ["1992", "1986", "1999", "2000"],
        correcta: 0 // 1992
    },
    {
        pregunta: "¿Qué jugador ha sido nombrado mejor jugador de la final de la Champions League más veces?",
        opciones: ["Cristiano Ronaldo", "Lionel Messi", "Franco Baresi", "Paolo Maldini"],
        correcta: 0 // Cristiano Ronaldo
    }
];

// Variables principales
let posicioActual = 1; // Posición inicial del jugador
let encerts = 0; // Número de respuestas correctas
let errors = 0; // Número de respuestas incorrectas

// Variable para guardar la pregunta actual
let preguntaActual;

// Función para generar una nueva pregunta
function generarPregunta() {
    // Selecciona una pregunta aleatoria
    const numeroAleatorio = Math.floor(Math.random() * preguntas.length);
    preguntaActual = preguntas[numeroAleatorio];

    // Muestra la pregunta en el HTML
    document.querySelector('#question').textContent = preguntaActual.pregunta;

    // Limpia las opciones de respuesta anteriores
    const contenedorRespuestas = document.querySelector('#answers');
    contenedorRespuestas.innerHTML = '';

    // Genera los botones de respuesta
    preguntaActual.opciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.classList.add('btn', 'btn-primary');
        boton.textContent = opcion;
        boton.addEventListener('click', () => verificarRespuesta(index));
        contenedorRespuestas.appendChild(boton);
    });

    // Oculta el resultado
    document.querySelector('#result').style.display = "none";
}

// Función para verificar si la respuesta seleccionada es correcta
function verificarRespuesta(index) {
    const resultado = document.querySelector('#result');
    resultado.style.display = "block";

    if (index === preguntaActual.correcta) {
        // Respuesta correcta
        resultado.className = 'alert alert-success';
        resultado.textContent = "¡Respuesta Correcta!";
        mouJugador(true); // Avanza el jugador
    } else {
        // Respuesta incorrecta
        resultado.className = 'alert alert-danger';
        resultado.textContent = "Respuesta Incorrecta";
        mouJugador(false); // Retrocede el jugador
    }

    comprobarFinalJuego(); // Verifica si el juego ha terminado
}

// Función para mover al jugador en el tablero
function mouJugador(endavant) {
    const casillas = document.querySelectorAll('.div');

    // Si la respuesta fue correcta, avanza
    if (endavant) {
        encerts++;
        posicioActual = Math.min(posicioActual + 1, casillas.length);
    } else {
        errors++;
        posicioActual = Math.max(posicioActual - 3, 1); // Retrocede pero no menos de 1
    }

    // Actualiza el color de la casilla actual y anterior
    casillas.forEach(casilla => casilla.classList.remove('div-point'));
    casillas[posicioActual - 1].classList.add('div-point');

    // Muestra en consola el estado actual
    console.log(`Posición actual: ${posicioActual}, Encerts: ${encerts}, Errors: ${errors}`);
}

// Función para comprobar si el juego ha llegado al final
function comprobarFinalJuego() {
    if (posicioActual === 20) {
        alert(`¡Has llegado a la casilla 20! Encerts: ${encerts}, Errors: ${errors}`);
        document.querySelector('#next-question').disabled = true; // Deshabilita el botón de siguiente pregunta
    }
}

// Evento para generar la siguiente pregunta
document.querySelector('#next-question').addEventListener('click', generarPregunta);

// Llama a la función para mostrar la primera pregunta
generarPregunta();
