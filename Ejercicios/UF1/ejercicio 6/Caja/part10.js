

//10
document.getElementById("botonValidar").addEventListener("click", function() {
    const entrada = document.getElementById("entrada").value;
    if (entrada === "") {
        alert("El camp no pot estar buit!");
    } else {
        alert("Entrada vàlida!");
    }
});
