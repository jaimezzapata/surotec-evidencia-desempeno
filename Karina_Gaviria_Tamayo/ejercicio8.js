export function calcularEstadisticas(puntajes) {
  if (puntajes.length < 3) {
    return 0;
  }

  let maximo = puntajes[0];
  let minimo = puntajes[0];
  let sumaTotal = 0;

  for (let puntaje of puntajes) {
    if (puntaje > maximo) {
      maximo = puntaje;
    }
    if (puntaje < minimo) {
      minimo = puntaje;
    }
    sumaTotal += puntaje;
  }

  let sumaRestantes = sumaTotal - maximo - minimo;
  let cantidadRestantes = puntajes.length - 2;
  let promedio = sumaRestantes / cantidadRestantes;

  return Math.round(promedio);
}
