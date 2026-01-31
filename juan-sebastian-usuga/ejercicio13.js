export function ejercicio13() {
  let temperaturas = [34, 36, 37, 38, 33, 36];

  let estado = evaluarTemperaturas(temperaturas);

  alert(estado);
}

function evaluarTemperaturas(temperaturas) {
  let consecutivas = 0;

  for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > 35) {
      consecutivas++;

      if (consecutivas === 3) {
        return "Alarma: Sobrecalentamiento";
      }
    } else {
      consecutivas = 0;
    }
  }

  return "Estado Normal";
}
