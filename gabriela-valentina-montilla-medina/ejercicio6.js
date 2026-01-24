export function ejercicio6() {
  let cantidadVentas = Number(prompt("Ingrese la cantidad de ventas"))
  let totalImpuestos = 0

  for (let i = 0; i < cantidadVentas; i++) {
    let venta = Number(prompt("Ingrese el valor de la venta"))

    let iva = venta * 0.19
    let retencion = 0

    if (venta > 500000) {
      retencion = venta * 0.04
    }

    totalImpuestos += iva + retencion
  }

  return totalImpuestos
}
