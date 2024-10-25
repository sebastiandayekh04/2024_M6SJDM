
//7
const fruits = ["Poma", "Plàtan", "Taronja"];

fruits.forEach(function(fruit) {
    const li = document.createElement("li");
    li.textContent = fruit;
    document.getElementById("fruitList").appendChild(li);
});







