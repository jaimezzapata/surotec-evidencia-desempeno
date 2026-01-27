export const historialTransaccionesPrueba = [150000, 200000, 180000, 1000000, 160000, 2500000];

export function monitorearTransacciones(historial) {
    const resultados = [];
    
    for (let i = 0; i < historial.length; i++) {
        const montoActual = historial[i];
        let estado = "Normal";
        let promedioAnterior = 0;

        if (i > 0) {
            const anteriores = historial.slice(0, i);
            const sumaAnteriores = anteriores.reduce((acc, t) => acc + t, 0);
            promedioAnterior = sumaAnteriores / anteriores.length;

            if (montoActual > (promedioAnterior * 4)) {
                estado = "Sospechosa";
            }
        }

        resultados.push({
            transaccion: i + 1,
            monto: montoActual,
            promedioPrevio: Number(promedioAnterior.toFixed(2)),
            estado: estado
        });
    }

    return resultados;
}