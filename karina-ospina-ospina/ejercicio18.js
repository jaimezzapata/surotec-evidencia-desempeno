function ejercicio18(prestamos) {
  if (!Array.isArray(prestamos)) {
    return "Denegado"
  }

  let multaTotal = 0

  for (let i = 0; i < prestamos.length; i++) {
    const prestamo = prestamos[i]
    const diasRetraso = typeof prestamo.diasRetraso === "number" ? prestamo.diasRetraso : 0
    const multa = typeof prestamo.multa === "number" ? prestamo.multa : 0

    if (diasRetraso > 10) {
      return "Denegado"
    }

    multaTotal += multa
    if (multaTotal > 10000) {
      return "Denegado"
    }
  }

  return "Aprobado"
}

module.exports = { ejercicio18 }
