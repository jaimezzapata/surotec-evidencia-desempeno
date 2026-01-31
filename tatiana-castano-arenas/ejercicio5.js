export function calcularAsistenciaEmpleado(nombre, llegadas) {
    const horaLimite = 8 * 60;
    let costoTotalRetraso = 0;
    let faltasGraves = 0;

    llegadas.forEach(hora => {
        const [hh, mm] = hora.split(":").map(Number);
        const minutosLlegada = hh * 60 + mm;

        if (minutosLlegada > horaLimite) {
            const minutosRetraso = minutosLlegada - horaLimite;
            costoTotalRetraso += minutosRetraso * 2;

            if (minutosRetraso > 15) {
                faltasGraves++;
            }
        }
    });

    if (faltasGraves > 2) {
        return `EMPLEADO: ${nombre} - ESTADO: SUSPENDIDO (Más de 2 retardos de +15 min)`;
    }

    return `EMPLEADO: ${nombre} - Multa acumulada: $${costoTotalRetraso}`;
}