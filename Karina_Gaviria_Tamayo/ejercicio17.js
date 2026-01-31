export function monitorearTransacciones(historial) {
  let sospechosas = [];
  let sumaAnteriores = 0;

  for (let i = 0; i < historial.length; i++) {
    let montoActual = historial[i];

    if (i > 0) {
      let promedioAnteriores = sumaAnteriores / i;
      if (montoActual > promedioAnteriores * 3) {
        sospechosas.push({
          indice: i,
          monto: montoActual,
          estado: "Sospechosa",
        });
      }
    }

    sumaAnteriores += montoActual;
  }

  return sospechosas;
}
