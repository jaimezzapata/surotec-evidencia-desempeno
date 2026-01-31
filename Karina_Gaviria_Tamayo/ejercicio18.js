export function validarPrestamo(prestamos) {
  let multaTotal = 0;
  let tieneMuchoRetraso = false;

  for (let prestamo of prestamos) {
    multaTotal += prestamo.multa;

    if (prestamo.diasRetraso > 10) {
      tieneMuchoRetraso = true;
    }
  }

  if (tieneMuchoRetraso || multaTotal > 10000) {
    return "Prestamo Denegado";
  }

  return "Prestamo Autorizado";
}
