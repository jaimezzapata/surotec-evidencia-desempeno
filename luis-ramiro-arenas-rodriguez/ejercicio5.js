function controlAsistencia(horasLlegada) {
  let multa = 0;
  let retrasos = 0;

  horasLlegada.forEach((hora) => {
    const [horaLlegada, minutoLlegada] = hora.split(":").map(Number);
    const minutosLlegada = horaLlegada * 60 + minutoLlegada;
    const minutosLimite = 8 * 60;

    if (minutosLlegada > minutosLimite) {
      const minutosTarde = minutosLlegada - minutosLimite;
      multa += minutosTarde * 2;

      if (minutosTarde > 15) {
        retrasos++;
      }
    }
  });

  if (retrasos > 2) {
    return "Suspendido";
  }

  return multa;
}
