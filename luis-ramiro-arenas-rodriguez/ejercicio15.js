function filtroTareas (tareas) {
    const tareasUrgentes = [];

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].prioridad === "alta" && tareas[i].dias < 2) {
            tareasUrgentes.push(tareas[i]);
        }
    }

    return tareasUrgentes;
}