export function calcularNomina(horasTrabajadas, valorHora) {
  let salarioTotal = 0;

  if (horasTrabajadas <= 40) {
    salarioTotal = horasTrabajadas * valorHora;
    
  } else if (horasTrabajadas <= 50) {
    let normales = 40 * valorHora;
    let extras = (horasTrabajadas - 40) * (valorHora * 1.5);
    salarioTotal = normales + extras;
  } else {
    let normales = 40 * valorHora;
    let extrasMedias = 10 * (valorHora * 1.5);
    let extrasMaximas = (horasTrabajadas - 50) * (valorHora * 2.0);
    salarioTotal = normales + extrasMedias + extrasMaximas;
  }

  return Math.round(salarioTotal);
}
