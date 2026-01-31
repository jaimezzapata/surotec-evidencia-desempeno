function estadisticasPuntaje(puntajes) {
  if (puntajes.length <= 2) {
    return 'Error: El arreglo debe contener más de dos números'
  }

  let max = puntajes[0]
  let min = puntajes[0]
  let sumaTotal = 0

  for (let i = 0; i < puntajes.length; i++) {
    const valorActual = puntajes[i]
    sumaTotal += valorActual

    if (valorActual > max) {
      max = valorActual
    }

    if (valorActual < min) {
      min = valorActual
    }
  }

  const sumaAjustada = sumaTotal - max - min
  const promedio = sumaAjustada / (puntajes.length - 2)

  return promedio
}

module.exports = estadisticasPuntaje
