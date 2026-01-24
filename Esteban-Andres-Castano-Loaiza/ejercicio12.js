function analisisDePalabrasProhibidas(texto, prohibidas) {
  const palabras = texto.toLowerCase().split(/\s+/)
  const reporte = {}

  for (let i = 0; i < prohibidas.length; i++) {
    const palabraProhibida = prohibidas[i].toLowerCase()
    let contador = 0
    
    for (let j = 0; j < palabras.length; j++) {
      if (palabras[j] === palabraProhibida) {
        contador++
      }
    }
    
    if (contador > 0) {
      reporte[palabraProhibida] = contador
    }
  }

  return reporte
}