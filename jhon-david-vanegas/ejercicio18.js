function restriccionBiblioteca(prestamos) {
  const hoy = new Date()
  let multaTotal = 0

  for (let i = 0; i < prestamos.length; i++) {
    const fechaDevolucion = new Date(prestamos[i].fechaDevolucion)
    const diferenciaDias =
      (hoy - fechaDevolucion) / (1000 * 60 * 60 * 24)

    if (diferenciaDias > 10) {
      return false
    }

    multaTotal += prestamos[i].multa
  }

  if (multaTotal > 10000) {
    return false
  }

  return true
}

module.exports = restriccionBiblioteca
