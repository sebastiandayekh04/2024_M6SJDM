console.log("probando");
// prevent.default() para evitar recargas inesperadas
//event.stopPropagation()
//.value para gaurdar los datos
// getAttribute en los inputs para recibir los datos
//setAtributte para cambiar los datos de la carta
//removeAtributte para limpiar los inputs sin que se reinicie la pagina
//hasAttribute para no dejar pasar los si estan incompletos

// clic en el botón 'Crear ficha'
const crearFichaBtn = document.querySelector('.btn-success'); // Botón para crear la ficha

// Añadir un evento 'click' al botón
crearFichaBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita la recarga de la página

    // Capturar los inputs del formulario usando su id
    const nombreInput = document.getElementById('nombre');
    const apellido1Input = document.getElementById('apellido1');
    const apellido2Input = document.getElementById('apellido2');
    const dniInput = document.getElementById('dni');
    const imgInput = document.getElementById('imgURL');


    // Capturar los elementos de la tarjeta para modificar
    const fichaImg = document.querySelector('.card-img-top'); // Imagen de la tarjeta
    const fichaNombre = document.querySelector('.card-title span:first-child'); // Primer nombre de la tarjeta
    const fichaApellidos = document.querySelector('.card-title span:nth-child(2)'); // Primer apellido de la tarjeta
    const fichaDNI = document.querySelector('.card-body p span'); // DNI de la tarjeta
   
    //span:nth-child(1) es el primer <span>, 
    // span:nth-child(2) es el segundo <span>.
    // Se utiliza para acceder a elementos específicos, como los apellidos en la tarjeta, ya que los tres se ubicarian en el mismo lugar
    // <h5 class="card-title"><span>Perico</span> <span>Mepiedras Rocosas</span></h5>   

    // Inyectar los datos en la ficha
    fichaImg.setAttribute('src', imgInput.value); // Cambiar la imagen
    fichaNombre.textContent = nombreInput.value; // Cambiar el nombre
    fichaApellidos.textContent = `${apellido1Input.value} ${apellido2Input.value}`; // Cambiar los apellidos
    fichaDNI.textContent = dniInput.value; // Cambiar el DNI

    // Limpiar los campos después de crear la ficha
    nombreInput.value = '';
    apellido1Input.value = '';
    apellido2Input.value = '';
    dniInput.value = '';
    imgInput.value = '';

    console.log("Ficha creada exitosamente");
});
