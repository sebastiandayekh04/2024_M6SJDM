
//3
document.getElementById("toggleButton").addEventListener("click", function() {
    const miDiv = document.getElementById("miDiv");
    if (miDiv.style.display === "none") {
        miDiv.style.display = "block";
    } else {
        miDiv.style.display = "none";
    }
});
