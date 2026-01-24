export const asistenciasPrueba1 = ["08:05", "08:20", "08:10", "08:30", "07:55"];
export const asistenciasPrueba2 = ["08:05", "08:20", "08:10", "08:30", "08:40"];

export function evaluarAsistencia(llegadas) {
    let ocasionesTardeCriticas = 0;
    let totalMulta = 0;

    llegadas.forEach(horaLlegada => {
        const [hora, minutos] = horaLlegada.split(':').map(Number);
        const minutosTotales = (hora * 60) + minutos;
        const limiteMinutos = 8 * 60; 

        if (minutosTotales > limiteMinutos) {
            const retraso = minutosTotales - limiteMinutos;
            totalMulta += retraso * 2;
            
            if (retraso > 15) {
                ocasionesTardeCriticas++;
            }
        }
    });

    if (ocasionesTardeCriticas > 2) {
        return "Suspendido";
    }

    return `Multa total: $${totalMulta}`;
}