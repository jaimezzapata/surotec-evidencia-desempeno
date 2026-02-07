export function ejercicio18() {
  let historial = [
    { diasRetraso: 5, multa: 2000 },
    { diasRetraso: 12, multa: 3000 }
  ];

  let aprobado = evaluarPrestamo(historial);
  console.log(aprobado ? "Préstamo permitido" : "Préstamo denegado");
}

function evaluarPrestamo(registros) {
  let totalMultas = 0;

  for (let item of registros) {
    totalMultas += item.multa;

    if (item.diasRetraso > 10) {
      return false;
    }
  }

  if (totalMultas > 10000) {
    return false;
  }

  return true;
}
