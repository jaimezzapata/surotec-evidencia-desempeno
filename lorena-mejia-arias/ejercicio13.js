export function ejercicio13() {
  let registros = [34, 36, 37, 38, 33, 36];
  let resultado = revisarTemperaturas(registros);
  alert(resultado);
}

function revisarTemperaturas(valores) {
  let contador = 0;

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 35) {
      contador++;

      if (contador === 3) {
        return "Alarma: Sobrecalentamiento";
      }
    } else {
      contador = 0;
    }
  }

  return "Estado Normal";
}
