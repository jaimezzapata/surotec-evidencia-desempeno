function impuestosVentas(ventas) {
  return ventas.reduce((total, venta) => {
    const iva = venta * 0.19
    let impuestos = iva

    if (venta > 500000) {
      const valorNeto = venta + iva
      impuestos += valorNeto * 0.04
    }

    return total + impuestos
  }, 0)
}

module.exports = impuestosVentas
