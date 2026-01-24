function calcularNomina(horasTrabajadas, valorHora) {
  if (horasTrabajadas <= 40) {
    return horasTrabajadas * valorHora
  } else if (horasTrabajadas <= 50) {
    const horasExtras = horasTrabajadas - 40
    return (40 * valorHora) + (horasExtras * valorHora * 1.5)
  } else {
    const horasExtrasDobles = horasTrabajadas - 50
    return (40 * valorHora) + (10 * valorHora * 1.5) + (horasExtrasDobles * valorHora * 2)
  }
}

module.exports = calcularNomina                                                 