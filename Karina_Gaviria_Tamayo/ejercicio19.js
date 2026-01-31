export function planearRuta(destinos) {
  let combustible = 200;
  let rutaPosible = [];

  for (let destino of destinos) {
    if (combustible >= destino.distancia) {
      combustible -= destino.distancia;
      rutaPosible.push(destino.nombre);
    } else {
      break;
    }
  }

  return rutaPosible;
}
