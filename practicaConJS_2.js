function saludo(){
    alert("Esto es una alert, saludo!, llamado desde p[1]");

}

/* window.onload(saludo()); /* para cargar por defecto al cargar el sitio  */

// cargar por evento:

function ejecuta(){

    // este metodo devuelve un arreglo, que agarre la primera ([0]) y ejecute la funcion saludo
    //document.getElementsByTagName("p")[0].onclick=saludo();
    document.getElementsByTagName("p")[1].onclick = saludo;

    document.getElementById("parrafo1").onclick = function () {
        alert("click en el primer parrafo desde funcion anonima!");
    };

    document.querySelector("#parrafo3").onclick = function () {
        alert("click en parrafo 3 utilizando querySelector y funcion anonima");
    };

    document.querySelector("#funcionFlecha").onclick = () => {alert("Esto es el cuarto parrafo desde funcion flecha")};

    
    //document.getElementsByTagName("h2")[0].onclick = () => {alert("hiciste click sobre el h2[0]")};

    /*
    for (const i of document.getElementsByTagName("h2")) {
        i.onclick = function () {
            alert("Hiciste click sobre algun h2");
        }
    }*/

    // ciclo for para que pueda ejecutarse el codigo con cualquier elemento

    for (const i of document.querySelectorAll("h2")) {
        i.onclick = () => { alert("Presionaste un h2 y esto es una alerta desde una funcion de flecha con querySelectorAll con for recorriendolo") }
    }

    // cuando se usa getElementByClassName usar en una variable.

    // seleccion por clase: tambien devuelve array, asi que hay que indicarle, o recorrerlo con for
    document.getElementsByClassName("clasePruebaH3")[0].onclick = () => {alert("Estoy en el primer h3, clasePruebaH3 con get element clase")};

    /*
    for (const i of document.getElementsByClassName("clasePruebaH3")) {
        i.onclick = () => {alert("Esto esta dentro de un for, presionaste un h3, getElementByClassName")}
    }
    */

    //document.querySelector("#primerDiv").onclick = () => {alert("presionaste sobre el primer div")};

    // para apuntar al primer p dentro del div:
    //document.querySelector("#primerDiv p").onclick = () => {alert("p dentro de div")};

    // pseudoclases . ultimo p dentro de div
    //document.querySelector("#primerDiv p:last-child").onclick = () => {alert("último p dentro de div")};

    // evento sobre todos los p dentro de un elemento div y ademas al span spanUno :
    var elementos = document.querySelectorAll("#primerDiv p, #spanUno");

    for (const i of elementos) {
        i.onclick = () => {alert("Presionaste sobre algún elemento p dentro de primerDiv, o sobre el spanUno")}
    }



}


window.onload=ejecuta;
