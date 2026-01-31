function descuentoPorLealtad(compras, antiguedad) {
  let suma = 0
  for (let i = 0; i < compras.length; i++) {
    suma += compras[i]
  }
  
  const promedio = suma / compras.length

  if (promedio > 100000 && antiguedad > 2) {
    return true
  }

  return false
}