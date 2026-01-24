function filtrarTareas(tareas) {
    return tareas.filter(tarea => {
        return tarea.prioridad === 'alta' && tarea.dias < 2
    })
}