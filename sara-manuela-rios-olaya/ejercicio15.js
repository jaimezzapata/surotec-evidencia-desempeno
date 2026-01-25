export function ejercicio15(){

    const listaTareas = [
        {descripcion: "Entrega de reportes para el nuevo Backlog", prioridad: "alta", diasParaVencimiento: 1},
        {descripcion: "Revisión de correos electrónicos", prioridad: "baja", diasParaVencimiento: 5}, 
        {descripcion: "Entrega de PBIs para el nuevo Sprint", prioridad: "alta", diasParaVencimiento:2},
        {descripcion: "Actualización del servidor", prioridad: "alta", diasParaVencimiento: 1},
        {descripcion: "Llamar a clientes para nuevos paquetes de servicios", prioridad: "media", diasParaVencimiento: 7},
    ]; 

    const tareasUrgentes = listaTareas.filter(tarea =>{
        return tarea.prioridad === "alta" && tarea.diasParaVencimiento < 2;
    });
    const mensajesTareas = tareasUrgentes.map(tareas => tareas.descripcion).join(", ");
    alert(`Tareas Urgentes encontradas: ${tareasUrgentes.length}\nDetalle: ${mensajesTareas || "Ninguna"}`);
}