console.log("Iniciando la aplicación...");

let bd = [];
const crearFichaBtn = document.querySelector('.btn-success');
crearFicha.addEventListener('click', function(event)) {
    event.preventDefault()

const nombre = document.querySelector ('#nombre').value ;
console.log('nombre', nombre);
const apellido1 = document.querySelector ('#apellido1').value ;
console.log('apellido1', apellido1);
const apellido2 = document.querySelector ('#apellido2').value ;
console.log('apellido2', apellido2);
const dni = document.querySelector ('#dni').value ;
console.log('dni', dni);
const foto =  document.querySelector ('#imagenUrl').value,;
console.log('imagenUrl', imagenUrl);

const nuevoUsuario = {
    nombre: nombre,
    apellido: `${apellido1} ${apellido2}`,
    dni: dni,
    imagenUrl: imagenUrl
};


console.log("Ficha creada exitosamente");

};