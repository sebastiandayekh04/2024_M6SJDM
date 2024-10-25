
function sumar(num1, num2) {
    return num1 + num2;
}

document.getElementById("botonSuma").addEventListener("click", function() {
    const resultat = sumar(5, 10);
    document.getElementById("resultat").textContent = "La suma és: " + resultat;
});
