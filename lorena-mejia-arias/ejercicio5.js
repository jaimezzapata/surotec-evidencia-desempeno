function evaluarAsistencia(registros) {
  let totalMulta = 0;
  let llegadasCriticas = 0;
  let limite = 8 * 60;

  for (let hora of registros) {
    let [h, m] = hora.split(":").map(Number);
    let llegada = h * 60 + m;

    if (llegada > limite) {
      let atraso = llegada - limite;
      totalMulta += atraso * 2;

      if (atraso > 15) {
        llegadasCriticas++;
      }
    }
  }

  if (llegadasCriticas > 2) {
    return "Suspendido";
  }

  return totalMulta;
}

export function ejercicio5() {
  let registros = ["08:05", "07:50", "08:20", "08:18", "08:00"];
  alert(evaluarAsistencia(registros));
}
