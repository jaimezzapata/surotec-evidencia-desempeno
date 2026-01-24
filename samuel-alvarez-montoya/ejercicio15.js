function filtrarTareasUrgentes(tareas) {
    let tareasUrgentes = [];

    for (let i = 0; i < tareas.length; i++) {
        if (
            tareas[i].prioridad === "alta" && tareas[i].diasVencimiento < 2
        ) {
            tareasUrgentes.push(tareas[i]);
        }
    }

    return tareasUrgentes;
}
