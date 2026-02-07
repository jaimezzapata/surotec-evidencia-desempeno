export function ejercicio9() {
  let horas = Number(prompt("Ingrese horas trabajadas"));
  let pagoHora = Number(prompt("Ingrese valor por hora"));
  alert(calcularPago(horas, pagoHora));
}

function calcularPago(horas, tarifa) {
  if (horas <= 40) {
    return horas * tarifa;
  }

  if (horas <= 50) {
    return 40 * tarifa + (horas - 40) * tarifa * 1.5;
  }

  return (
    40 * tarifa +
    10 * tarifa * 1.5 +
    (horas - 50) * tarifa * 2
  );
}
