function rutaEntrega(destinos) {
  const destinosPosibles = [];
  let combustibleTotal = 200;

  for (let i = 0; i < destinos.length; i++) {
    if (destinos[i].distancia <= combustibleTotal) {
      destinosPosibles.push(destinos[i]);
      combustibleTotal -= destinos[i].distancia;
    } else {
      break;
    }
  }

  return destinosPosibles;
}
