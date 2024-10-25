
  
//13
document.getElementById("mostrarSrc").addEventListener("click", function() {
    const src = document.getElementById("imatge").getAttribute("src");
    document.getElementById("resultat").textContent = "L'atribut src és: " + src;
});








