
// Creamos una Funcion para mostar la Hora.
function showTime() {
    // Declaramos la variable de las QuerySelector y captamos los items por ID
    let tiempo = document.querySelector("#fecha");
    let hour = document.querySelector("#hora");
    let tiempo1 = document.querySelector("#fecha1");
    let hour1 = document.querySelector("#hora1");
    // Creamos las variables para Date ()
    let today = new Date();
    let todayHora = new Date();
    // Creamos variable y le asigamos el valor que tomamos de las constantes anteriores con el metodo Date().
    let fecha = today.toLocaleDateString();
    let hora = todayHora.toLocaleTimeString();
    //Imprimimos la fecha y hora en la pantalla.
    tiempo.innerText = `Hoy es ${fecha}`;
    hour.innerText = `La hora ${hora}`;
    tiempo1.innerText = `Hoy es ${fecha}`;
    hour1.innerText = `La hora ${hora}`;
    //Ponemos un setTimeout para autoejecutar la funcion cada segundo.
    setTimeout("showTime()",1000);
}