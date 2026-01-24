function ejercicio9(horasTrabajadas, valorHora) {
  if (horasTrabajadas <= 0 || valorHora <= 0) {
    return 0
  }

  let total = 0

  const horasNormales = Math.min(horasTrabajadas, 40)
  total += horasNormales * valorHora

  if (horasTrabajadas > 40) {
    const horas50 = Math.min(horasTrabajadas - 40, 10)
    total += horas50 * valorHora * 1.5
  }

  if (horasTrabajadas > 50) {
    const horas100 = horasTrabajadas - 50
    total += horas100 * valorHora * 2
  }

  return total
}

module.exports = { ejercicio9 }
