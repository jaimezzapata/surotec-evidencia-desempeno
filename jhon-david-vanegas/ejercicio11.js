function capacidadAula(capacidadMaxima, grupos) {
  let ocupados = 0
  let fuera = 0
  let aulaLlena = false

  for (let i = 0; i < grupos.length; i++) {
    if (!aulaLlena && ocupados + grupos[i] <= capacidadMaxima) {
      ocupados += grupos[i]
    } else {
      aulaLlena = true
      fuera += grupos[i]
    }
  }

  return fuera
}

module.exports = capacidadAula
