function controlarAsistencia(llegadas) {
  let sancion = 0
  let reportesGraves = 0

  for (let i = 0; i < llegadas.length; i++) {
    const partes = llegadas[i].split(':')
    const horas = parseInt(partes[0])
    const minutos = parseInt(partes[1])
    
    const llegadaEnMinutos = (horas * 60) + minutos
    const limiteEnMinutos = 480 // Esto es las 08:00 (8 * 60)

    if (llegadaEnMinutos > limiteEnMinutos) {
      const retraso = llegadaEnMinutos - limiteEnMinutos
      sancion += retraso * 2

      if (retraso > 15) {
        reportesGraves++
      }
    }
  }

  if (reportesGraves > 2) {
    return 'Suspendido'
  }

  return sancion
}

module.exports = controlarAsistencia
