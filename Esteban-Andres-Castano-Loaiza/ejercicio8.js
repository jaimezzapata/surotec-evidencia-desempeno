function estadisticasDePuntaje(puntajes) {
  if (puntajes.length <= 2) return 0

  let mayor = puntajes[0]
  let menor = puntajes[0]
  let suma = 0

  for (let i = 0; i < puntajes.length; i++) {
    if (puntajes[i] > mayor) mayor = puntajes[i]
    if (puntajes[i] < menor) menor = puntajes[i]
    suma += puntajes[i]
  }

  const sumaRestante = suma - mayor - menor
  const cantidadRestante = puntajes.length - 2

  return sumaRestante / cantidadRestante
}