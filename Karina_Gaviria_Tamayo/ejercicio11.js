export function gestionarCapacidad(capacidadMaxima, grupos) {
  let capacidadActual = 0;
  let fuera = 0;
  let aulaLlena = false;

  for (let grupo of grupos) {
    if (!aulaLlena && capacidadActual + grupo <= capacidadMaxima) {
      capacidadActual += grupo;
    } else {
      aulaLlena = true;
      fuera += grupo;
    }
  }

  return fuera;
}
