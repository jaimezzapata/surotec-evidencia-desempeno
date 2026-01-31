export function filtrarTareasUrgentes(tareas) {
  let tareasFiltradas = [];

  for (let tarea of tareas) {
    if (tarea.prioridad === "alta" && tarea.dias < 2) {
      tareasFiltradas.push(tarea);
    }
  }

  return tareasFiltradas;
}
