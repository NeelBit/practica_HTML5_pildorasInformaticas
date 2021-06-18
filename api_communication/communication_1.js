
function inicio() {

    zonaDatos = document.getElementById("zonaDatos");

    document.getElementById("btnEnviar").addEventListener("click", btn, false);

    progress = document.getElementById("progress");



}

function btn() {
    
    var url = "texto1.txt";

    var solicitud = new XMLHttpRequest();

    // eventos:
    solicitud.addEventListener("loadstart", comienzaBarra, false);

    solicitud.addEventListener("progress", progresoBarra, false);

    // a la escucha del evento carga, cuando termina la descarga
    solicitud.addEventListener("load", mostrar, false);

    // abrir conexion
    solicitud.open("GET", url, true);

    // especificar la info que se va a enviar
    solicitud.send(null);

}

// recibe como parametro el objeto desencadenante del evento. 
function mostrar(e) {

    zonaDatos.innerHTML = e.target.responseText;

    // si tenemos un video por ej:
    //zonaDatos.innerHTML = "Archivo leído!";

}

// loadstart
function comienzaBarra() {

    progress.innerHTML = "style='width: 0%;'";

}

// progress
function progresoBarra(e) {
                        // loaded tamaño total, total es el total descargado en un momento concreto. regla de tres simple
    var porcentaje = parseInt(e.loaded/e.total*100);

    progress.innerHTML = "style='width: '"+porcentaje+"%;'";

    // si usabamos la etiqueta <progress
    /*
    zonaFormulario = document.getElementById("zonaFormulario");
    var barraProgreso = zonaFormulario.querySelector("progress");
    barraProgreso.value = porcentaje;
    */

}


window.addEventListener("load", inicio, false);