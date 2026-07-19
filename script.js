//=========================
// TARJETA ARRASTRADA
//=========================

let tarjetaSeleccionada = null;

// Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll(".tarjeta");

// Seleccionamos todas las zonas
const zonas = document.querySelectorAll(".zona");

//=========================
// ARRASTRAR TARJETAS
//=========================

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("dragstart", function () {

        tarjetaSeleccionada = this;

    });

});

//=========================
// SOLTAR TARJETAS
//=========================

zonas.forEach(zona => {

    zona.addEventListener("dragover", function (e) {

        e.preventDefault();

        this.classList.add("hover");

    });

    zona.addEventListener("dragleave", function () {

        this.classList.remove("hover");

    });

    zona.addEventListener("drop", function (e) {

        e.preventDefault();

        this.classList.remove("hover");

        this.innerHTML = "";

        this.appendChild(tarjetaSeleccionada);

    });

});

//=========================
// REVISAR RESPUESTAS
//=========================

document.getElementById("revisar").addEventListener("click", revisar);

function revisar(){

    let puntos = 0;

    zonas.forEach(zona=>{

        if(zona.children.length>0){

            let tarjeta = zona.children[0];

            if(tarjeta.id===zona.dataset.respuesta){

                puntos +=5;

                zona.style.background="#b7efc5";
                zona.style.borderColor="green";

            }else{

                zona.style.background="#ffccd5";
                zona.style.borderColor="red";

            }

        }else{

            zona.style.background="#ffccd5";
            zona.style.borderColor="red";

        }

    });

    document.getElementById("puntaje").innerHTML =
    "🏆 Puntaje: "+puntos+" /20";

    if(puntos===20){

        alert("🎉 ¡Felicitaciones! ¡Completaste correctamente el mapa conceptual!");

    }

}

//=========================
// REINICIAR
//=========================

document.getElementById("reiniciar").addEventListener("click",function(){

    location.reload();

});