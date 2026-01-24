function filtroTareasUrgentes(tareas) {
    return tareas.filter( tarea => tarea.prioridad ==="alta" && tarea.diasParaVencimiento < 2);
}
module.exports = filtroTareasUrgentes;