export function ejercicio6() {
  let ventas = [300000, 520000, 800000, 450000];

  let totalImpuestos = calcularImpuestos(ventas);

  alert(totalImpuestos);
}

function calcularImpuestos(ventas) {
  let totalImpuestos = 0;

  for (let i = 0; i < ventas.length; i++) {
    let venta = ventas[i];
    let iva = venta * 0.19;
    totalImpuestos += iva;

    if (venta > 500000) {
      let valorNeto = venta - iva;
      let retencion = valorNeto * 0.04;
      totalImpuestos += retencion;
    }
  }

  return Math.round(totalImpuestos);
}
