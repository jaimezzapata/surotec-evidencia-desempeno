function nominaConRecargos(horas, valorHora) {
  let salario = 0

  if (horas <= 40) {
    salario = horas * valorHora
  } else if (horas <= 50) {
    const horasNormales = 40 * valorHora
    const horasExtras = (horas - 40) * (valorHora * 1.5)
    salario = horasNormales + horasExtras
  } else {
    const horasNormales = 40 * valorHora
    const horasExtras50 = 10 * (valorHora * 1.5)
    const horasExtras100 = (horas - 50) * (valorHora * 2)
    salario = horasNormales + horasExtras50 + horasExtras100
  }

  return salario
}