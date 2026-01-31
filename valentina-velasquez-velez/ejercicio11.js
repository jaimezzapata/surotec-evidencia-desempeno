function gestionarCapacidad(grupos, capacidad) {
  let estudiantesFuera = 0

  for (let i = 0; i < grupos.length; i++) {
    const grupo = grupos[i]

    if (grupo <= capacidad) {
      capacidad -= grupo
    } else {
      estudiantesFuera += grupo
      capacidad = 0
    }
  }

  return estudiantesFuera
}

module.exports = gestionarCapacidad