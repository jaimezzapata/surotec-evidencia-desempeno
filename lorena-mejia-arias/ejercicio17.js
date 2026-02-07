export function ejercicio17() {
  let movimientos = [10000, 12000, 11000, 50000, 13000];
  let analisis = analizarMovimientos(movimientos);
  console.log(analisis);
}

function analizarMovimientos(lista) {
  let reporte = [];
  let acumulado = 0;

  for (let i = 0; i < lista.length; i++) {
    let estado = "Normal";

    if (i > 0) {
      let promedio = acumulado / i;
      if (lista[i] > promedio * 3) {
        estado = "Sospechosa";
      }
    }

    acumulado += lista[i];

    reporte.push({
      monto: lista[i],
      estado: estado
    });
  }

  return reporte;
}
