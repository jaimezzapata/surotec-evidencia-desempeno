function ejercicio6(montosVentas) {
  let totalImpuestos = 0

  for (let i = 0; i < montosVentas.length; i++) {
    const ventaBruta = montosVentas[i]
    const iva = ventaBruta * 0.19
    const ventaNeta = ventaBruta - iva

    let retencion = 0
    if (ventaBruta > 500000) {
      retencion = ventaNeta * 0.04
    }

    totalImpuestos += iva + retencion
  }

  return totalImpuestos
}

module.exports = { ejercicio6 }