function alertaSensores(temperaturas) {
  let contador = 0

  for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > 35) {
      contador++
      if (contador === 3) {
        return 'Alarma: Sobrecalentamiento'
      }
    } else {
      contador = 0
    }
  }

  return 'Estado Normal'
}

module.exports = alertaSensores