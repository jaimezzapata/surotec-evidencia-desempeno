export const tareasPrueba = [
    { descripcion: "Corregir bug de login", prioridad: "alta", fechaVencimiento: "2026-01-27" },
    { descripcion: "Revisar correo", prioridad: "baja", fechaVencimiento: "2026-02-05" },
    { descripcion: "Preparar presentación", prioridad: "alta", fechaVencimiento: "2026-01-30" },
    { descripcion: "Subir cambios a producción", prioridad: "alta", fechaVencimiento: "2026-01-26" },
    { descripcion: "Reunión de equipo", prioridad: "media", fechaVencimiento: "2026-01-28" }
];

export function filtrarTareasUrgentes(tareas) {
    const hoy = new Date();
    const milisegundosPorDia = 1000 * 60 * 60 * 24;

    return tareas.filter(tarea => {
        const fechaVencimiento = new Date(tarea.fechaVencimiento);
        
        const diferenciaMilisegundos = fechaVencimiento - hoy;
        const diasRestantes = Math.ceil(diferenciaMilisegundos / milisegundosPorDia);

        const esPrioridadAlta = tarea.prioridad === "alta";
        const esVencimientoCritico = diasRestantes >= 0 && diasRestantes < 2;

        return esPrioridadAlta && esVencimientoCritico;
    });
}