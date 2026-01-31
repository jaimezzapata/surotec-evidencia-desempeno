export function filtrarTareasUrgentes(tareas) {
    let urgentes = [];

    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];

        if (tarea.prioridad === "alta" && tarea.dias < 2) {
            urgentes.push(tarea.descripcion);
        }
    }

    return urgentes;
}