function ejercicio12(texto, palabrasProhibidas) {
  const conteoTokens = {}
  const tokens = String(texto)
    .toLowerCase()
    .split(/[^0-9\p{L}]+/u)
    .filter((t) => t.length > 0)

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    conteoTokens[token] = (conteoTokens[token] || 0) + 1
  }

  const resultado = {}

  for (let i = 0; i < palabrasProhibidas.length; i++) {
    const palabraOriginal = palabrasProhibidas[i]
    const palabra = String(palabraOriginal).toLowerCase()
    resultado[palabraOriginal] = conteoTokens[palabra] || 0
  }

  return resultado
}

module.exports = { ejercicio12 }
