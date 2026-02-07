export function ejercicio19() {
  let ciudades = [
    { nombre: "Cali", distancia: 60 },
    { nombre: "Palmira", distancia: 50 },
    { nombre: "Buga", distancia: 120 },
    { nombre: "Tuluá", distancia: 40 }
  ];

  let recorrido = calcularRuta(ciudades);
  console.log(recorrido);
}

function calcularRuta(destinos) {
  let gasolinaDisponible = 200;
  let trayecto = [];

  for (let lugar of destinos) {
    if (lugar.distancia <= gasolinaDisponible) {
      trayecto.push(lugar);
      gasolinaDisponible -= lugar.distancia;
    } else {
      break;
    }
  }

  return trayecto;
}
