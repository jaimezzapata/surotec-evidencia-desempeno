function restriccionBiblioteca(prestamos, fechaActual) {
  let multaTotal = 0;

  for (let i = 0; i < prestamos.length; i++) {
    multaTotal += prestamos[i].multa;

    const diasRetraso = fechaActual - prestamos[i].fechaDevolucion;

    if (diasRetraso > 10) {
      return "Prestamo denegado: Excede el límite de días de retraso.";
    }
  }

  if (multaTotal > 10000) {
    return "Prestamo denegado: Multa total excede el límite permitido $10.000.";
  }

  return "Préstamo aprobado.";
}
