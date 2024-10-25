

//10
document.getElementById("botonValidar").addEventListener("click", function() {
    const entrada = document.getElementById("entrada").value;
    if (entrada === "") {
        alert("Escribe en el input");
    } else {
        alert("Entrada valida");
    }
});
