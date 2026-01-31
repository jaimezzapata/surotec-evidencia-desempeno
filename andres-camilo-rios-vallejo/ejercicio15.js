export function filtrarTareas(tareas) {
    const resultado = []
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i]
        // Se busca prioridad "alta" y dias menor a 2
        if (tarea.prioridad === 'alta' && tarea.dias < 2) {
            resultado.push(tarea)
        }
    }
    return resultado
}