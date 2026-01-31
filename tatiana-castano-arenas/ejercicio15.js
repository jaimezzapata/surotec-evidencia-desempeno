export function filtrarTareasUrgentes(tareas) {
    return tareas.filter(tarea => 
        tarea.prioridad.toLowerCase() === "alta" && 
        tarea.dias < 2
    );
}