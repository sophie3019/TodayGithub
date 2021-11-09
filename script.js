let vehicle = ["car","BMW","Totayo","VW"];

const display = document.getElementById("display");

for (let i = 0; i < vehicle.length; i++) {
    display.innerHTML += "<li>" + vehicle[i]
    
}
