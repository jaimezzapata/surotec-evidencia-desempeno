function impuestosVentas(ventas) {
  let totalImpuestos = 0;

  ventas.forEach((venta) => {
    const iva = venta * 0.19;
    let impuestosVenta = iva;

    if (venta > 500000) {
      const valorNeto = venta / iva;
      const retencion = valorNeto * 0.04;
      impuestosVenta += retencion;
    }

    totalImpuestos += impuestosVenta;
  });

  return totalImpuestos;
}
