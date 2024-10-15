console.log("Iniciando la aplicación...");

// Array para almacenar los datos de los usuarios
let usuarios = []; 

// Función para crear una nueva ficha
function crearFicha(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del botón
    
    // Obtener valores de los inputs
    const nombre = document.querySelector('#nombre').value;
    const apellido1 = document.querySelector('#apellido1').value; // Cambié el ID a 'apellido1'
    const apellido2 = document.querySelector('#apellido2').value; // Cambié el ID a 'apellido2'
    const dni = document.querySelector('#dni').value;
    const imagenUrl = document.querySelector('#imagenUrl').value; // Cambié el ID a 'imagenUrl'

    // Verificar si todos los campos tienen valor
    if (!nombre || !apellido1 || !apellido2 || !dni || !imagenUrl) {
        console.log("Por favor, completa todos los campos.");
        return; // Si algún campo está vacío, no se procesa la ficha
    }

    // Crear un objeto usuario
    const nuevoUsuario = {
        nombre: nombre,
        apellido: `${apellido1} ${apellido2}`,
        dni: dni,
        imagenUrl: imagenUrl
    };

    // Agregar el objeto usuario al array usuarios
    usuarios.push(nuevoUsuario);

    // Actualizar la ficha con los nuevos datos
    document.querySelector('.card-title').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('.card-body p span').innerHTML = dni;
    document.querySelector('.card-img-top').src = imagenUrl;

    // Llamar a la función para pintar la tabla
    actualizarTabla();
}

// Función para pintar la tabla con los usuarios
function actualizarTabla() {
    // Captura el cuerpo de la tabla donde se mostrarán los usuarios
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Limpia la tabla antes de llenarla 

    // Recorre el array usuarios y generar las filas de la tabla
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const fila = `
            <tr>
                <td>${i + 1}</td>
                <td><img width="30" src="${usuario.imagenUrl}" alt="Imagen de ${usuario.nombre}"></td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.dni}</td>
            </tr>
        `;
        // Inserta la fila generada en la tabla
        tbody.innerHTML += fila;
    }
}

// Asociar el evento click al botón para crear la ficha
const botonCrearFicha = document.querySelector('.btn-success'); // Asegúrate que este sea el botón correcto
botonCrearFicha.addEventListener('click', crearFicha);
