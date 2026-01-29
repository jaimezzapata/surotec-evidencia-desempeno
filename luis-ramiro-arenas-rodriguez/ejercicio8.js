function estadisticasPuntaje(puntajes) {
  let maximo = puntajes[0];
  let minimo = puntajes[0];
  let suma = 0;

  puntajes.forEach((puntaje) => {
    if (puntaje > maximo) {
      maximo = puntaje;
    }
    if (puntaje < minimo) {
      minimo = puntaje;
    }
  });

  puntajes.forEach((puntaje) => {
    if (puntaje !== maximo && puntaje !== minimo) {
      suma += puntaje;
    }
  });

  const cantidad = puntajes.length - 2;

  if (cantidad <= 0) {
    return 0;
  }
  return suma / cantidad;
}
