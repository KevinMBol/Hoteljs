 const habitacion = document.querySelector("#habitacion");
let contador = 0;

function img1() {
    if (contador == 0) {
        habitacion.src = "../img/habitacion2.webp";
        contador = contador +1; 
    } else if (contador == 1) {
        habitacion.src = "../img/habitacion3.png";
        contador = contador +1; 
    } else {
        habitacion.src = "../img/habitacion1.jpg";
        contador =0; 
    } 
        
    
    
}

function img2() {
    if (contador == 0) {
        habitacion.src = "../img/habitacion2.webp";
        contador = contador +1; 
    } else if (contador == 1) {
        habitacion.src = "../img/habitacion3.png";
        contador = contador +1; 
    } else {
        habitacion.src = "../img/habitacion1.jpg";
        contador =0; 
    } 
}


function cotizar() {
    const nPers = document.getElementById("nroPers").value;
    const nroDias = document.getElementById("nroDias").value;
    const vlrPers = document.getElementById("vlrPers").value;
    const nResultado = document.getElementById("nResultado")

    let nTotal = Number(nPers) * Number(nroDias) * Number(vlrPers);

    nResultado.textContent = nTotal;
}
