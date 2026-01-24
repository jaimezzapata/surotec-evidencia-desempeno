function descuentoLealtad(compras, antiguedad) {
  const suma = compras.reduce((total, compra) => total + compra, 0)
  const promedio = suma / compras.length

  if (promedio > 100000 && antiguedad > 2) {
    return 0.25
  }

  return 0
}

module.exports = descuentoLealtad
