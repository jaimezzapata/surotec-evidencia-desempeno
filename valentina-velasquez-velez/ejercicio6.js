function calcularImpuestosVentas(ventas) {
  let totalImpuestos = 0
    const IVA = 0.19
    const retencion = 0.04

    for (let i = 0; i < ventas.length; i++) {
        let montoVenta = ventas[i]
        let impuestoIVA = montoVenta * IVA
        let impuestoRetencion = 0       
        if (montoVenta > 500000) {
            impuestoRetencion = montoVenta * retencion
        }
        totalImpuestos += impuestoIVA + impuestoRetencion
    }
    return totalImpuestos
}
module.exports = calcularImpuestosVentas