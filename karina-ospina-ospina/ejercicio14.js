function ejercicio14(compras, anosAntiguedad) {
  if (!Array.isArray(compras) || compras.length === 0) {
    return 0
  }

  let suma = 0

  for (let i = 0; i < compras.length; i++) {
    suma += compras[i]
  }

  const promedio = suma / compras.length

  if (promedio > 100000 && anosAntiguedad > 2) {
    return 0.25
  }

  return 0
}

module.exports = { ejercicio14 }
