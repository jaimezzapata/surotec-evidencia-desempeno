function capacidadDeAula(capacidad, grupos) {
  let ocupacionActual = 0

  for (let i = 0; i < grupos.length; i++) {
    if (ocupacionActual + grupos[i] <= capacidad) {
      ocupacionActual += grupos[i]
    } else {
      let remanente = 0
      for (let j = i; j < grupos.length; j++) {
        remanente += grupos[j]
      }
      return remanente
    }
  }

  return 0
}