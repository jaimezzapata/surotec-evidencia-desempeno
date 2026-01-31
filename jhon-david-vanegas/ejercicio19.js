function planRutaEntrega(destinos) {
  let combustible = 200
  const visitados = []

  for (let i = 0; i < destinos.length; i++) {
    if (destinos[i].distancia <= combustible) {
      combustible -= destinos[i].distancia
      visitados.push(destinos[i])
    } else {
      break
    }
  }

  return visitados
}

module.exports = planRutaEntrega
