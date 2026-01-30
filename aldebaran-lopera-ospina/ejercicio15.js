
export function filtrarTareasUrgentes(tareas) {
    const urgentes = tareas.filter(tarea => {
        const esPrioritaria = tarea.prioridad === 'alta';
        
        const venceYa = tarea.dias < 2;

        return esPrioritaria && venceYa;
    });

    return urgentes;
}