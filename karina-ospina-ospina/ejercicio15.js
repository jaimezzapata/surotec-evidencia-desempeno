function ejercicio15(tareas) {
  if (!Array.isArray(tareas)) {
    return []
  }

  const urgentes = []

  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i]

    if (
      tarea.prioridad === "alta" &&
      typeof tarea.dias === "number" &&
      tarea.dias < 2
    ) {
      urgentes.push(tarea)
    }
  }

  return urgentes
}

module.exports = { ejercicio15 }
