export function monitorearTransacciones(historial) {
    let sospechosas = [];
    let sumaAnteriores = 0;

    for (let i = 0; i < historial.length; i++) {
        let montoActual = historial[i];

        if (i > 0) {
            let promedioAnteriores = sumaAnteriores / i;
            let limiteAlerta = promedioAnteriores * 4;

            if (montoActual > limiteAlerta) {
                sospechosas.push({
                    monto: montoActual,
                    estado: "Sospechosa"
                });
            }
        }

        sumaAnteriores += montoActual;
    }

    return sospechosas;
}