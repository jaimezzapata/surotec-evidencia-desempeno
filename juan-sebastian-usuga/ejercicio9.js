export function ejercicio9() {
  let horasTrabajadas = Number(prompt("Ingrese horas trabajadas"));
  let valorHora = Number(prompt("Ingrese valor por hora"));

  let salario = calcularSalario(horasTrabajadas, valorHora);

  alert(salario);
}

function calcularSalario(horasTrabajadas, valorHora) {
  let salario = 0;

  if (horasTrabajadas <= 40) {
    salario = horasTrabajadas * valorHora;
  } else if (horasTrabajadas <= 50) {
    salario =
      40 * valorHora +
      (horasTrabajadas - 40) * valorHora * 1.5;
  } else {
    salario =
      40 * valorHora +
      10 * valorHora * 1.5 +
      (horasTrabajadas - 50) * valorHora * 2;
  }

  return salario;
}
