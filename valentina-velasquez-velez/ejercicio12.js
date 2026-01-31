function analisisPalabrasProhibidas(texto, prohibidas) {
  const palabrasTexto = texto.toLowerCase().split(' ')
  const resultado = {}

  for (let i = 0; i < prohibidas.length; i++) {
    const palabraMala = prohibidas[i].toLowerCase()
    let contador = 0

    for (let j = 0; j < palabrasTexto.length; j++) {
      if (palabrasTexto[j] === palabraMala) {
        contador++
      }
    }
    resultado[palabraMala] = contador
  }

  return resultado
}

module.exports = analisisPalabrasProhibidas