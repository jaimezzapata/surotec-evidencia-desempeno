function ejercicio11(capacidad, grupos) {
  let capacidadRestante = capacidad

  if (!Array.isArray(grupos) || typeof capacidadRestante !== "number" || capacidadRestante < 0) {
    capacidadRestante = 0
  }

  let estudiantesFuera = 0
  let seLleno = false

  for (let i = 0; i < grupos.length; i++) {
    const grupo = grupos[i]

    if (seLleno) {
      estudiantesFuera += grupo
      continue
    }

    if (grupo <= capacidadRestante) {
      capacidadRestante -= grupo
    } else {
      seLleno = true
      estudiantesFuera += grupo
    }
  }

  return estudiantesFuera
}

module.exports = { ejercicio11 }
