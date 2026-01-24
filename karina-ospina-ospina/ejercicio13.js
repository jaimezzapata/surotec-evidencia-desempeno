function ejercicio13(temperaturas) {
  let consecutivasAltas = 0

  for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > 35) {
      consecutivasAltas++
      if (consecutivasAltas === 3) {
        return "Alarma: Sobrecalentamiento"
      }
    } else {
      consecutivasAltas = 0
    }
  }

  return "Estado Normal"
}

module.exports = { ejercicio13 }
