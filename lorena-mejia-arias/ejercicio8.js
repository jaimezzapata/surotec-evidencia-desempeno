export function ejercicio8() {
  let notas = [3.5, 4.2, 5.0, 2.8, 4.7];
  let resultado = promedioAjustado(notas);
  alert(resultado);
}

function promedioAjustado(valores) {
  let max = valores[0];
  let min = valores[0];
  let total = 0;

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > max) max = valores[i];
    if (valores[i] < min) min = valores[i];
    total += valores[i];
  }

  return Number(((total - max - min) / (valores.length - 2)).toFixed(2));
}
