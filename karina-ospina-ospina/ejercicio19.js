function ejercicio19(destinos) {
  if (!Array.isArray(destinos)) {
    return []
  }

  let combustible = 200
  const visitables = []

  for (let i = 0; i < destinos.length; i++) {
    const item = destinos[i]
    const distancia = item && typeof item.distancia === "number" ? item.distancia : NaN

    if (!Number.isFinite(distancia) || distancia < 0) {
      continue
    }

    if (distancia > combustible) {
      return visitables
    }

    combustible -= distancia
    visitables.push(item)
  }

  return visitables
}

module.exports = { ejercicio19 }
