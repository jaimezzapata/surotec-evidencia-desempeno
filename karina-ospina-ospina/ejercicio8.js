function ejercicio8(numeros) {
  if (!Array.isArray(numeros) || numeros.length < 3) {
    return null
  }

  let maximo = numeros[0]
  let minimo = numeros[0]

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i]
    }
    if (numeros[i] < minimo) {
      minimo = numeros[i]
    }
  }

  let suma = 0
  let cantidad = 0

  for (let i = 0; i < numeros.length; i++) {
    const valor = numeros[i]
    if (valor !== maximo && valor !== minimo) {
      suma += valor
      cantidad++
    }
  }

  if (cantidad === 0) {
    return 0
  }

  return suma / cantidad
}

module.exports = { ejercicio8 }
