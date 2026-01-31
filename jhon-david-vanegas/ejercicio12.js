function analizarPalabrasProhibidas(texto, prohibidas) {
  const resultado = {}
  const textoLimpio = texto
    .toLowerCase()
    .replace(/[.,!?;]/g, ' ')
    .split(/\s+/)

  for (let i = 0; i < prohibidas.length; i++) {
    const palabra = prohibidas[i].toLowerCase()
    resultado[palabra] = 0

    for (let j = 0; j < textoLimpio.length; j++) {
      if (textoLimpio[j] === palabra) {
        resultado[palabra]++
      }
    }
  }

  return resultado
}

module.exports = analizarPalabrasProhibidas
