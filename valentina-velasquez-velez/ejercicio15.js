function filtrarTareasUrgentes(tareas) {
  return tareas.filter(tarea => tarea.prioridad === 'alta' && tarea.dias < 2)
}

module.exports = filtrarTareasUrgentes