function planRutaEntrega(destinos) {
  const distanciaMaxima = 200
  let distanciaAcumulada = 0
  const destinosVisitables = []

  for (let i = 0; i < destinos.length; i++) {
    const destino = destinos[i]
    
    if (distanciaAcumulada + destino.distancia <= distanciaMaxima) {
      destinosVisitables.push(destino.nombre)
      distanciaAcumulada += destino.distancia
    } else {
      break
    }
  }

  return destinosVisitables
}

module.exports = planRutaEntrega