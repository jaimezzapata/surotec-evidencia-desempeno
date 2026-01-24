function ejercicio5(horasLlegada) {
  let totalMulta = 0
  let llegadasTardeGraves = 0

  for (let i = 0; i < horasLlegada.length; i++) {
    const partes = horasLlegada[i].split(":")
    const minutosLlegada = Number(partes[0]) * 60 + Number(partes[1])
    const minutosLimite = 8 * 60

    if (minutosLlegada > minutosLimite) {
      const minutosRetraso = minutosLlegada - minutosLimite
      totalMulta += minutosRetraso * 2

      if (minutosRetraso > 15) {
        llegadasTardeGraves++
      }
    }
  }

  if (llegadasTardeGraves > 2) {
    return "Suspendido"
  }

  return totalMulta
}

module.exports = { ejercicio5 }