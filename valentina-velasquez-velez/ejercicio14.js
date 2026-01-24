function calcularDescuentoLealtad(compras, antiguedad) {
  if (compras.length === 0) {
    return 0
  }

  let sumaTotal = 0
  for (let i = 0; i < compras.length; i++) {
    sumaTotal += compras[i]
  }

  const promedio = sumaTotal / compras.length

  if (promedio > 100000 && antiguedad > 2) {
    return 0.25
  }

  return 0
}

module.exports = calcularDescuentoLealtad