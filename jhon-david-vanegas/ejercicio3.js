function sistemaBecas(estudiante) {
  if (estudiante.promedio >= 4.5) {
    return true
  }

  if (
    estudiante.edad > 18 &&
    (estudiante.estrato === 1 || estudiante.estrato === 2) &&
    estudiante.promedio >= 4.0
  ) {
    return true
  }

  return false
}

module.exports = sistemaBecas
