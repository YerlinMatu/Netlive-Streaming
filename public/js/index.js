//imprimir hora.
function Hora() {
  let tiempo = new Date();
  // solicito hora.
  let hora,
    minutos = (tiempo.getMinutes() < 10) ? "0" + tiempo.getMinutes() : tiempo.getMinutes(),
    ampm = (tiempo.getHours() > 12) ? "PM" : "AM";

  if (tiempo.getHours() == 0) {
    hora = 12;
  } else if (tiempo.getHours() > 12) {
    hora = tiempo.getHours() - 12;
  } else {
    hora = tiempo.getHours();
  }

  let tiempoCorriente = hora + ":" + minutos;

  // imprimir hora.
  document.querySelector(".hm").innerHTML = tiempoCorriente;
  document.querySelector(".ampm").innerHTML = ampm;
};

// Imprimir segundos.
Hora();
setInterval(function() {
  Hora()
}, 1000);