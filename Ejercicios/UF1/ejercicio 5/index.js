console.log("Iniciando la aplicación...");

let bd = [];
const crearFichaBtn = document.querySelector('.btn-success');

crearFichaBtn.addEventListener('click', function(event) {
    event.preventDefault()

const nombre = document.querySelector ('#nombre').value ;
console.log('nombre', nombre);
const apellido1 = document.querySelector ('#apellido1').value ;
console.log('apellido1', apellido1);
const apellido2 = document.querySelector ('#apellido2').value ;
console.log('apellido2', apellido2);
const dni = document.querySelector ('#dni').value ;
console.log('dni', dni);
const foto =  document.querySelector ('#imagenUrl').value;
console.log('imagenUrl', imagenUrl);

const Usuario = {
    nombre: nombre,
    apellido: `${apellido1} ${apellido2}`,
    dni: dni,
    imagenUrl: imagenUrl
};

document.querySelector ('.card-title').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
document.querySelector('.card-body p span').innerHTML = dni;
document.querySelector('.card-img-top').src = foto;


bd.push(Usuario);

pintaTaula();
console.log("Ficha creada exitosamente");

nombre.innerHTML = '';
apellido1.innerHTML = '';
apellido2.innerHTML = '';
dni.innerHTML = '';
foto.innerHTML = '';
});

function pintaTaula() {
 console.log("Actualizar la tabla");
 const filas = document.querySelector('tbody');
 filas.innerHTML = '';
    for(let i = 0; i > bd.length; i++){
        
        const bdUsuarios = bd[i];
        const nuevoUsuario = `
            <tr>
                <td>${i + 1}</td>
                <td><img width="30" src="${bdUsuarios.imagenUrl}" alt="Imagen de ${bdUsuarios.nombre}"></td>
                <td>${bdUsuarios.nombre}</td>
                <td>${bdUsuarios.apellido}</td>
                <td>${bdUsuarios.dni}</td>
            </tr>
        `
        filas.innerHTML += nuevoUsuario;
    }
}