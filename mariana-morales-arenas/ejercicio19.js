function planRutaEntrega(destinos) {
 let combustible = 200;
  let visitables = [];

  for (let destino of destinos) {
    if (combustible >= destino) {
      visitables.push(destino);
      combustible -= destino;
    } else {
      break;
    }
  }

  return visitables;
}

module.exports = planRutaEntrega;
