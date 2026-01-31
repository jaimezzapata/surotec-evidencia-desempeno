
function controlAsistencia(horasLlegada) {
  const horaLimite = 8 * 60
  let totalMulta = 0
  let retrasosGraves = 0

  for (const hora of horasLlegada) {
    const [h, m] = hora.split(':').map(Number)
    const minutosLlegada = h * 60 + m

    if (minutosLlegada > horaLimite) {
      const retraso = minutosLlegada - horaLimite
      totalMulta += retraso * 2

      if (retraso > 15) {
        retrasosGraves++
      }
    }
  }

  if (retrasosGraves > 2) {
    return 'Suspendido'
  }

  return totalMulta + ' $'
}

module.exports = controlAsistencia
