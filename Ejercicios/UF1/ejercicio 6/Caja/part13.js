
  
//13
document.getElementById("mostrarSrc").addEventListener("click", function() {
    const src = document.getElementById("imatge").getAttribute("src");
    document.getElementById("resultat").textContent = "El atributo de la imagen es: " + src;
});








