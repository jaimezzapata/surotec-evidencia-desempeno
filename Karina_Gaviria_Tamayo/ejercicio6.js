export function calcularImpuestos(ventasBrutas) {
  let acumuladoImpuestos = 0;

  for (let venta of ventasBrutas) {
    let iva = venta * 0.19;
    let impuestoDeEstaVenta = iva;

    if (venta > 500000) {
      let retencion = venta * 0.04;
      impuestoDeEstaVenta = iva + retencion;
    }

    acumuladoImpuestos += impuestoDeEstaVenta;
  }

  return Math.round(acumuladoImpuestos);
}
