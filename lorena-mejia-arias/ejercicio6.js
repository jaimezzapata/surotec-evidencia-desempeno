export function ejercicio6() {
  let registrosVentas = [300000, 520000, 800000, 450000];
  let impuestosTotales = obtenerImpuestos(registrosVentas);
  alert(impuestosTotales);
}

function obtenerImpuestos(listaVentas) {
  let acumulado = 0;

  for (let index = 0; index < listaVentas.length; index++) {
    let monto = listaVentas[index];
    let ivaCalculado = monto * 0.19;
    acumulado += ivaCalculado;

    if (monto > 500000) {
      let base = monto - ivaCalculado;
      acumulado += base * 0.04;
    }
  }

  return Math.round(acumulado);
}
